import { Link, useLocation } from 'react-router-dom';

import Person from '../../components/Person/Index';
import style from './style.module.scss';

const PersonPage = () => {
  const { state } = useLocation();

  return (
    <div className={style.personPage}>
      <Link to="/characters" className={style.back}>
        ← Back to Catalog
      </Link>

      <Person
        name={state.name}
        img={state.img}
        birthday={state.birthday}
        nickname="Heisenberg"
        quote="I am not in danger, Skyler. I am the danger."
      />
    </div>
  );
};

export default PersonPage;
