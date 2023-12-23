import React, { useState } from "react";
import axios from "axios";
import ReactDom from "react-dom"
import App from "../App";
const Form = ({setbtn})=>{

const [Email,SetEmail] = useState("")
const[Password,SetPassword] = useState("")

const [error,seterror] = useState("")


async function fetchApi(){
    console.log("hii")
    

try{
let Response = await axios.post('https://dummyjson.com/auth/login',{
"username":Email,
"password":Password
},
{
    headers: {
      'Content-Type': 'application/json',
    },

}

)

let testObject = Response.data;

localStorage.setItem('testObject', JSON.stringify(testObject))
setbtn(true)
}
catch(err){
console.log(err.response.data)
seterror(err.response.data.message)
}


}


return(
<div className="body">


<div className ="forms">
<div className="form">

<p className ="p1">Welcome back! 👋</p>
<p className ="p2">Sign in to your account</p>

<div>
<p>Your email</p>
<input type ="text"
onChange ={(e)=>{SetEmail(e.target.value)}}
/>
</div>

<div>
<p>password</p>
<input type ="password"
onChange ={(e)=>{SetPassword(e.target.value)}}/>
</div>

<button onClick={fetchApi}>CONTINUE</button>
<p className ="forgot">Forget your password?</p>

</div>
</div>

<p className ="signup">Don't have an account? <a href ="#">Sign up</a></p>
</div>

)
}

export default Form









