import { useOwnPagination } from '@/components';
import { useEffect, useState } from 'react';

export const useFilterHook = <T extends object>(props: T) => {
  const { currentPage, pageSize, setCurrentPage, setPageSize } = useOwnPagination();

  const [filters, setFilters] = useState<T>({
    page: currentPage,
    perPage: pageSize,
    ...props,
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      page: currentPage,
      perPage: pageSize,
      ...props,
    }));
  }, [props, currentPage, pageSize]);

  return { filters, setFilters, setCurrentPage, setPageSize };
};
