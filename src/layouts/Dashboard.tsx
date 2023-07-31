type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const { children } = props;

  return <>{children}</>;
};

export default DashboardLayout;
