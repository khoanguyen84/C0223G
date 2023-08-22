import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/layout/Footer';
import MainLayout from './components/layout/MainLayout';
import Navabar from './components/layout/Navbar'
import Main from './components/main/Main';
import LoginPage from './components/Login/LoginPage';

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/main' element={<Main/>} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
