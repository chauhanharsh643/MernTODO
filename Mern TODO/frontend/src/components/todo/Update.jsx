import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

const Update = ({display, update}) => {
    useEffect(() => {
      setInputs({
        title: update.ttile, body:update.body
      })
    }, [update])
    
    const [Inputs, setInputs] = useState({title: "", body:""});
    const change = (e) => {
const {name, value} = e.target;
        setInputs({...Inputs, [name]:value});
    }

    const submit = async() => {
        display('none');
        await axios.put(`http://localhost:1000/api/v2/updateTask/${update._id}`, Inputs).then((response) =>{
            toast.success("Your Task is Updated");
        })
    }
  return (
    <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
        <h3>Update Your Task</h3>
        <input name="title"type='text'className='todo-inputs my-4 w-100 p-3' value={Inputs.title} onChange={change}/>
        <textarea name='body' className='todo-inputs w-100 p-3' value={Inputs.body}onChange={change}/>
        <div>
            <button className='btn btn-dark my-4' onClick={submit}>UPDATE</button>
            <button className='btn btn-dark my-4 mx-3' onClick={() => {
                display("none");
            }}>CLOSE</button>
        </div>
    </div>
  )
}

export default Update