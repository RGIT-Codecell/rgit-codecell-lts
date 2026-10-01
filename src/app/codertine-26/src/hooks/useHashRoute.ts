import { useEffect, useState } from "react";

export type Route = {
  path: string;
  query: URLSearchParams;
};

function parseHash(): Route {
  const raw =
    typeof window === "undefined"
      ? ""
      : window.location.hash.replace(/^#/, "");
  const [path, search] = raw.split("?");
  return { path: path || "/", query: new URLSearchParams(search ?? "") };
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash());

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}