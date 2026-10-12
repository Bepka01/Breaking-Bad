import style from './App.module.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import AppRouter from './routes/AppRoutes';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
