import DashboardLayout from '@/layouts/Dashboard';
import { NextPageWithLayout } from '../_app';

const DashboardPage: NextPageWithLayout = () => {
  return <div>acssa</div>;
};

DashboardPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;
