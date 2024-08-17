

import './App.css'
import axios from 'axios';
import { useState ,useEffect } from 'react';

function App() {
  const [user,setUser] =useState([]);

  const fetchData = () =>{
    return axios.get("http://localhost/ete-portfolio/public/api/user").then((response) =>setUser(response.data["users"]));
  }
    useEffect(() =>{
      fetchData();
    },[])
 
  

  return (
    <>
      
      <h1 className="text-7xl">Vite + React</h1>

     <ul>
      {user && user.length>0 && user.map((userObj)=>(
        <li key={userObj.id}>{userObj.name}</li>
      ))}
     </ul>
      
    </>
  )
}

export default App
