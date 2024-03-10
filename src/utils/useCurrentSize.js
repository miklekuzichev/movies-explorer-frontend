import { useEffect, useState } from 'react';

const getWidth = () => {
  return document.documentElement.clientWidth;
};

function useCurrentSize() {
  const [size, setSize] = useState({
    width: getWidth(),
  });

  useEffect(() => {
    let timeOut = null;
    const handleResize = () => {
      clearTimeout(timeOut);

      timeOut = setTimeout(() => {  // устаналвиваем таймаут измерения ширины экрана
        setSize({
          width: getWidth(),
        });
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return size;
}

export default useCurrentSize;
