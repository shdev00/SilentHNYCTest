import { useSyncExternalStore } from "react";

// Tiny shared store for the "Aitch under construction" modal. The NYC Aitch page
// (/aitch) doesn't exist yet, so links to it open this modal instead of navigating.
// A module store (not context) lets any click handler or route open it with a plain
// function call — no provider wrapping, no event-delegation timing games.
let isOpen = false;
const listeners = new Set();

function emit() {
    listeners.forEach((l) => l());
}

export function openAitchModal() {
    if (isOpen) return;
    isOpen = true;
    emit();
}

export function closeAitchModal() {
    if (!isOpen) return;
    isOpen = false;
    emit();
}

export function useAitchModalOpen() {
    return useSyncExternalStore(
        (cb) => {
            listeners.add(cb);
            return () => listeners.delete(cb);
        },
        () => isOpen,
        () => false, // SSR/initial snapshot: closed
    );
}
