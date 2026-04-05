"use client";

import { useState } from "react";
import { Shield, Eye, EyeOff, Trash2, Download, Bell, BellOff, Lock, User } from "lucide-react";
import { CardRoot, ButtonRoot, AvatarRoot, AvatarFallback, ChipRoot, ModalRoot, ModalBackdrop, ModalContainer, ModalDialog, ModalHeader, ModalHeading, ModalBody, ModalFooter } from "@heroui/react";
import { useOverlayState } from "@heroui/react";

export default function SettingsPage() {
  const [hiddenInterface, setHiddenInterface] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const deleteModal = useOverlayState();

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-own-deep">
          Settings
        </h1>
        <p className="text-sm text-own-gray mt-1">
          Absolute privacy. Your data, your control.
        </p>
      </div>

      {/* Profile */}
      <CardRoot className="rounded-2xl p-5 border border-own-warm mb-4 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <AvatarRoot size="lg" className="w-14 h-14">
            <AvatarFallback className="bg-own-teal-muted">
              <User className="w-7 h-7 text-own-teal" />
            </AvatarFallback>
          </AvatarRoot>
          <div>
            <p className="font-semibold text-own-deep">User</p>
            <p className="text-xs text-own-gray">No public profile · No followers · No auto-sharing</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs flex-wrap">
          <ChipRoot size="sm" variant="soft" className="bg-own-teal-muted text-own-teal">
            Week 2 of 4
          </ChipRoot>
          <ChipRoot size="sm" variant="soft" className="bg-own-teal-muted text-own-teal">
            5 Shields used
          </ChipRoot>
          <ChipRoot size="sm" variant="soft" className="bg-own-teal-muted text-own-teal">
            2 Milestones
          </ChipRoot>
        </div>
      </CardRoot>

      {/* Privacy & Safety */}
      <CardRoot className="rounded-2xl border border-own-warm mb-4 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-own-warm">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-4 h-4 text-own-teal" />
            <h2 className="font-semibold text-own-deep">Absolute Privacy</h2>
          </div>
          <p className="text-xs text-own-gray">No public profile, no followers, hidden interface in public.</p>
        </div>

        <div className="p-4 flex items-center justify-between border-b border-own-warm/30">
          <div className="flex items-center gap-3">
            {hiddenInterface ? <EyeOff className="w-5 h-5 text-own-teal" /> : <Eye className="w-5 h-5 text-own-teal" />}
            <div>
              <p className="text-sm font-medium text-own-deep">Hidden Interface</p>
              <p className="text-xs text-own-gray">App looks like a normal utility in public</p>
            </div>
          </div>
          <button
            onClick={() => setHiddenInterface(!hiddenInterface)}
            className={`w-12 h-7 rounded-full transition-colors relative ${hiddenInterface ? "bg-own-teal" : "bg-own-warm"}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${hiddenInterface ? "translate-x-6" : "translate-x-1"}`} />
          </button>
        </div>

        <div className="p-4 flex items-center justify-between border-b border-own-warm/30">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-own-teal" />
            <div>
              <p className="text-sm font-medium text-own-deep">Zero-Data Mode</p>
              <p className="text-xs text-own-gray">No calories, weight, body fat, or streaks</p>
            </div>
          </div>
          <ChipRoot size="sm" variant="soft" className="bg-own-teal-muted text-own-teal text-[10px]">
            Always on
          </ChipRoot>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {notifications ? <Bell className="w-5 h-5 text-own-teal" /> : <BellOff className="w-5 h-5 text-own-teal" />}
            <div>
              <p className="text-sm font-medium text-own-deep">Notifications</p>
              <p className="text-xs text-own-gray">CalmGrip, Closing Ritual, Co-Regulate</p>
            </div>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-7 rounded-full transition-colors relative ${notifications ? "bg-own-teal" : "bg-own-warm"}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${notifications ? "translate-x-6" : "translate-x-1"}`} />
          </button>
        </div>
      </CardRoot>

      {/* Data Management */}
      <CardRoot className="rounded-2xl border border-own-warm mb-4 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-own-warm">
          <h2 className="font-semibold text-own-deep">Data Management</h2>
        </div>
        <button className="w-full p-4 flex items-center gap-3 border-b border-own-warm/30 hover:bg-own-sand transition-colors text-left">
          <Download className="w-5 h-5 text-own-teal" />
          <div>
            <p className="text-sm font-medium text-own-deep">Export My Data</p>
            <p className="text-xs text-own-gray">Download all your data</p>
          </div>
        </button>
        <button
          onClick={() => deleteModal.setOpen(true)}
          className="w-full p-4 flex items-center gap-3 hover:bg-red-50 transition-colors text-left"
        >
          <Trash2 className="w-5 h-5 text-red-400" />
          <div>
            <p className="text-sm font-medium text-red-600">Delete All Data</p>
            <p className="text-xs text-own-gray">Permanently remove everything</p>
          </div>
        </button>
      </CardRoot>

      <ModalRoot state={deleteModal}>
        <ModalBackdrop className="fixed inset-0 bg-black/40 z-50">
          <ModalContainer className="flex items-center justify-center min-h-full px-6">
            <ModalDialog className="bg-own-white rounded-2xl p-6 max-w-sm w-full">
              <ModalHeader>
                <ModalHeading className="font-serif text-lg font-bold text-own-deep">
                  Are you sure?
                </ModalHeading>
              </ModalHeader>
              <ModalBody>
                <p className="text-sm text-own-gray mb-6">
                  This will permanently delete all your Joy Score history, CalmGrip data, milestones, and journal entries.
                </p>
              </ModalBody>
              <ModalFooter className="flex gap-3">
                <ButtonRoot
                  variant="outline"
                  onPress={() => deleteModal.setOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-own-sand text-own-deep text-sm font-medium"
                >
                  Cancel
                </ButtonRoot>
                <ButtonRoot
                  variant="primary"
                  onPress={() => deleteModal.setOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-medium"
                >
                  Delete
                </ButtonRoot>
              </ModalFooter>
            </ModalDialog>
          </ModalContainer>
        </ModalBackdrop>
      </ModalRoot>

      <div className="text-center mt-6 mb-4">
        <p className="text-xs text-own-gray">OwnPace v1.0</p>
        <p className="text-xs text-own-gray mt-1">Detect · Interrupt · Guide · Reflect 💜</p>
      </div>
    </div>
  );
}
