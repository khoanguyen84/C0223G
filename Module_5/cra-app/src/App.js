import './App.css';
import Footer from './components/layout/Footer';
import MainLayout from './components/layout/MainLayout';
import Navabar from './components/layout/Navbar'
import Main from './components/main/Main';

function App() {
  return (
    <>
      <MainLayout>
        <Main />
      </MainLayout>
    </>
  );
}

export default App;
