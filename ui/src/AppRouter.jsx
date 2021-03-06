import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { pages } from './pages';
import { Layout } from 'components';

const AppRouter = () => (
  <Router>
    <Layout>
      <Routes>
        {Object.values(pages).map(({ path, component: Component }, index) => {
          return <Route key={index} path={path} element={<Component />} />;
        })}
      </Routes>
    </Layout>
  </Router>
);

export default AppRouter;
