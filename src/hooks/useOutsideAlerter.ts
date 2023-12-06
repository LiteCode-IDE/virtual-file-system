import { useEffect } from "react";

export default function useOutsideAlerter(
  ref: React.RefObject<HTMLElement>,
  callback: React.Dispatch<React.SetStateAction<boolean>> | (() => void),
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
