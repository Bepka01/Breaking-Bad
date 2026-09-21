import { Route, Routes } from 'react-router-dom';

import Characters from '../pages/Characters';
import Home from '../pages/Home/Home';
import { ROUTES } from './routes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CHARACTERS} element={<Characters />} />
    </Routes>
  );
};

export default AppRouter;
