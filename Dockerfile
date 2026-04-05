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
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
RUN mkdir -p .next/static
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./standalone-raw
RUN cp -r ./standalone-raw/node_modules ./node_modules 2>/dev/null || true && \
    SERVER_JS=$(find ./standalone-raw -name "server.js" -type f | head -1) && \
    SERVER_DIR=$(dirname "$SERVER_JS") && \
    cp -r "$SERVER_DIR"/* ./ && \
    cp -r "$SERVER_DIR"/.next ./ 2>/dev/null || true && \
    rm -rf ./standalone-raw

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
