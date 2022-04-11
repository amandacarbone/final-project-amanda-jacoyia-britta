
import './App.css';
import { useLocation } from 'react-router-dom';
import { Header } from './components/constants/Header';


function App() {

  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
    return null
  } else {
    return <Header/>
  }

}

export default App;