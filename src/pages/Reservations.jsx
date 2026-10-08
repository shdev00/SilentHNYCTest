import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useOTWidget } from "../components/OTwidget.jsx";

// /reservations has no page of its own. A direct URL load never reaches this
// (public/_redirects 301s /reservations to /), but in-app links do, e.g. the blog
// "Book a table" link. Like AitchRoute, it opens the reservations modal (which
// shows "Reservations coming soon" while RESERVATIONS_OPEN is false in
// OTwidget.jsx) and sends the visitor back where they came from, or home if there
// is no history. It used to hard-redirect to Silent H Toronto's OpenTable page.
export default function Reservations() {
  const navigate = useNavigate();
  const { openReservationWidget } = useOTWidget();
  const done = useRef(false); // run once: the context value changes after opening

  useEffect(() => {
    if (done.current) return;
    done.current = true;
    openReservationWidget();
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate, openReservationWidget]);

  return null;
}
