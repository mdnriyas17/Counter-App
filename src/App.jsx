import { useState } from "react"
import './App.css'
function App() {

  const [count, setcount]=useState(0)

  function handleincre(){
    setcount(count+1)
  }
  function handledeg(){
   setcount(count-1)
  }
  function reset(){
    setcount(0)
    
  }

  return (
    <>
    
     <div className="card">
     <p>{count}</p>
     <button className="inc" onClick={handleincre}>
      increament
     </button>
     <button className="res" onClick={reset} disabled={count===0}>
    reset</button>
<button  className="deg"onClick={handledeg} disabled={count===0}>degrement</button> 
      </div>  
    </>
  )
}

export default App
