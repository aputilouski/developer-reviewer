import { Tab, Tabs } from '@mui/material';
import { Link, useLocation, matchRoutes } from 'react-router-dom';
import { pages } from 'pages';

const Header = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(Object.values(pages), location);
  return (
    <Tabs value={route?.path} className="mt-1 mb-5">
      {Object.values(pages).map(({ label, path }, index) => (
        <Tab key={index} label={label} value={path} to={path} component={Link} />
      ))}
    </Tabs>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
