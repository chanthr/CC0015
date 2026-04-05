// === Confidence Shield Toolbox ===
export const CONFIDENCE_SHIELDS = [
  {
    id: "1",
    thought: "I feel behind everyone else",
    reframe: "Progress isn't a race. My pace is valid because it's mine.",
    action: "Name one thing you did today that took courage — even showing up counts.",
    category: "comparison",
    emoji: "🛡️",
  },
  {
    id: "2",
    thought: "Everyone looks better than me",
    reframe: "I'm comparing my inside to their outside. Bodies aren't competitions.",
    action: "Place your hand on your chest. Feel your heartbeat. This body is alive and worthy.",
    category: "body-image",
    emoji: "💜",
  },
  {
    id: "3",
    thought: "I rested so I failed",
    reframe: "Rest is not the opposite of progress — it's part of it.",
    action: "Write down: 'Rest is how my body gets stronger.' Read it out loud.",
    category: "rest-guilt",
    emoji: "🌙",
  },
  {
    id: "4",
    thought: "I should do more",
    reframe: "Enough is not lazy. Enough is listening to my body.",
    action: "Set a timer for 2 minutes. Do nothing. Notice how it feels.",
    category: "overexertion",
    emoji: "⏸️",
  },
  {
    id: "5",
    thought: "I don't belong here",
    reframe: "I walked in. That makes me someone who belongs.",
    action: "Use Calm Entry mode on your CalmGrip. 3 breaths before moving.",
    category: "anxiety",
    emoji: "🚪",
  },
  {
    id: "6",
    thought: "I can't do this",
    reframe: "I haven't done it yet. 'Yet' is the most powerful word.",
    action: "Try the 3-Attempt Rule: attempt 3 times before judging your ability.",
    category: "self-doubt",
    emoji: "🧗",
  },
  {
    id: "7",
    thought: "People are watching and judging me",
    reframe: "Most people are focused on themselves. I am safe here.",
    action: "Double-tap your CalmGrip for Comparison Reset. Refocus on your breath.",
    category: "comparison",
    emoji: "👁️",
  },
  {
    id: "8",
    thought: "I ate too much so I need to work harder",
    reframe: "Food is fuel, not something to punish. My body deserves nourishment.",
    action: "Choose a route from the Route Library based on how you FEEL, not to 'burn off.'",
    category: "body-image",
    emoji: "🍃",
  },
];

// === OwnPace Ladder (behavior-based milestones) ===
export const LADDER_MILESTONES = [
  {
    id: "1",
    title: "Entered gym without leaving",
    description: "You walked in and stayed. That's courage.",
    week: 1,
    emoji: "🚪",
    category: "presence",
  },
  {
    id: "2",
    title: "Used Calm Entry before session",
    description: "You paused to breathe before starting. Awareness is power.",
    week: 1,
    emoji: "🌬️",
    category: "awareness",
  },
  {
    id: "3",
    title: "Used Comparison Reset during spiraling",
    description: "You caught the spiral and interrupted it. That's a skill.",
    week: 2,
    emoji: "🔄",
    category: "interruption",
  },
  {
    id: "4",
    title: "Stopped at planned limit",
    description: "You honored your body's boundary. That's strength.",
    week: 2,
    emoji: "✋",
    category: "boundaries",
  },
  {
    id: "5",
    title: "Took a rest day without guilt",
    description: "Rest is training too. You're learning to trust your body.",
    week: 3,
    emoji: "😴",
    category: "rest",
  },
  {
    id: "6",
    title: "Completed Closing Ritual",
    description: "You closed the loop. Today's output is enough.",
    week: 3,
    emoji: "🌙",
    category: "ritual",
  },
  {
    id: "7",
    title: "Slept before midnight",
    description: "You chose rest over scrolling. Your future self thanks you.",
    week: 4,
    emoji: "💤",
    category: "sleep",
  },
  {
    id: "8",
    title: "Shared a kind thought with yourself",
    description: "You replaced self-criticism with self-compassion.",
    week: 4,
    emoji: "💜",
    category: "self-compassion",
  },
];

// === Joy Score (4 dimensions) ===
export const JOY_DIMENSIONS = [
  { id: "calmer", label: "Calmer?", emoji: "😌", description: "Do I feel less anxious than before?" },
  { id: "enjoyed", label: "Enjoyed it?", emoji: "😊", description: "Did I find moments of genuine enjoyment?" },
  { id: "connected", label: "Connected to body?", emoji: "🤲", description: "Did I listen to what my body needed?" },
  { id: "kind", label: "Kind to self?", emoji: "💜", description: "Was I compassionate with myself today?" },
];

