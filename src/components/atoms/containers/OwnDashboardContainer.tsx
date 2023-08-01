import { Container, rem } from '@mantine/core';

type OwnDashboardContainerProps = {
  children: React.ReactNode;
};

export const OwnDashboardContainer: React.FC<OwnDashboardContainerProps> = (props) => {
  const { children } = props;

  return (
    <Container py="xl">
      <div style={{ display: 'flex', flexDirection: 'column', gap: rem(16) }}>{children}</div>
    </Container>
  );
};
