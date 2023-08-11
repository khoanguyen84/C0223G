import './App.css';
import Footer from './components/layout/Footer';
import MainLayout from './components/layout/MainLayout';
import Navabar from './components/layout/Navbar'
import Main from './components/main/Main';

function App() {
  return (
    <>
      {/* <Navabar/>
      <Main/>
      <Footer/> */}
      <MainLayout>
        <Main />
      </MainLayout>
    </>
  );
}

export default App;
