import { useEffect, useState, useRef } from 'react';

export const useScrollingUp = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }
      // remember current page location to use in the next scroll move
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return show;
};
