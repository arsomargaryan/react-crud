import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export function UserListPage() {
  
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    loadusers();
  }, []);

  
  const loadusers = async ()=> {
    try{
      const response = await axios.get('http://localhost:3000/users');
      setUsers(response.data);
    }catch(e){
      console.error(e.message);
    }
  }

  const deleteUser = async(id)=>{
      await axios.delete('http://localhost:3000/users/' + id);
      //loadusers(); ayl tarberak vat
      const newUsers = users.filter(el=> el.id !== id );
      setUsers(newUsers);
 }




  return (
    <div>
      <button onClick={()=> navigate('/user/add')}>ADD NEW USER</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>

            {
              users.map(user=>    <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={()=> navigate('/user/detail/' + user.id)}>detail</button>
                  <button onClick={()=> navigate('/user/edit/' + user.id)}>edit</button>
                  <button onClick={()=> deleteUser(user.id)}>delete</button>
                </td>
              </tr>)
            }
         

        </tbody>

       
      </table>

    </div>
  )
}
