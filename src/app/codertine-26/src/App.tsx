import { useEffect } from "react";
import ScrollBackground from "./ScrollBackground";
import HomePage from "./pages/HomePage";
import ReservePage from "./pages/ReservePage";
import EventDetailPage from "./pages/EventDetailPage";
import EventGuidePage from "./pages/EventGuidePage";
import { useHashRoute } from "./hooks/useHashRoute";
import "./App.css";

export default function Codetrine() {
  const route = useHashRoute();
  const isReserve = route.path === "/reserve";
  const eventMatch = route.path.match(/^\/events\/([^/]+)(?:\/(guide))?$/);
  const isEvent = Boolean(eventMatch);
  const isGuide = eventMatch?.[2] === "guide";
  const eventId = eventMatch?.[1] ?? "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.path]);

  let page: React.ReactNode;
  if (isEvent) {
    page = isGuide ? (
      <EventGuidePage eventId={eventId} />
    ) : (
      <EventDetailPage eventId={eventId} />
    );
  } else if (isReserve) {
    page = <ReservePage />;
  } else {
    page = <HomePage />;
  }

  return (
    <main className="codetrine-page">
      <ScrollBackground />

      {page}

      <footer className="copyright">
        © 2026
        <strong> CoderTine 7.0</strong>
        &nbsp;·&nbsp; Build · Break · Debug · Ship
      </footer>
    </main>
  );
}