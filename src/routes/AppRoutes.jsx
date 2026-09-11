import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import Home from '../pages/Home/Home';
import Characters from '../pages/Characters/Characters';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />

      <Route path={ROUTES.CHARACTERS} element={<Characters />} />
    </Routes>
  );
};

export default AppRouter;
