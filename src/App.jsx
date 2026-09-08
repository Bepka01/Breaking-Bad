import Button from './components/ui/Button';
import Icon from './components/ui/Icons';
import Input from './components/ui/Input';
import Loader from './components/ui/Loader';

function App() {
  return (
    <>
      <Loader size={100} />
      <Button variant="default">
        <Icon name="menu" />
        хуй
      </Button>
      <Input placeholder="xuy" />
    </>
  );
}

export default App;
