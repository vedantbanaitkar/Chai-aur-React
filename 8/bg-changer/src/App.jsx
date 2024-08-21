import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from "./components/Menu"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex w-full h-full items-center justify-center ">
      <Menu />
    </div>
  );
}

export default App
