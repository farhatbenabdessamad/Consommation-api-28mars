import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletuser, get } from '../redux/Actions'
import Edituser from './Edituser'
import { Button, InputGroup } from "react-bootstrap";
import Loading from './Loading';


function UserList() {
 const dispatch= useDispatch()
 useEffect(()=>{
    dispatch(get())
 }, [])
 const users = useSelector(state=>state.users)
 console.log(users)
 const loading = useSelector(state=>state.loading) 
 console.log(loading)
 if(loading=== true){
  return <Loading/>
 }
    return (
        
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
        {users.map(e=>
        <div className="card">
    <img src={e.image} style={{width:"200px", height:"300px"}}/>
  <p className="heading">{e.name}</p>
  <p>{e.email}</p>
  <p>{e.gender}</p>
  <p>{e.gender}</p>
  <Edituser user={e}/>
  <Button variant="danger" onClick={()=>dispatch(deletuser(e._id))}>Delete</Button>
</div>
)}
    </div>
  )
}

export default UserList