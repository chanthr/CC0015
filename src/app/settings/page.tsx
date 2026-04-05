"use client";

import { useState } from "react";
import { Shield, Eye, EyeOff, Cloud, CloudOff, Trash2, Download, Bell, BellOff, Lock, User } from "lucide-react";
import { CardRoot, ButtonRoot, SwitchRoot, SwitchControl, SwitchThumb, AvatarRoot, AvatarFallback, ChipRoot, ModalRoot, ModalBackdrop, ModalContainer, ModalDialog, ModalHeader, ModalHeading, ModalBody, ModalFooter } from "@heroui/react";
import { useOverlayState } from "@heroui/react";

export default function SettingsPage() {
  const [anonymousMode, setAnonymousMode] = useState(true);
  const [cloudSync, setCloudSync] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [dataVisible, setDataVisible] = useState(false);
  const deleteModal = useOverlayState();

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-glow-purple-900">
          Settings
        </h1>
        <p className="text-sm text-glow-warm-gray mt-1">
          Your privacy, your control.
        </p>
      </div>

      {/* Profile */}
      <CardRoot className="rounded-2xl p-5 border border-glow-purple-100/50 mb-4 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <AvatarRoot size="lg" className="w-14 h-14">
            <AvatarFallback className="bg-glow-purple-100">
              <User className="w-7 h-7 text-glow-purple-700" />
            </AvatarFallback>
          </AvatarRoot>
          <div>
            <p className="font-semibold text-glow-purple-900">
              {anonymousMode ? "Anonymous Glower" : "My Profile"}
            </p>
            <p className="text-xs text-glow-warm-gray">
              {anonymousMode ? "Identity hidden in community" : "Visible to community"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <ChipRoot size="sm" variant="soft" className="bg-glow-purple-100 text-glow-purple-700">
            Joy Score: 3.8
          </ChipRoot>
          <ChipRoot size="sm" variant="soft" className="bg-glow-purple-100 text-glow-purple-700">
            12 Sparks done
          </ChipRoot>
          <ChipRoot size="sm" variant="soft" className="bg-glow-purple-100 text-glow-purple-700">
            3 Challenges
          </ChipRoot>
        </div>
      </CardRoot>

      {/* Privacy & Safety */}
      <CardRoot className="rounded-2xl border border-glow-purple-100/50 mb-4 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-glow-purple-100/50">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-4 h-4 text-glow-purple-700" />
            <h2 className="font-semibold text-glow-purple-900">Privacy & Safety</h2>
          </div>
          <p className="text-xs text-glow-warm-gray">Your data stays yours. Always.</p>
        </div>

        {/* Anonymous mode */}
        <div className="p-4 flex items-center justify-between border-b border-glow-purple-100/30">
          <div className="flex items-center gap-3">
            {anonymousMode ? (
              <EyeOff className="w-5 h-5 text-glow-purple-500" />
            ) : (
              <Eye className="w-5 h-5 text-glow-purple-500" />
            )}
            <div>
              <p className="text-sm font-medium text-glow-purple-900">Anonymous Mode</p>
              <p className="text-xs text-glow-warm-gray">Hide identity in community</p>
            </div>
          </div>
          <SwitchRoot isSelected={anonymousMode} onChange={setAnonymousMode}>
            <SwitchControl className={`w-12 h-7 rounded-full transition-colors relative ${anonymousMode ? "bg-glow-purple-700" : "bg-glow-purple-200"}`}>
              <SwitchThumb className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${anonymousMode ? "translate-x-6" : "translate-x-1"}`} />
            </SwitchControl>
          </SwitchRoot>
        </div>

        {/* Data visibility */}
        <div className="p-4 flex items-center justify-between border-b border-glow-purple-100/30">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-glow-purple-500" />
            <div>
              <p className="text-sm font-medium text-glow-purple-900">Joy Score Privacy</p>
              <p className="text-xs text-glow-warm-gray">Only you can see your score</p>
            </div>
          </div>
          <SwitchRoot isSelected={!dataVisible} onChange={(val: boolean) => setDataVisible(!val)}>
            <SwitchControl className={`w-12 h-7 rounded-full transition-colors relative ${!dataVisible ? "bg-glow-purple-700" : "bg-glow-purple-200"}`}>
              <SwitchThumb className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${!dataVisible ? "translate-x-6" : "translate-x-1"}`} />
            </SwitchControl>
          </SwitchRoot>
        </div>

        {/* Notifications */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {notifications ? (
              <Bell className="w-5 h-5 text-glow-purple-500" />
            ) : (
              <BellOff className="w-5 h-5 text-glow-purple-500" />
            )}
            <div>
              <p className="text-sm font-medium text-glow-purple-900">Notifications</p>
              <p className="text-xs text-glow-warm-gray">Joy Spark & Challenge reminders</p>
            </div>
          </div>
          <SwitchRoot isSelected={notifications} onChange={setNotifications}>
            <SwitchControl className={`w-12 h-7 rounded-full transition-colors relative ${notifications ? "bg-glow-purple-700" : "bg-glow-purple-200"}`}>
              <SwitchThumb className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${notifications ? "translate-x-6" : "translate-x-1"}`} />
            </SwitchControl>
          </SwitchRoot>
        </div>
      </CardRoot>

      {/* Cloud Sync */}
      <CardRoot className="rounded-2xl border border-glow-purple-100/50 mb-4 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-glow-purple-100/50">
          <div className="flex items-center gap-2 mb-1">
            <Cloud className="w-4 h-4 text-glow-purple-700" />
            <h2 className="font-semibold text-glow-purple-900">Cloud Sync</h2>
          </div>
          <p className="text-xs text-glow-warm-gray">Backup your progress to the cloud.</p>
        </div>

        <div className="p-4 flex items-center justify-between border-b border-glow-purple-100/30">
          <div className="flex items-center gap-3">
            {cloudSync ? (
              <Cloud className="w-5 h-5 text-green-500" />
            ) : (
              <CloudOff className="w-5 h-5 text-glow-warm-gray" />
            )}
            <div>
              <p className="text-sm font-medium text-glow-purple-900">Enable Cloud Backup</p>
              <p className="text-xs text-glow-warm-gray">
                {cloudSync ? "Last synced: just now" : "Data stored locally only"}
              </p>
            </div>
          </div>
          <SwitchRoot isSelected={cloudSync} onChange={setCloudSync}>
            <SwitchControl className={`w-12 h-7 rounded-full transition-colors relative ${cloudSync ? "bg-green-500" : "bg-glow-purple-200"}`}>
              <SwitchThumb className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${cloudSync ? "translate-x-6" : "translate-x-1"}`} />
            </SwitchControl>
          </SwitchRoot>
        </div>

        {cloudSync && (
          <div className="p-4">
            <div className="flex items-center gap-2 text-xs text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Synced: Joy Score, Challenges, Sparks history
            </div>
          </div>
        )}
      </CardRoot>

      {/* Data Management */}
      <CardRoot className="rounded-2xl border border-glow-purple-100/50 mb-4 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-glow-purple-100/50">
          <h2 className="font-semibold text-glow-purple-900">Data Management</h2>
        </div>

        <button className="w-full p-4 flex items-center gap-3 border-b border-glow-purple-100/30 hover:bg-glow-purple-100/30 transition-colors text-left">
          <Download className="w-5 h-5 text-glow-purple-500" />
          <div>
            <p className="text-sm font-medium text-glow-purple-900">Export My Data</p>
            <p className="text-xs text-glow-warm-gray">Download all your data as JSON</p>
          </div>
        </button>

        <button
          onClick={() => deleteModal.setOpen(true)}
          className="w-full p-4 flex items-center gap-3 hover:bg-red-50 transition-colors text-left"
        >
          <Trash2 className="w-5 h-5 text-red-400" />
          <div>
            <p className="text-sm font-medium text-red-600">Delete All Data</p>
            <p className="text-xs text-glow-warm-gray">Permanently remove all your data</p>
          </div>
        </button>
      </CardRoot>

      {/* Delete Confirmation Modal */}
      <ModalRoot state={deleteModal}>
        <ModalBackdrop className="fixed inset-0 bg-black/40 z-50">
          <ModalContainer className="flex items-center justify-center min-h-full px-6">
            <ModalDialog className="bg-glow-white rounded-2xl p-6 max-w-sm w-full">
              <ModalHeader>
                <ModalHeading className="font-serif text-lg font-bold text-glow-purple-900">
                  Are you sure?
                </ModalHeading>
              </ModalHeader>
              <ModalBody>
                <p className="text-sm text-glow-warm-gray mb-6">
                  This will permanently delete all your Joy Score history, challenge progress, and community posts. This cannot be undone.
                </p>
              </ModalBody>
              <ModalFooter className="flex gap-3">
                <ButtonRoot
                  variant="outline"
                  onPress={() => deleteModal.setOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-glow-purple-100 text-glow-purple-900 text-sm font-medium"
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

      {/* App info */}
      <div className="text-center mt-6 mb-4">
        <p className="text-xs text-glow-warm-gray">Glow & Flow v1.0 &middot; @CO0015</p>
        <p className="text-xs text-glow-warm-gray mt-1">Built with care for every body 💜</p>
      </div>
    </div>
  );
}
