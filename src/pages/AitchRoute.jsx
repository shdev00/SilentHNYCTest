import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { openAitchModal } from "../lib/aitchModal";

// Catch-all for /aitch and /aitch/* (the NYC Aitch app doesn't exist yet). Instead
// of the old ExternalRedirect to /aitch/ — which full-reloaded into the SPA fallback
// and re-matched this route forever (infinite reload) — we open the "coming soon"
// modal and send the visitor back where they came from (home if no history). This
// covers any Aitch link that isn't an explicit modal trigger (blog auto-links,
// related-guides) plus someone typing /aitch directly.
export default function AitchRoute() {
    const navigate = useNavigate();

    useEffect(() => {
        openAitchModal();
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/", { replace: true });
        }
    }, [navigate]);

    return null;
}
