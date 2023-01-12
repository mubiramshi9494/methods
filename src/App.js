import {React,useEffect, useState} from 'react';
import Axios from "axios"
import './App.css';
var id= 11;
function App() {
  const [users,setUsers]=useState([]);
  const [name,setName]=useState("");
  const [trigger,setTrigger]=useState(false)
  useEffect (()=>{
    Axios.get("https://jsonplaceholder.typicode.com/users").then 
    (res => setUsers(res.data))
  },[])

  const postUser=()=>{
    Axios.post("https://jsonplaceholder.typicode.com/users",{ id:id++ ,name:name}).then
    (res => setUsers([...users,res.data])).then(()=>setTrigger(!trigger))
  }

 

  
  


return (
  <div>
    {users.map((u,i)=>{
      return(
        <div key={i}>
        {u.name}
        </div>
      )
    }
      )}
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={postUser}>Post</button>
    

      
  </div>
)

  
}

export default App;
