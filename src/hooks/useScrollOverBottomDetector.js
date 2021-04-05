import { useEffect } from "react";

function useScrollOverBottomDetector(ref, callback, value) {
  useEffect(() => {
    function scrollPastElement() {
      if (ref.current && ref.current.getBoundingClientRect().bottom < 0) {
        callback(value);
      } else {
        callback(!value);
      }
    }

    document.addEventListener("scroll", scrollPastElement, false);

    // Cleanup the listeners on unmount
    return () => {
      document.removeEventListener("scroll", scrollPastElement, false);
    };
  }, [ref, callback, value]);
}

export default useScrollOverBottomDetector;