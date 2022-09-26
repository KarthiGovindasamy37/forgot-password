import logo from './logo.svg';
import './App.css';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotMail from './ForgotMail';
import PasswordChange from './PasswordChange';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/forgot' element={<ForgotMail/>}/>
      <Route path='/reset/:token' element={<PasswordChange/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
