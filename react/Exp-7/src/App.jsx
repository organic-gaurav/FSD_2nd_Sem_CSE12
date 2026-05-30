/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentCard from "./studentcard.jsx"

function App() {
  return(
    <div>
      <h1>Student card</h1>
      <StudentCard name="Gaurav" marks="30" grade="A"/>
      <StudentCard name="gg" marks="30" grade="A"/>
      <StudentCard name="gp" marks="30" grade="A"/>
      <StudentCard name="manas" marks="30" grade="A"/>
    </div>
  );
}
export default App;
*/
/*import React from "react";
import{useState}from "react";

function app(){
  const[isOn,setIsOn]= useState(false)
  return(
    <div style ={{textAlign:'center',marginTop:'50px'}}>
      <h1>toggle button</h1>
      <button onClick={()=>setIsOn(!ison)}/>
       {isOn? 'ON':'OFF'}
    </div>
    
  );

}
export default App;*/

import{useState}from "react";
function gamescore(){
  const[score,setscore]=usestate(0);
  return(
    <div>
      <h1>current score:{score}</h1>
      <button onClick={()=>setscore(score+1)}>score a point</button>
    </div>
  )
}