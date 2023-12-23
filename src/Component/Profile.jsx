import React, { useEffect } from "react";
import { useState } from "react";

const Profile = ()=>{
const [obj1,setobj] = useState({})
 useEffect(()=>{
 let  obj = JSON.parse(localStorage.getItem("testObject"))
 if(obj){
 setobj(obj)
 }
 localStorage.removeItem("testObject");
 },[])


return(

<div>
{/* {
   obj1&&<div> */}
   <img src = {obj1.image}/>
   <p>ID: {obj1.id}</p>
    <p>Email: {obj1.email}</p>
   <p> FirstName: {obj1.firstName}</p>
   <p> LastName: {obj1.lastName}</p>
   <p>Gender: {obj1.gender}</p>
   <p>Token:  {obj1.token}</p>
   <p>Useranme: {obj1.username}</p>
   {/* </div>
} */}
</div>


)


}



export default Profile





// hbingley1
// CQutx25i8r



