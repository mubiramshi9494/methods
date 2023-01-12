import {React,useState,useEffect} from 'react'
import Axios from 'axios'
import './App.css';
var id= 11;
const Update = () => {
    const [users,setUsers]=useState([]);
  const [name,setName]=useState("");
  useEffect (()=>{
    Axios.get("https://jsonplaceholder.typicode.com/users/1").then 
    (res => setUsers(res.data))
  },[])


    const updateUser=()=>{
        Axios.put(`https://jsonplaceholder.typicode.com/users/${1}`,{ name:name}).then
        (res => setUsers(res.data));
      }

      const deleteUser=()=>{
        Axios.delete(`https://jsonplaceholder.typicode.com/users/${1}`,).then
        (res => setUsers(res.data));
      }
      if(users == ""|| users==null) return "no users"
  return (
    <div>
        {users.name}
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={updateUser}>post</button>
        <button onClick={deleteUser}>delete</button>
    </div>

  )
}

export default Update
