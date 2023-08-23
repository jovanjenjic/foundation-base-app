import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useCurrentPage = (): string => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<string>('');

  useEffect(() => {
    const pathname = location.pathname;
    const pageName =
      pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
    setCurrentPage(pageName || 'Dashboard');
  }, [location]);

  return currentPage;
};

export default useCurrentPage;
