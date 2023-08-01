import { useOwnPagination } from '@/components';
import { useEffect, useState } from 'react';

export const useFilterHook = <T extends object>(props: T) => {
  const { currentPage, pageSize, setCurrentPage, setPageSize } = useOwnPagination();

  const [filters, setFilters] = useState<T>({
    currentPage,
    pageSize,
    ...props,
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      currentPage,
      pageSize,
      ...props,
    }));
  }, [props, currentPage, pageSize]);

  return { filters, setFilters, setCurrentPage, setPageSize };
};
