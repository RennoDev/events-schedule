import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globals';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;