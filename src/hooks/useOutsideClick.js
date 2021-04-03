import { useEffect } from "react";

function useOutsideClick(refArray, callback, value) {
  useEffect(() => {
    function handleClickOutside(event) {

      // Check that refArray is an array, else handle it as a single ref
      if (Array.isArray(refArray) && !refArray.find(ref => ref.current && ref.current.contains(event.target))) {
        callback(value);
      } else if (refArray.current && !refArray.current.contains(event.target)) {
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