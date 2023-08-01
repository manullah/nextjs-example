import { OwnDashboardContainer } from '@/components';
import { useFetchArticles } from '@/domains/master-data/articles/hook';
import DashboardLayout from '@/layouts/Dashboard';
import { NextPageWithLayout } from '@/pages/_app';
import { Anchor, Breadcrumbs, Button, Group, Stack, Title } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

const Page: NextPageWithLayout = () => {
  const dataHook = useFetchArticles({});

  return (
    <>
      <OwnDashboardContainer>
        <Group position="apart">
          <Stack spacing="xs">
            <Breadcrumbs separator="→" mt="xs">
              {[
                { title: 'Dashboard', href: '#' },
                { title: 'Master Data', href: '#' },
                { title: 'Articles', href: '#' },
              ].map((item, index) => (
                <Anchor href={item.href} key={index}>
                  {item.title}
                </Anchor>
              ))}
            </Breadcrumbs>
            <Title order={2} size="h1">
              Articles
            </Title>
          </Stack>

          <Button leftIcon={<IconPlus />}>Add</Button>
        </Group>

        {dataHook.data?.items.map((item) => <div key={item.id}>{item.id}</div>)}
      </OwnDashboardContainer>
    </>
  );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