export const MOOD_OPTIONS = [
  { emoji: "😊", label: "Great", value: 5 },
  { emoji: "😌", label: "Good", value: 4 },
  { emoji: "😐", label: "Okay", value: 3 },
  { emoji: "😔", label: "Low", value: 2 },
  { emoji: "😢", label: "Tough", value: 1 },
];

// === CalmGrip Modes ===
export const CALMGRIP_MODES = [
  {
    id: "calm-entry",
    label: "Calm Entry",
    description: "Pre-session anxiety reset. 3 guided breaths before you begin.",
    emoji: "🚪",
    vibration: "Slow pulse — inhale 4s, hold 2s, exhale 6s",
    when: "Before entering gym or starting exercise",
  },
  {
    id: "comparison-reset",
    label: "Comparison Reset",
    description: "Double-tap when you catch yourself spiraling. Interrupts the thought loop.",
    emoji: "🔄",
    vibration: "Sharp double-buzz → slow fade breathing",
    when: "When comparing yourself to others",
  },
  {
    id: "permission-pause",
    label: "Permission to Pause",
    description: "Press-hold when guilt hits for resting. Validates your choice to stop.",
    emoji: "⏸️",
    vibration: "Gentle continuous hum → gradual slow",
    when: "When feeling guilty for resting or stopping",
  },
  {
    id: "night-reset",
    label: "Night Reset",
    description: "Wind-down breathing for bedtime. Replaces doomscrolling with calm.",
    emoji: "🌙",
    vibration: "Very slow wave — 4s in, 7s out, fading intensity",
    when: "Before sleep, during Closing Ritual",
  },
];

// === Suggested Prompts ===
export const SUGGESTED_PROMPTS = [
  "I'm feeling anxious about going to the gym",
  "Help me with a Confidence Shield",
  "I keep comparing myself to others",
  "I need permission to rest today",
  "Let's do a Closing Ritual",
  "I want to feel better about my body",
];

// === Co-Regulate (trusted person support) ===
export const COREGULATE_MESSAGES = [
  {
    id: "1",
    from: "Alex (trusted friend)",
    type: "encouragement",
    content: "Hey! Just wanted you to know I'm proud of you for going today. No matter what happens, you showed up. 💪",
    timeAgo: "2h ago",
    emoji: "💬",
  },
  {
    id: "2",
    from: "Alex (trusted friend)",
    type: "stop-reminder",
    content: "Remember your plan — 45 minutes is enough today. You can stop now and it still counts. 🛑",
    timeAgo: "4h ago",
    emoji: "✋",
  },
  {
    id: "3",
    from: "System",
    type: "bedtime",
    content: "Bedtime accountability: Alex checked in. Time for your Closing Ritual? 🌙",
    timeAgo: "8h ago",
    emoji: "🌙",
  },
  {
    id: "4",
    from: "Alex (trusted friend)",
    type: "encouragement",
    content: "Rest day = growth day. You're not falling behind. You're recovering. 🌱",
    timeAgo: "1d ago",
    emoji: "😴",
  },
  {
    id: "5",
    from: "System",
    type: "milestone",
    content: "🎉 You unlocked a new milestone: 'Used Comparison Reset during spiraling'! Alex has been notified.",
    timeAgo: "1d ago",
    emoji: "🏆",
  },
];

// === Closing Ritual Steps ===
export const CLOSING_RITUAL_STEPS = [
  { id: 1, duration: "2 min", title: "Unload Thoughts", description: "Write or speak whatever is on your mind. No filter, no judgment.", emoji: "📝" },
  { id: 2, duration: "3 min", title: "Close the Loop", description: "Complete: 'Today's output is enough because ___'", emoji: "🔄" },
  { id: 3, duration: "2 min", title: "Body Signal", description: "Scan from head to toe. Where do you hold tension? Breathe into it.", emoji: "🧘" },
  { id: 4, duration: "1 min", title: "Phone into Sleeve", description: "Place your phone in the Parking Sleeve. Tomorrow is a new day.", emoji: "📱" },
];

// === 4-Week Programme ===
export const PROGRAMME_WEEKS = [
  { week: 1, theme: "Notice the Trigger", goal: "Identify when comparison, guilt, or scrolling begins" },
  { week: 2, theme: "Calm Before Comparison", goal: "Train Calm Entry + Comparison Reset before spiraling" },
  { week: 3, theme: "Rest Without Guilt", goal: "Normalize planned rest, reduce overexertion" },
  { week: 4, theme: "Redefine Progress", goal: "Shift success to Joy Score + OwnPace Ladder" },
];
