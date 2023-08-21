import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import StudentDetail from './components/StudentList/StudentDetail';
import StudentList from './components/StudentList/StudentList';
import MainLayout from './components/layout/MainLayout';
import NotFound from './components/layout/NotFound';
import Main from './components/main/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/main' element={<Main />} />
          <Route path='/student/list' element={<StudentList />} />
          <Route path='/student/detail/:studentId' element={<StudentDetail />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
