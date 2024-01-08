import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function AddUserPage() {

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });
  const navigate = useNavigate();


  const changeHandler = (e)=>{
    setUser({...user, [e.target.name]: e.target.value });
  }


  const submitHandler = async(e)=>{
      await axios.post('http://localhost:3000/users/', user);
    navigate('/');
  }


  return (
    <form onSubmit={submitHandler}>
      <input type="text" name='name' placeholder='Name' value={user.name} onChange={changeHandler} />
      <input type="text" name='username' placeholder='UserName' value={user.username} onChange={changeHandler}   />
      <input type="text" name='email' placeholder='Email' value={user.email} onChange={changeHandler}  />
      <input type="text" name='phone' placeholder='Phone' value={user.phone} onChange={changeHandler}  />
      <input type="text" name='website' placeholder='WEbSite' value={user.website} onChange={changeHandler}  />
      <button type='submit'>ADDD</button> 
    </form>  
  )
}
