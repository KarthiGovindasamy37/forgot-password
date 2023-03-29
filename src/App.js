import './App.css';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotMail from './ForgotMail';
import Temporary from './Temporary';
import CreateAcc from './CreateAcc';
import ResetPass from './ResetPass';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/create' element={<CreateAcc/>}/>
      <Route path='/forgot' element={<ForgotMail/>}/>
      <Route path='/temp' element={<Temporary/>}/>
      <Route path='/reset' element={<ResetPass/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
