import { useContext } from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import MainLayout from './components/layout/MainLayout';
import Navabar from './components/layout/Navbar'
import Main from './components/main/Main';
import { themeContext } from './Context/ThemeProvider';

function App() {
  const {theme} = useContext(themeContext)
  
  return (
    <div className={theme}>
      <MainLayout>
        <Main />
      </MainLayout>
    </div>
  );
}

export default App;
