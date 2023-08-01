import { Box } from '@mantine/core';
import { DataTable, DataTableProps } from 'mantine-datatable';
import { useState } from 'react';

type TOwnDataTableProps<T> = DataTableProps<T> & {
  total?: number;
  onSetCurrentPage?: (current: number) => void;
  onSetPageSize?: (pageSize: number) => void;
};

export const OwnDataTable = <T extends object>(props: TOwnDataTableProps<T>): JSX.Element => {
  const { records, total = 0, onSetCurrentPage, onSetPageSize, ...rest } = props;

  const pagination = useOwnPagination();

  return (
    <Box sx={{ height: records?.length ? 'auto' : 300 }}>
      <DataTable
        verticalSpacing="md"
        fontSize="xs"
        records={records}
        withBorder={false}
        {...((onSetCurrentPage && {
          totalRecords: total,
          recordsPerPage: pagination.pageSize,
          page: pagination.currentPage,
          onPageChange: (p) => {
            pagination.setCurrentPage(p);
            onSetCurrentPage && onSetCurrentPage(p);
          },
        }) || { fontSize: 'xs' })}
        {...((onSetPageSize && {
          recordsPerPageOptions: DEFAULT_PAGE_SIZE_OPTIONS,
          onRecordsPerPageChange: (p) => {
            pagination.setPageSize(p);
            onSetPageSize(p);
          },
        }) || { fontSize: 'xs' })}
        {...rest}
      />
    </Box>
  );
};

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 50, 100];

export const useOwnPagination = (defaultPageSize?: number) => {
  const DEFAULT_PAGE_SIZE = defaultPageSize || DEFAULT_PAGE_SIZE_OPTIONS[0];

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const changePageSize = (p: number) => {
    setCurrentPage(1);
    setPageSize(p);
  };

  const resetPagination = () => {
    setCurrentPage(1);
    setPageSize(DEFAULT_PAGE_SIZE);
  };

  return {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize: changePageSize,
    resetPagination,
  };
};
