import { useEffect, useState } from 'react';

/**
 * checks if code is being executed in the server
 */
export const useIsSSR = () => {
  const [isSSR, setIsSSR] = useState(false);

  // `useEffect` never runs on the server, so we must be on the client if
  // we hit this block
  useEffect(() => {
    setIsSSR(true);
  }, []);

  return isSSR;
};
