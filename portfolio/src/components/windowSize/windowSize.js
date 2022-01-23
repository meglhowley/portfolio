import { useMediaQuery } from 'react-responsive';

const useScreenSize = () => {
  const isSm = useMediaQuery({ query: `(min-width: 640px` });
  const isMd = useMediaQuery({ query: `(min-width: 768px` });
  const isLargeTablet = useMediaQuery({ query: `(min-width: 992px` });
  const isLg = useMediaQuery({ query: `(min-width: 1024px` });
  const isXl = useMediaQuery({ query: `(min-width: 1280px` });

  const getScreenSize = () => {
    if (isXl) return 5;
    if (isLg) return 4;
    if (isLargeTablet) return 3;
    if (isMd) return 2;
    if (isSm) return 1;
    return 0;
  };

  return {
    screenSize: getScreenSize(),
  };
};

export default useScreenSize;
