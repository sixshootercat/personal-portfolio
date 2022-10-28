import { useEffect, useState } from 'react';

/**
 * checks if code is being executed in the browser
 */
export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};
