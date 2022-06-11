import { Divider, Tab, Tabs } from '@mui/material';
import { Link, useLocation, matchRoutes } from 'react-router-dom';
import { pages } from 'pages';

const tabsClasses = { flexContainer: 'justify-center gap-1.5' };
const Header = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(Object.values(pages), location);
  return (
    <Tabs value={route?.path} className="mt-1.5" classes={tabsClasses}>
      {Object.values(pages).map(({ label, path }, index) => (
        <Tab key={index} label={label} value={path} to={path} component={Link} className="basis-48" />
      ))}
    </Tabs>
  );
};

const Layout = ({ children }) => (
  <div className="max-w-6xl mx-auto">
    <Header />
    <Divider />
    <div className="py-5">{children}</div>
  </div>
);

export default Layout;
