import { useState } from 'react'
import logo from './logo.svg'
import { motion } from `framer-motion`;
import './App.css'

function App() {
  let [head , setHead] = useState(0)
  let [tail , setTail] = useState(0)

    
 


  return (
    <>
    <div className="container">
    <div className="stats">
      <p id="heads-count">Head: {head}</p>
      <p id="tails-count">Tails: {tail}</p>
    </div>
    <div className="coin" id="coin">
      <div className="heads">
        <img src="heads.svg" />
      </div>
      <div className="tails">
        <img src="tails.svg" />
      </div>
    </div>
    <div className="buttons">
      <button id="flip-button" onClick={()=>{
        let i = Math.floor(Math.random() * 2);
        coin.style.animation = "none";
        if(i){
           
                coin.style.animation = "spin-heads 3s forwards";
                setTimeout(()=>  setHead(head + 1),2000);
               
               
            
         
        }
        else{
           
                coin.style.animation = "spin-tails 3s forwards";
                setTimeout(()=>  setTail(tail + 1),2000);
             
                
         
        }
        
        
      }}>Flip Coin</button>
      <button id="reset-button" onClick={()=>{setHead(0),setTail(0)}}>Reset</button>
    </div>
    </div>
  </>
  )
}

export default App
