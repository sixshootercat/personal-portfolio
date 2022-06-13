import { useEffect, useRef } from "react";

export const useIsMounted = () => {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current === false) {
      mounted.current = true;
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted.current;
};
