import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () =>{
    if(count<20){
      setCount(count+1);
    }
    
  };

  const removeValue = () =>{
    if(count>0){
      setCount(count-1);
    }
    
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {count}</h2>
      {/* isMember ? '$2.00' : '$10.00'; */}
      <button onClick={addValue}>Add</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App
