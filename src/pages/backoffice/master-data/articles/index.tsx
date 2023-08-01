import { DashboardPageHeader, GroupActionButton, OwnDashboardContainer, OwnDataTable } from '@/components';
import { useFilterHook } from '@/domains/commons/hook';
import { useFetchArticles } from '@/domains/master-data/articles/hook';
import { TArticleResponse } from '@/domains/master-data/articles/types/entity';
import { TArticleParams } from '@/domains/master-data/articles/types/request';
import DashboardLayout from '@/layouts/Dashboard';
import { NextPageWithLayout } from '@/pages/_app';
import { Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { DataTableColumn } from 'mantine-datatable';
import { useMemo } from 'react';

const Page: NextPageWithLayout = () => {
  const filterHook = useFilterHook<TArticleParams>({});
  const dataHook = useFetchArticles({
    params: {
      isDraft: true,
      ...filterHook.filters,
    },
  });

  const columns = useMemo<DataTableColumn<TArticleResponse>[]>(
    () => [
      { accessor: 'title' },
      {
        accessor: 'action',
        textAlignment: 'right',
        width: 100,
        render: (record) => (
          <GroupActionButton onUpdate={() => console.log(record.id)} onDelete={() => console.log(record.id)} />
        ),
      },
    ],
    [],
  );

  return (
    <>
      <OwnDashboardContainer>
        <DashboardPageHeader
          title="Articles"
          breadcrumbs={[
            { title: 'Dashboard', href: '#' },
            { title: 'Master Data', href: '#' },
            { title: 'Articles', href: '#' },
          ]}
          extra={
            <>
              <Button leftIcon={<IconPlus />}>Add</Button>
            </>
          }
        />

        <OwnDataTable
          columns={columns}
          records={dataHook.data?.items || []}
          total={dataHook.data?.meta.total}
          fetching={dataHook.isFetching}
          onSetCurrentPage={filterHook.setCurrentPage}
          onSetPageSize={filterHook.setPageSize}
        />
      </OwnDashboardContainer>
    </>
  );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
