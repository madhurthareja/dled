import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HashScroller() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Remove the '#' from the hash
      const id = location.hash.replace("#", "");
      // Try to scroll to the element, retrying if not found
      let attempts = 0;
      function scroll() {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 10) {
          attempts++;
          setTimeout(scroll, 100);
        }
      }
      scroll();
    }
  }, [location]);

  return null;
}
// This component will automatically scroll to the element with the ID matching the hash in the URL
// when the component mounts or when the location changes.