import './App.css';
import Footer from './components/layout/Footer';
import MainLayout from './components/layout/MainLayout';
import Navabar from './components/layout/Navbar'
import Main from './components/main/Main';
import Counter from './components/UseState/Counter';
import DrinkBeer from './components/UseState/DrinkBeer';
import UseState from './components/UseState/UseState';
import Login from './components/UseState/Login';

function App() {
  return (
    <>
      {/* <Navabar/>
      <Main/>
      <Footer/> */}
      <MainLayout>
        <Login />
      </MainLayout>
    </>
  );
}

export default App;
