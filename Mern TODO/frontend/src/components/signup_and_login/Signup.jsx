import React, { useState } from 'react'
import './Signup.css'
import axios from "axios";
import {useNavigate} from "react-router-dom"; 

const Signup = () => {
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email :"",
        username : "",
        password : ""
    });
    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]:value});
    }

    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1000/api/v1/signup", Inputs)
        .then((response)=>{
            if(response.data.message === "User Already exists"){
                alert(response.data.message);
            }
            else{
                alert(response.data.message);
                setInputs({
                    email :"",
                    username : "",
                    password : ""
                });
                history("/login");
            }
        });
    }
  return (
    <div className='signup'>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 column d-flex justify-content-center align-items-center ">
                    <div className='d-flex flex-column w-100 p-5'>
                        <input className='p-2 my-2' name='email' type="email" placeholder='Enter Your Email' onChange={change} value = {Inputs.email}/>
                        <input className='p-2 my-2' name='username' type="username" placeholder='Enter Your Username' onChange={change} value = {Inputs.username}/>
                        <input className='p-2 my-2' name='password' type="password" placeholder='Enter Your Password' onChange={change} value = {Inputs.password}/>
                        <button className='btn sign-up' onClick={submit}>Signup</button>
                    </div>
                </div>
                <div className="col-lg-4 column d-flex justify-content-center align-items-center">
                    <h1 className='sign-up-heading'>
                        Sign <br/> Up
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup