import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './app/Main';


import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './app/Header';
import UserProfile from './app/UserProfile';
import Login from './app/Login';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile/:id' element={<UserProfile />}/>
        <Route path='/profile/' element={<UserProfile />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
