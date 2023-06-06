import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import NewPassword from './components/NewPassword';
import Register from './components/Register';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import URL from './components/URL';

export const url = 'http://localhost:5000' //'https://url-shortener-api-kkuy.onrender.com';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ='/login' element = {<Login/>}/>
      <Route path ='/users/adduser' element = {<Register/>}/>
      <Route path='/users/forgotpassword/:email' element = {<ForgotPassword/>}/>
      <Route path='/users/update-password/:randomString' element = {<NewPassword/>}/>
      <Route path ='/url/url/url' element = {<URL/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
