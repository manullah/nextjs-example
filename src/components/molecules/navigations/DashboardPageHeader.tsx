import { Anchor, Breadcrumbs, Group, Stack, Title } from '@mantine/core';

type DashboardPageHeaderProps = {
  title?: string;
  breadcrumbs?: { title: string; href: string }[];
  extra?: React.ReactNode;
};

export const DashboardPageHeader: React.FC<DashboardPageHeaderProps> = (props) => {
  const { title, breadcrumbs = [], extra } = props;

  return (
    <Group position="apart">
      <Stack spacing="xs">
        <Breadcrumbs separator="→" mt="xs" fz="sm">
          {breadcrumbs.map((item, index) => (
            <Anchor href={item.href} key={index}>
              {item.title}
            </Anchor>
          ))}
        </Breadcrumbs>
        <Title order={2} size="h1">
          {title}
        </Title>
      </Stack>

      {extra}
    </Group>
  );
};
