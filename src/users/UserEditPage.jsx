import axios from 'axios';
import  { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export function UserEditPage() {

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });
  const navigate = useNavigate();
  const {id} = useParams();


  useEffect(()=>{
    loadUser(id);
  }, [id]);

  const loadUser = async(id)=>{
    const response = await axios.get('http://localhost:3000/users/'+id);
    setUser(response.data );
  }


  const changeHandler = (e)=>{
    setUser({...user, [e.target.name]: e.target.value });
  }


  const submitHandler = async(e)=>{
    e.preventDefault();
    await axios.put('http://localhost:3000/users/'+id, user);
    navigate('/');
  }


  return (
    <form onSubmit={submitHandler}>
      <input type="text" name='name' placeholder='Name' value={user.name} onChange={changeHandler} />
      <input type="text" name='username' placeholder='UserName' value={user.username} onChange={changeHandler}   />
      <input type="text" name='email' placeholder='Email' value={user.email} onChange={changeHandler}  />
      <input type="text" name='phone' placeholder='Phone' value={user.phone} onChange={changeHandler}  />
      <input type="text" name='website' placeholder='WEbSite' value={user.website} onChange={changeHandler}  />
      <button type='submit'>UPDATE</button> 
    </form>  
  )
}


