export interface MockResponse {
  reply: string;
  suggestions: string[];
}

const MOCK_RESPONSES: Record<string, MockResponse> = {
  "I'm feeling stressed lately": {
    reply: `I hear you, and I'm glad you're sharing that with me. 💜 Stress can feel overwhelming, but you're already taking a great step by acknowledging it.

Here are a few things that might help right now:

🌬️ **Try the Breathe & Ground spark** — 4 counts in, hold 4, out 4. It can reset your nervous system in just 2 minutes.

📝 **Name 3 things** you can see, 2 you can hear, and 1 you can feel. This grounding technique brings you back to the present.

🎵 **Put on a song** that makes you feel calm. Music can shift your mood faster than almost anything.

Remember: stress is temporary, but your ability to handle it is permanent. You've gotten through every tough day so far. 🌟`,
    suggestions: [
      "Let's try a breathing exercise",
      "Give me a Joy Spark activity",
      "I want to talk more about it",
    ],
  },
  "Give me a Joy Spark activity": {
    reply: `Here's a perfect Joy Spark for you! ✨

🎨 **Doodle Break** (2 min)
Grab a pen and doodle whatever comes to mind. No rules, no judgment — just let your hand move freely.

Why it works: Creative expression releases tension and activates the "flow state" in your brain, which naturally boosts mood.

Want to try it right now? Set a 2-minute timer and just go for it! When you're done, notice how you feel. Most people report feeling lighter and more relaxed. 😊

You can also check out all Joy Sparks in the Sparks tab — there are 8 different activities across creativity, music, mindfulness, and more!`,
    suggestions: [
      "Give me another one",
      "I want something more active",
      "How does Joy Score work?",
    ],
  },
  "Help me with body positivity": {
    reply: `I'm so glad you brought this up. Body positivity is at the heart of Glow & Flow. 💜

Here's what I believe — and what science shows:

🪞 **Your body is not the problem.** Society's narrow standards are. Your body carries you through every day, and that's incredible.

🌟 **Try this:** Instead of looking in the mirror and judging, try looking and saying ONE kind thing. "My eyes are bright today" or "I showed up for myself." The Mirror Kindness challenge in our Challenges tab is built around this!

💡 **Reframe movement:** Exercise isn't punishment for what you ate. It's a celebration of what your body can do. That's why our Joy Sparks focus on JOY, not calories.

📵 **Curate your feed:** Unfollow accounts that make you feel "less than." Your mental space matters.

You are worthy exactly as you are right now — not 10 pounds lighter, not after a makeover. Right. Now. ✨`,
    suggestions: [
      "Tell me about the Mirror Kindness challenge",
      "I struggle with comparison",
      "Give me a Joy Spark activity",
    ],
  },
  "I need some motivation today": {
    reply: `Hey, the fact that you're here asking for motivation? That IS motivation. You showed up. 🌟

Here's your daily boost:

💪 **You don't need to be perfect.** You just need to take one small step. Even the tiniest action counts.

🌱 **Progress isn't always visible.** Seeds grow underground before they break through the soil. Your growth is happening even when you can't see it.

✨ **Today's challenge:** Do ONE thing that future-you will thank you for. It could be:
- Drinking a glass of water
- Sending a kind message to someone
- Doing a 2-minute Joy Spark
- Just taking 3 deep breaths

That's it. One thing. You've got this!

Remember: motivation follows action, not the other way around. Start small, and the momentum will build. 💜`,
    suggestions: [
      "Give me a Joy Spark activity",
      "Let's try a breathing exercise",
      "I want to join a challenge",
    ],
  },
  "Let's try a breathing exercise": {
    reply: `Great choice! Let's do the **4-4-4 Breathing** technique together. 🌬️

Find a comfortable position and follow along:

**Round 1:**
1. 🫁 **Breathe IN** slowly... 1... 2... 3... 4
2. ⏸️ **HOLD** gently... 1... 2... 3... 4
3. 💨 **Breathe OUT** slowly... 1... 2... 3... 4

**Round 2:**
1. 🫁 **Breathe IN**... feel your chest expand... 1... 2... 3... 4
2. ⏸️ **HOLD**... you're safe here... 1... 2... 3... 4
3. 💨 **Breathe OUT**... release the tension... 1... 2... 3... 4

**Round 3:**
1. 🫁 **IN**... 1... 2... 3... 4
2. ⏸️ **HOLD**... 1... 2... 3... 4
3. 💨 **OUT**... 1... 2... 3... 4

How do you feel? Even just 3 rounds can lower your heart rate and calm your mind. 💜

Pro tip: Try this with the Glow Pod's "Breathing Guide" projection mode for an immersive experience! ✨`,
    suggestions: [
      "That felt amazing!",
      "I want to try the Glow Pod",
      "Give me another calming activity",
    ],
  },
  "I want to feel better about myself": {
    reply: `First — you deserve to feel good about yourself. Not because of what you do or how you look, but simply because you exist. 💜

Here's a gentle practice to start:

📝 **The 3-Good-Things Exercise:**
Every night, write down 3 things about yourself that went well today. They can be tiny:
- "I was kind to someone"
- "I tried something new"
- "I rested when I needed to"

🪞 **Affirmation for today:**
"I am enough. I don't need to earn my worth. I am worthy of love and kindness — especially from myself."

🌟 **Your Joy Score journey:**
Track your mood daily in the Joy Score tab. Over time, you'll notice patterns — what lifts you up, what drains you. Self-awareness is the first step to self-love.

Remember: healing isn't linear. Some days you'll feel on top of the world, and some days you'll struggle. Both are okay. Both are part of your beautiful journey. ✨

I'm here whenever you need me. No judgment, ever. 🤗`,
    suggestions: [
      "Help me with body positivity",
      "I'm feeling stressed lately",
      "Give me a Joy Spark activity",
    ],
  },
};

export function getMockResponse(message: string): MockResponse | null {
  // Exact match first
  if (MOCK_RESPONSES[message]) {
    return MOCK_RESPONSES[message];
  }

  // Fuzzy match by checking if message contains key words
  const lowerMessage = message.toLowerCase();
  for (const [key, response] of Object.entries(MOCK_RESPONSES)) {
    const keyWords = key.toLowerCase().split(" ").filter(w => w.length > 3);
    const matchCount = keyWords.filter(w => lowerMessage.includes(w)).length;
    if (matchCount >= keyWords.length * 0.6) {
      return response;
    }
  }

  // Default fallback
  return {
    reply: `Thank you for sharing that with me. 💜 I'm here for you, and what you're feeling is completely valid.

Would you like to:
- Try a **Joy Spark** activity to shift your mood
- Do a **breathing exercise** to find calm
- Talk about **body positivity** and self-acceptance
- Check out a **wellness challenge** to build positive habits

Whatever you need, I'm here. No judgment, just support. ✨`,
    suggestions: [
      "Give me a Joy Spark activity",
      "Let's try a breathing exercise",
      "Help me with body positivity",
    ],
  };
}
