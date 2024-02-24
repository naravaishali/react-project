import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import { increment, decrement } from "./actions";
import CountValue from './CountValue'
export default function App(){
  const dispatch=useDispatch()
  return(
    <div>
      <CountValue/>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}




































// import   './App.css'
// import ClassExample  from './ClassExample'
// import State from './State'
// import Input from './Input'

// function App() {
//   return (
//     <div>
    
    
//       <Input/>





//       <h1> Vaishali</h1>
//       <p>Hyderabad</p>
//       <p>in India</p>
//       <State/>

//      <div class="parent">
//       <div class= "product">
//       <ClassExample productName="Car" productPrice="50000" productCompany="Kia" />
//       <ClassExample productName="Bike" productPrice="70000" productCompany="Dio" />
//       </div>
//   </div>


//     </div>
//   )
// }

// export default App














