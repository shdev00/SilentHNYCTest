import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useAitchModalOpen, closeAitchModal } from "../lib/aitchModal";

// "Aitch — coming soon" modal. Mounted once in Layout; opens via the shared store
// (openAitchModal) from any Aitch link trigger. The NYC Aitch lounge page isn't
// built yet, so its links show this instead of navigating to a dead route.
export default function AitchUnderConstruction() {
    const open = useAitchModalOpen();

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") closeAitchModal();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    if (!open) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="aitch-uc-title"
            onClick={closeAitchModal}
        >
            <div
                className="relative w-full max-w-[460px] rounded-[8px] border border-sh-cream/20 bg-sh-ink px-8 py-10 text-center text-sh-cream"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    aria-label="Close"
                    onClick={closeAitchModal}
                    className="absolute top-3 right-4 text-[26px] leading-none text-sh-cream/70 hover:text-sh-cream transition-colors"
                >
                    ×
                </button>
                <h2
                    id="aitch-uc-title"
                    className="font-display font-bold uppercase text-sh-cream text-[clamp(26px,5vw,34px)] leading-none tracking-[0.05em]"
                >
                    Aitch is coming soon
                </h2>
                <p className="mt-4 font-body text-sh-muted text-[16px] leading-[1.5] tracking-[0.03em]">
                    Our agave cocktail lounge page is still under construction. Check back soon.
                </p>
                <button
                    type="button"
                    onClick={closeAitchModal}
                    className="mt-7 inline-flex items-center justify-center rounded-[4px] border border-sh-pink bg-sh-pink text-sh-ink font-body font-bold uppercase text-[14px] tracking-[0.13em] px-[24px] py-[12px] hover:bg-[#f05f76] hover:border-[#f05f76] transition-colors"
                >
                    Got it
                </button>
            </div>
        </div>,
        document.body,
    );
}
