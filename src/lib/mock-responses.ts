export interface MockResponse {
  reply: string;
  suggestions: string[];
}

const MOCK_RESPONSES: Record<string, MockResponse> = {
  "I'm feeling anxious about going to the gym": {
    reply: `I hear you, and that anxiety is completely valid. The gym can feel like a stage where everyone's watching — but they're not. Most people are in their own world.

Here's what we can do right now:

**Activate Calm Entry mode** on your CalmGrip before you walk in. Three slow breaths: in for 4, hold for 2, out for 6. Your nervous system will start to settle.

**Set one small intention** — not "have a great workout" but something like "I will stay for 15 minutes" or "I will try one route that interests me."

**Remember your Confidence Shield:** "I walked in. That makes me someone who belongs."

The hardest part is always the door. Once you're through it, you've already won today.`,
    suggestions: [
      "What is Calm Entry mode?",
      "I keep comparing myself to others",
      "Help me with a Confidence Shield",
    ],
  },

  "Help me with a Confidence Shield": {
    reply: `Here's a Confidence Shield for you right now.

**Automatic Thought:** "I'm not good enough to be here"

**Kinder Reframe:** "I showed up. That takes more courage than staying home. I don't need to be the best — I just need to be present."

**Tiny Action:** Place your hand on your CalmGrip. Squeeze gently 3 times. Each squeeze is a reminder: I. Am. Enough.

The Confidence Shield Toolbox has **8 cards** covering:
- Comparison spirals
- Body image struggles
- Rest guilt
- Self-doubt
- Overexertion pressure

Each one follows the same pattern: **Thought → Reframe → Action**. Based on CBT — catching the thought before it catches you.

Which situation resonates most with you right now?`,
    suggestions: [
      "I feel behind everyone else",
      "I rested so I feel like I failed",
      "I keep thinking I should do more",
    ],
  },

  "I keep comparing myself to others": {
    reply: `Comparison is one of the most painful habits — and one of the most human. You're not broken for doing it.

Here's what's happening in your brain: it's running a **threat detection program** that evolved to keep us safe in groups. But in a gym, it misfires — turning everyone else into a measuring stick.

**Comparison Reset protocol:**
1. **Notice it** — "I'm comparing right now." Just naming it takes away some of its power.
2. **Double-tap your CalmGrip** — the vibration pattern interrupts the thought loop.
3. **Redirect** — Look at your hands, your feet, your breath. Come back to YOUR body.

**Your shield:** "Most people are focused on themselves. I am safe here."

Over time, your Anxiety Dashboard will show comparison triggers decreasing. It's measurable, which means it's manageable.

Remember: you are the only person on your path. There is no "behind." There is only your pace.`,
    suggestions: [
      "Let's do a breathing exercise",
      "I need permission to rest today",
      "Tell me about the OwnPace Ladder",
    ],
  },

  "I need permission to rest today": {
    reply: `**You have permission to rest.** Not because you've earned it — but because you need it. And that's enough.

Here's the truth that diet culture doesn't want you to know:

**Rest is not the opposite of progress.** It's where growth actually happens. Muscles rebuild during rest. Your nervous system recalibrates. Your mind processes what you've learned.

**Activate Permission to Pause** on your CalmGrip — press and hold. Feel the gentle hum validate your choice.

**Your Confidence Shield:**
- Thought: "I rested so I failed"
- Reframe: "Rest is how my body gets stronger"
- Action: Write down 3 things your body did for you today (carried you, breathed, kept your heart beating)

**OwnPace Ladder milestone:** "Took a rest day without guilt" — this is REAL progress. Choosing to rest when you need it takes more strength than pushing through.

Your body is not a machine. It's your home. Take care of it.`,
    suggestions: [
      "Let's do a Closing Ritual",
      "Help me with a Confidence Shield",
      "I want to feel better about my body",
    ],
  },

  "Let's do a Closing Ritual": {
    reply: `Let's close today's loop together. This is your 8-minute Closing Ritual.

**Step 1 — Unload Thoughts (2 min)**
Write or say whatever is on your mind right now. No filter, no judgment. Just let it out. I'll wait...

**Step 2 — Close the Loop (3 min)**
Complete this sentence out loud or in writing:

> "Today's output is complete enough because ___"

Examples: "...because I showed up," "...because I tried," "...because I rested when I needed to."

**Step 3 — Body Signal (2 min)**
Close your eyes. Scan from your head to your toes. Where do you hold tension? Breathe into that spot. Release it on the exhale.

**Step 4 — Phone into Sleeve (1 min)**
Place your phone in the Parking Sleeve. As it goes in, say: "Tomorrow is a new day. I am done for today."

Activate Night Reset on your CalmGrip for wind-down breathing.

You did enough today. You are enough today. Sleep well.`,
    suggestions: [
      "That felt peaceful",
      "I'm still anxious about tomorrow",
      "Tell me about the 4-week programme",
    ],
  },

  "I want to feel better about my body": {
    reply: `Your body is not a project to be fixed. It's your home — the only one you'll ever have.

Here's what OwnPace believes: **Zero-Data Mode.** No calories, no weight, no body fat, no before/after photos. We measure how you FEEL, not how you look.

**Body Connection practice:**
Put both hands on your stomach. Feel it rise and fall. This body has kept you alive every single day. It deserves kindness, not criticism.

**Confidence Shield for body image:**
- Thought: "Everyone looks better than me"
- Reframe: "I'm comparing my inside to their outside. Bodies aren't competitions."
- Action: Name 3 things your body CAN do (not how it looks)

**Your Joy Score tracks 4 things:**
1. Did I feel calmer?
2. Did I enjoy it?
3. Did I connect to my body?
4. Was I kind to myself?

Notice: NONE of those are about appearance. That's intentional. Your worth was never about how you look.

The climbing wall doesn't care about your size. It only asks: "Can you reach?"`,
    suggestions: [
      "Help me with a Confidence Shield",
      "I keep comparing myself to others",
      "I'm feeling anxious about going to the gym",
    ],
  },

  "What is Calm Entry mode?": {
    reply: `**Calm Entry** is one of 4 modes on your CalmGrip Band.

It's designed for **pre-session anxiety** — that moment before you walk into the gym, studio, or any space that feels intimidating.

**How it works:**
1. Hold your CalmGrip band
2. It begins a slow pulse vibration pattern: inhale 4s, hold 2s, exhale 6s
3. Follow along for 3 breath cycles (about 36 seconds total)
4. Your heart rate drops, cortisol decreases, and your prefrontal cortex comes back online

**The science:** When you're anxious, your amygdala hijacks your brain. Slow, controlled breathing activates the vagus nerve, which tells your nervous system: "We're safe."

**The 4 CalmGrip modes:**
- **Calm Entry** — pre-gym anxiety
- **Comparison Reset** — when spiraling
- **Permission to Pause** — when guilt hits
- **Night Reset** — wind-down before sleep

You can try Calm Entry right now from the CalmGrip tab.`,
    suggestions: [
      "I'm feeling anxious about going to the gym",
      "Let's do a breathing exercise",
      "Tell me about the OwnPace Ladder",
    ],
  },

  "Let's do a breathing exercise": {
    reply: `Let's do the **4-2-6 Breathing** — the same pattern your CalmGrip uses.

Find a comfortable position. Let your shoulders drop.

**Round 1:**
1. **Breathe IN** slowly... 1... 2... 3... 4
2. **HOLD** gently... 1... 2
3. **Breathe OUT** slowly... 1... 2... 3... 4... 5... 6

**Round 2:**
1. **IN** — feel your chest expand... 1... 2... 3... 4
2. **HOLD** — you're safe here... 1... 2
3. **OUT** — release the tension... 1... 2... 3... 4... 5... 6

**Round 3:**
1. **IN**... 1... 2... 3... 4
2. **HOLD**... 1... 2
3. **OUT**... 1... 2... 3... 4... 5... 6

Notice how you feel now vs. 90 seconds ago. Even a small shift matters.

**Key insight:** The longer exhale (6 counts) is what activates your parasympathetic nervous system — it tells your body "danger has passed."`,
    suggestions: [
      "That felt calming",
      "I need permission to rest today",
      "Help me with a Confidence Shield",
    ],
  },

  "I feel behind everyone else": {
    reply: `That feeling is so common — and so heavy. Let's unpack it.

**Confidence Shield activated:**

**Automatic thought:** "I feel behind everyone else"

**What's really happening:** Your brain is comparing your Chapter 3 to someone else's Chapter 12. You're reading different books entirely.

**Kinder reframe:** "Progress isn't a race. My pace is valid because it's mine."

**Tiny action:** Right now, name ONE thing you did this week that took effort. Doesn't matter how small:
- Got out of bed when it was hard
- Showed up somewhere intimidating
- Chose not to skip a meal
- Asked for help

That thing? That's your pace. And it's enough.

The OwnPace Ladder tracks milestones like "entered gym without leaving" and "took a rest day without guilt" — because these are the victories that matter.`,
    suggestions: [
      "I keep comparing myself to others",
      "Tell me about the OwnPace Ladder",
      "I want to feel better about my body",
    ],
  },

  "I rested so I feel like I failed": {
    reply: `Let's stop right there and flip this.

**Confidence Shield:**

**Your thought:** "I rested so I failed"

**The truth:** Rest is literally how your body repairs itself. Athletes rest. Muscles grow during rest. Your brain consolidates learning during sleep. Rest is **not** failure — it's a requirement.

**Kinder reframe:** "Rest is how my body gets stronger. I chose to listen to what I needed."

**The culture lie:** We've been taught that rest = lazy. That's not science. That's capitalism selling you the idea that your worth equals your output.

**Your tiny action:**
Write this down and put it somewhere visible:

> "I don't need to earn rest. It's just mine."

In OwnPace, "Took a rest day without guilt" is a **milestone**. Not a failure. A milestone. Because it takes more courage to stop than to keep going when your body says no.`,
    suggestions: [
      "I need permission to rest today",
      "I keep thinking I should do more",
      "Let's do a Closing Ritual",
    ],
  },

  "I keep thinking I should do more": {
    reply: `That "should" voice is loud, isn't it? Let's turn the volume down.

**Confidence Shield:**

**Automatic thought:** "I should do more"

**What's underneath:** Usually fear — fear of not being enough, fear of falling behind, fear of what happens if you stop.

**Kinder reframe:** "Enough is not lazy. Enough is listening to my body."

**The 3-Attempt Rule** from our climbing programme applies here too:

> Don't judge your ability until you've tried 3 times. And once you've done your planned amount — that IS your attempt. You're done.

**Try this right now:** Activate **Permission to Pause** on your CalmGrip. Press and hold. Feel the gentle hum. Let it be your body's way of saying: "You did enough."

The goal of OwnPace is never "more." It's **your pace.** Not faster, not harder, not longer. Yours.`,
    suggestions: [
      "I need permission to rest today",
      "Help me with a Confidence Shield",
      "Tell me about the 4-week programme",
    ],
  },

  "That felt peaceful": {
    reply: `Good. Hold onto that feeling for a moment — this is what your nervous system feels like when it's safe.

**What just happened:** You gave yourself 8 minutes of intentional winding down. That's a radical act of self-care in a world that tells you to always be "on."

**Reflection prompt:** What's one word that describes how you feel right now compared to before the ritual?

Some people say: "lighter," "quieter," "softer," "still." There's no wrong answer.

**You just unlocked an OwnPace Ladder milestone:** "Completed Closing Ritual" — this builds your capacity for self-regulation over time.

Sleep well tonight. Tomorrow you start fresh. And remember — you can do this ritual any night. It's always here for you.`,
    suggestions: [
      "I'm still anxious about tomorrow",
      "Tell me about the 4-week programme",
      "I want to feel better about my body",
    ],
  },

  "That felt calming": {
    reply: `Good. That calm is real — it's not a trick. Your body actually just shifted.

**What happened physiologically:**
- Your heart rate slowed down
- Cortisol (stress hormone) began decreasing
- Your vagus nerve activated, telling your body "we're safe"
- Your prefrontal cortex (decision-making) came back online

The beauty of breathing is that it's **always available.** No app needed, no equipment, no cost. Just you and your breath.

**Build the habit:** Try doing 3 rounds of 4-2-6 breathing:
- Before entering the gym (Calm Entry)
- When you catch a comparison spiral (Comparison Reset)
- Before bed (Night Reset)

Your CalmGrip Band can guide you with vibration patterns, but you can also do it on your own anytime.

Over time, this becomes automatic. Your brain learns: "When I'm stressed, I breathe first." That's real resilience.`,
    suggestions: [
      "I'm feeling anxious about going to the gym",
      "What is Calm Entry mode?",
      "Help me with a Confidence Shield",
    ],
  },

  "I'm still anxious about tomorrow": {
    reply: `That's okay. Anxiety about the future is your brain trying to protect you — even when there's no real danger.

Let's not fight the anxiety. Let's sit with it and reduce its volume.

**3 grounding truths for right now:**
1. **Tomorrow hasn't happened yet.** The scenario in your head is a story, not a fact.
2. **You've survived every "tomorrow" so far.** Every single one. Your track record is 100%.
3. **You have tools now.** CalmGrip, Confidence Shields, breathing — these are real skills that work.

**A bedtime anchor:**
Put your hand on your chest. Feel your heartbeat. Say (or think):

> "I don't need to solve tomorrow tonight. I just need to rest."

If your phone is still in your hand, this is the moment for the **Phone Parking Sleeve.** Put it away. The notifications can wait. Your rest cannot.

Tomorrow, you'll use Calm Entry before you walk in. And if comparison hits, you'll double-tap for a reset. You're not going in unarmed.`,
    suggestions: [
      "I'm feeling anxious about going to the gym",
      "Let's do a breathing exercise",
      "Help me with a Confidence Shield",
    ],
  },

  "Tell me about the OwnPace Ladder": {
    reply: `The **OwnPace Ladder** redefines what progress means.

Traditional fitness apps track reps, calories, streaks, PRs. We don't. We track **behaviors that build resilience.**

**Your milestones:**
- Entered gym without leaving
- Used Calm Entry before session
- Used Comparison Reset during spiraling
- Stopped at planned limit
- Took a rest day without guilt
- Completed Closing Ritual
- Slept before midnight
- Shared a kind thought with yourself

Notice: **none of these are about performance.** They're about how you relate to yourself.

**Why it works (Bandura's Self-Efficacy theory):**
Small, achievable wins build belief in your own capability. Each milestone proves: "I can handle this." And that belief compounds over time.

You've already unlocked 2 milestones. That's not nothing — that's foundation.`,
    suggestions: [
      "I feel behind everyone else",
      "Tell me about the 4-week programme",
      "I need permission to rest today",
    ],
  },

  "Tell me about the 4-week programme": {
    reply: `The **4-Week OwnPace Reset** is your structured pathway to redefining your relationship with fitness and your body.

**Week 1 — Notice the Trigger**
Goal: Identify when comparison, guilt, or scrolling begins. You're not changing anything yet — just building awareness.

**Week 2 — Calm Before Comparison** ← *You are here*
Goal: Train Calm Entry + Comparison Reset before spiraling. Now you're learning to interrupt the pattern before it takes over.

**Week 3 — Rest Without Guilt**
Goal: Normalize planned rest, reduce overexertion. This is where "Permission to Pause" becomes your superpower.

**Week 4 — Redefine Progress**
Goal: Shift success to Joy Score + OwnPace Ladder. By now, "progress" means something different. Something kinder.

**Optional group sessions:** Gradeless Climb Hour (2x/week) — routes named by story, not grade. No filming, max 6 people, "no advice unless asked."

The programme is grounded in **CBT, Bandura's Self-Efficacy, and the COM-B model.** Theory meets practice.`,
    suggestions: [
      "Tell me about the OwnPace Ladder",
      "I'm feeling anxious about going to the gym",
      "Help me with a Confidence Shield",
    ],
  },
};

export function getMockResponse(message: string): MockResponse | null {
  if (MOCK_RESPONSES[message]) {
    return MOCK_RESPONSES[message];
  }

  const lowerMessage = message.toLowerCase();
  for (const [key, response] of Object.entries(MOCK_RESPONSES)) {
    const keyWords = key.toLowerCase().split(" ").filter(w => w.length > 3);
    const matchCount = keyWords.filter(w => lowerMessage.includes(w)).length;
    if (matchCount >= keyWords.length * 0.5) {
      return response;
    }
  }

  return {
    reply: `Thank you for sharing that with me. What you're feeling is completely valid, and I'm here for you.

In OwnPace, we follow one loop: **Detect → Interrupt → Guide → Reflect.**

Right now, I can help you:
- **Find a Confidence Shield** for what you're thinking
- **Activate a CalmGrip mode** to calm your body
- **Start a Closing Ritual** to wind down
- **Explore your OwnPace Ladder** to see how far you've come

What feels right for you right now? No pressure, no rush. Your pace.`,
    suggestions: [
      "Help me with a Confidence Shield",
      "I'm feeling anxious about going to the gym",
      "Let's do a Closing Ritual",
    ],
  };
}
