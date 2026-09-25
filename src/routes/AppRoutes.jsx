import { Route, Routes } from 'react-router-dom';

import Characters from '../pages/Characters';
import Home from '../pages/Home/Home';
import PersonPage from '../pages/PersonPage';
import { ROUTES } from './routes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CHARACTERS} element={<Characters />} />
      <Route path={ROUTES.PERSON} element={<PersonPage />} />
    </Routes>
  );
};

export default AppRouter;
