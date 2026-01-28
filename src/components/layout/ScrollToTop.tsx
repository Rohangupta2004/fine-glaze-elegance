import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "smooth" can sometimes feel laggy on route changes
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
