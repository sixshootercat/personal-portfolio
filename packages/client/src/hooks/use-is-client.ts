import { useEffect, useState } from 'react';

/**
 * checks if we are in the browser or not
 */
export const useIsClient = () => {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return isClient;
};
