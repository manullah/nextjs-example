import { OwnHeader, OwnNavbar } from '@/components';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const { children } = props;

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      padding="md"
      layout="alt"
      navbar={<OwnNavbar hiddenBreakpoint="sm" hidden={!opened} />}
      header={
        <OwnHeader
          user={{
            name: 'John Die',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s',
          }}
          opened={opened}
          toggle={toggle}
        />
      }
    >
      {/* Your application here */}
      {children}
    </AppShell>
  );
};

export default DashboardLayout;
