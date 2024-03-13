import React from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email :"",
        password : "",
    });
    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]:value});
    }

    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1000/api/v1/login", Inputs)
        .then((response)=>{
            sessionStorage.setItem("id",response.data.others._id);
            dispatch(authActions.login());
            history("/todo");
        });
    };
  return (
    <div className='signup'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 column d-flex justify-content-center align-items-center">
                    <h1 className='sign-up-heading'>
                        Log <br/> In
                    </h1>
                </div>
                <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                    <div className='d-flex flex-column w-100 p-5'>
                        <input className='p-2 my-2' name='email' type="email" placeholder='Enter Your Email ' value = {Inputs.email} onChange={change}/>
                        <input className='p-2 my-2' name='password' type="password" placeholder='Enter Your Email' value={Inputs.password} onChange={change}/>
                        <button className='btn sign-up' onClick={submit}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login