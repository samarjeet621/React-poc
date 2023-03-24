import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  atom,
  RecoilRoot,
} from 'recoil';
import './App.css';
import Details from './components/Details';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
export const userAtom = atom({
  key: 'user', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login}/>
          <Route path="/signup" Component={SignUp}/>
          <Route path="/home" Component={Home}/>
          <Route path="/details/:id" Component={Details}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
