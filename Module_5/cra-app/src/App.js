import './App.css';
import Footer from './components/layout/Footer';
import MainLayout from './components/layout/MainLayout';
import Navabar from './components/layout/Navbar'
import Main from './components/main/Main';
import Counter from './components/UseState/Counter';
import DrinkBeer from './components/UseState/DrinkBeer';
import UseState from './components/UseState/UseState';
import Login from './components/UseState/Login';
import Register from './components/UseState/Register';
import Cart from './components/UseState/Cart';
import PlayList from './components/UseState/PlayList';

function App() {
  return (
    <>
      {/* <Navabar/>
      <Main/>
      <Footer/> */}
      <MainLayout>
        <PlayList />
      </MainLayout>
    </>
  );
}

export default App;
