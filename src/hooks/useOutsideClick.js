import { useEffect } from "react";

function useOutsideClick(refArray, callback, value) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (!refArray.length) {
        callback(value);
      } else if (!refArray.find(ref => ref.current && ref.current.contains(event.target))) {
        callback(value);
      }
    }

    document.addEventListener("mousedown", handleClickOutside, false);
    document.addEventListener("focusin", handleClickOutside, false);
    document.addEventListener("touchstart", handleClickOutside, false);

    // Cleanup the listeners on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false);
      document.removeEventListener("focusin", handleClickOutside, false);
      document.removeEventListener("touchstart", handleClickOutside, false);
    };
  }, [refArray, callback, value]);
}

export default useOutsideClick;