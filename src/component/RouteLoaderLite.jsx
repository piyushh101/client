import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MIN_ROUTE_MS = 600; // feel-good duration

export default function RouteLoaderLite() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let done = false;
    const started = Date.now();
    setLoading(true);

    // let the new route render, then hide after min time
    const end = () => {
      if (done) return;
      const elapsed = Date.now() - started;
      const wait = Math.max(0, MIN_ROUTE_MS - elapsed);
      setTimeout(() => setLoading(false), wait);
      done = true;
    };

    // hide as soon as the next paint happens (route mounted),
    // but keep min duration
    requestAnimationFrame(end);

    return () => { done = true; };
  }, [pathname]);

  if (!loading) return null;
  return (
    <div className="loader-wrapper">
      <div className="loader" />
    </div>
  );
}
