import './App.css';

import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Signup from './components/signup_and_login/Signup';
import Login from './components/signup_and_login/Login';
import Todo from './components/todo/Todo';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authActions } from './store';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() =>{
    const id = sessionStorage.getItem("id");
    if(id){
      dispatch(authActions.login());
    }
  }, [])
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route path="/todo" element = {<Todo/>}/>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/login" element = {<Login/>}/>

        </Routes>
      </Router>
      {/* <Home/> */}
      <Footer/>
    </div>
  )
}

export default App