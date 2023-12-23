    import { useState } from "react";
    import React from "react";
    import Form from "./Component/Form"
    import Profile from "./Component/Profile";

const App = ()=>{
const[btn,setbtn] = useState(false)

  return(
<div>

{
!btn ? (
  
  <Form setbtn={setbtn}/>
)
:(
  <Profile/>
)
  
}
 </div>
  )
}

export default App
