FROM node:20-alpine AS base

# --- Dependencies ---
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# --- Build ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN npm run build

# --- Production ---
FROM base AS runner
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the entire standalone output preserving directory structure
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone /app/standalone

# Find the actual app directory containing server.js and set up
RUN SERVER_JS=$(find /app/standalone -name "server.js" -maxdepth 5 -not -path "*/node_modules/*" | head -1) && \
    APP_DIR=$(dirname "$SERVER_JS") && \
    echo "$APP_DIR" > /app/app-dir.txt

# Copy static assets and public into the correct .next location
COPY --from=builder /app/public /tmp/public
COPY --from=builder /app/.next/static /tmp/static

RUN APP_DIR=$(cat /app/app-dir.txt) && \
    cp -r /tmp/public "$APP_DIR/public" && \
    mkdir -p "$APP_DIR/.next/static" && \
    cp -r /tmp/static/* "$APP_DIR/.next/static/" && \
    rm -rf /tmp/public /tmp/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD APP_DIR=$(cat /app/app-dir.txt) && cd "$APP_DIR" && node server.js
