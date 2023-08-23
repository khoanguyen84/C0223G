import './App.css';
import Todo from './components/TodoList/Todo';
import Footer from './components/layout/Footer';
import MainLayout from './components/layout/MainLayout';
import Navabar from './components/layout/Navbar'
import Main from './components/main/Main';

function App() {
  return (
    <>
      <MainLayout>
        <Todo />
      </MainLayout>
    </>
  );
}

export default App;
