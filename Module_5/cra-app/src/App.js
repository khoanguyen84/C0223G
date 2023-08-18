import './App.css';
import UseEffect from './components/UseEffect/UseEffect';
import Footer from './components/layout/Footer';
import MainLayout from './components/layout/MainLayout';
import Navabar from './components/layout/Navbar'
import Spinner from './components/layout/Spinner';
import Main from './components/main/Main';

function App() {
  return (
    <>
      {/* <Navabar/>
      <Main/>
      <Footer/> */}
      <MainLayout>
        <UseEffect />
      </MainLayout>
    </>
  );
}

export default App;
