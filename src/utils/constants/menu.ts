import {
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconUser,
  IconSettings,
  TablerIconsProps,
  IconDatabase,
} from '@tabler/icons-react';

type Menu = {
  icon: (props: TablerIconsProps) => JSX.Element;
  label: string;
  links: {
    label: string;
  }[];
};

export const MENUS: Menu[] = [
  {
    icon: IconGauge,
    label: 'Dashboard',
    links: [{ label: 'Dashboard 1' }, { label: 'Dashboard 2' }],
  },
  {
    icon: IconDeviceDesktopAnalytics,
    label: 'Analytics',
    links: [{ label: 'Orders' }],
  },
  {
    icon: IconDatabase,
    label: 'Master Data',
    links: [{ label: 'Article' }, { label: 'User' }],
  },
  {
    icon: IconUser,
    label: 'Account',
    links: [],
  },
  {
    icon: IconSettings,
    label: 'Settings',
    links: [{ label: 'Change Theme' }, { label: 'Wiki pages' }],
  },
];
