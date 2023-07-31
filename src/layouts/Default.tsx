type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;

  return <>{children}</>;
};

export default DefaultLayout;
