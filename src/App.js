import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Routes from './Routes';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
