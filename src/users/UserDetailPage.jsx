import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"


export function UserDetailPage() {
  
  const {id} = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();


  useEffect(()=>{
    loadUser(id);
  }, [id]);

  const loadUser = async(id)=>{
    const response = await axios.get('http://localhost:3000/users/'+id)
    setUser(response.data);
  }


  return (
    <div>
      <div>Name: <span>{user.name}</span>  </div>
      <div>UserName: <span>{user.username}</span>  </div>
      <div>Email: <span>{user.email}</span>  </div>
      <div>phone: <span>{user.phone}</span>  </div>
      <div>website: <span>{user.website}</span>  </div>
      <button onClick={()=> navigate(-1)}>GO BACK</button>
    </div>
  )
}
