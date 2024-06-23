import { useState, useEffect } from "react";
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    if (mediaQuery.matches !== matches) {
      setMatches(mediaQuery.matches);
    }

    const listener = () => setMatches(mediaQuery.matches);
    mediaQuery.addListener(listener);

    return () => mediaQuery.removeListener(listener);
  }, [matches, query]);

  return matches;
}
export default useMediaQuery;
