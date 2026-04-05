"use client";

import { useState } from "react";
import { CardRoot, ButtonRoot } from "@heroui/react";
import { CLOSING_RITUAL_STEPS } from "@/lib/constants";

export default function ClosingRitualPage() {
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [journalEntry, setJournalEntry] = useState("");
  const [closingStatement, setClosingStatement] = useState("");

  const startRitual = () => setCurrentStep(0);

  const completeStep = () => {
    if (currentStep === null) return;
    setCompletedSteps((prev) => new Set(prev).add(currentStep));
    if (currentStep < CLOSING_RITUAL_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(null);
    }
  };

  const allComplete = completedSteps.size === CLOSING_RITUAL_STEPS.length;

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-own-deep">
          Closing Ritual
        </h1>
        <p className="text-sm text-own-gray mt-1">
          8 minutes to close today&apos;s loop.
        </p>
      </div>

      {/* Not started */}
      {currentStep === null && !allComplete && (
        <div className="text-center py-8">
          <div className="w-24 h-24 rounded-full bg-own-sand flex items-center justify-center mx-auto mb-6 animate-breathe">
            <span className="text-4xl">🌙</span>
          </div>
          <h2 className="font-serif text-xl font-semibold text-own-deep mb-2">
            Ready to wind down?
          </h2>
          <p className="text-sm text-own-gray max-w-xs mx-auto mb-6">
            The Closing Ritual helps you process today, release tension, and prepare for rest.
          </p>
          <ButtonRoot
            variant="primary"
            onPress={startRitual}
            className="bg-own-indigo text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-own-teal"
          >
            Start Ritual (8 min)
          </ButtonRoot>
        </div>
      )}

      {/* Steps Progress */}
      {(currentStep !== null || allComplete) && (
        <div className="flex gap-1 mb-6">
          {CLOSING_RITUAL_STEPS.map((step, i) => (
            <div
              key={step.id}
              className={`flex-1 h-2 rounded-full transition-all ${
                completedSteps.has(i)
                  ? "bg-own-teal"
                  : currentStep === i
                  ? "bg-own-teal-light animate-pulse"
                  : "bg-own-warm"
              }`}
            />
          ))}
        </div>
      )}

      {/* Active Step */}
      {currentStep !== null && (
        <CardRoot className="rounded-2xl border border-own-teal shadow-lg p-6 mb-6 animate-fade-in-up">
          <div className="text-center mb-4">
            <span className="text-4xl">{CLOSING_RITUAL_STEPS[currentStep].emoji}</span>
            <h3 className="font-serif text-xl font-semibold text-own-deep mt-3">
              {CLOSING_RITUAL_STEPS[currentStep].title}
            </h3>
            <p className="text-xs text-own-teal font-medium mt-1">
              {CLOSING_RITUAL_STEPS[currentStep].duration}
            </p>
          </div>

          <p className="text-sm text-own-gray text-center mb-6">
            {CLOSING_RITUAL_STEPS[currentStep].description}
          </p>

          {/* Step 1: Unload */}
          {currentStep === 0 && (
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="Write whatever is on your mind... no filter, no judgment."
              rows={4}
              className="w-full text-sm text-own-deep placeholder:text-own-gray-light bg-own-sand rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-own-teal/30 mb-4"
            />
          )}

          {/* Step 2: Close the Loop */}
          {currentStep === 1 && (
            <div className="mb-4">
              <p className="text-sm text-own-deep mb-2">Today&apos;s output is complete enough because...</p>
              <textarea
                value={closingStatement}
                onChange={(e) => setClosingStatement(e.target.value)}
                placeholder="...I showed up / ...I tried / ...I rested when I needed to"
                rows={2}
                className="w-full text-sm text-own-deep placeholder:text-own-gray-light bg-own-sand rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-own-teal/30"
              />
            </div>
          )}

          {/* Step 3: Body Signal */}
          {currentStep === 2 && (
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-own-teal/10 flex items-center justify-center animate-breathe">
                <div className="w-12 h-12 rounded-full bg-own-teal/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-own-teal/40" />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Phone Sleeve */}
          {currentStep === 3 && (
            <div className="text-center mb-4">
              <p className="text-sm text-own-deep italic">
                &ldquo;Tomorrow is a new day. I am done for today.&rdquo;
              </p>
            </div>
          )}

          <ButtonRoot
            variant="primary"
            onPress={completeStep}
            className="w-full bg-own-teal text-white py-3 rounded-xl text-sm font-medium hover:bg-own-teal-light"
          >
            {currentStep < CLOSING_RITUAL_STEPS.length - 1 ? "Next Step →" : "Complete Ritual ✓"}
          </ButtonRoot>
        </CardRoot>
      )}

      {/* All Complete */}
      {allComplete && currentStep === null && (
        <CardRoot className="rounded-2xl p-8 bg-own-sand border-none text-center animate-fade-in-up">
          <span className="text-5xl">🌙</span>
          <h3 className="font-serif text-xl font-semibold text-own-deep mt-4">
            Ritual Complete
          </h3>
          <p className="text-sm text-own-gray mt-2 max-w-xs mx-auto">
            You closed today&apos;s loop. Whatever happened today, you processed it. Sleep well. 💜
          </p>
          <p className="text-xs text-own-teal mt-4 font-medium">
            OwnPace Ladder: &ldquo;Completed Closing Ritual&rdquo; milestone unlocked! 🏆
          </p>
        </CardRoot>
      )}

      {/* Steps overview (when not active) */}
      {currentStep === null && !allComplete && (
        <div className="mt-6">
          <h2 className="font-semibold text-own-deep mb-3">The 4 Steps</h2>
          <div className="space-y-2">
            {CLOSING_RITUAL_STEPS.map((step, i) => (
              <CardRoot key={step.id} className="rounded-xl p-3 border border-own-warm">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{step.emoji}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-own-deep">{step.title}</p>
                    <p className="text-xs text-own-gray">{step.duration} · {step.description}</p>
                  </div>
                </div>
              </CardRoot>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
