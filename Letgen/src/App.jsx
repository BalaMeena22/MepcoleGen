import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Signup from './Signup';  
import Login from './Login';  
import Dashboard from './Dashboard';  
import './App.css';  

function App() {  
  return (  
    <div data-theme="light">
    <BrowserRouter>  
      <Routes>  
        <Route path='/' element={<Login />} />  
        <Route path='/register' element={<Signup />} />  
        <Route path='/login' element={<Login />} />  
        <Route path='/dashboard' element={<Dashboard />} />  
      </Routes>  
    </BrowserRouter>  
    </div>
  );  
}  

export default App;
