import { useEffect, useState } from 'react';

/**
 * hook to check if the current page is being client side rendered
 */
export const useIsClient = () => {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return isClient;
};
