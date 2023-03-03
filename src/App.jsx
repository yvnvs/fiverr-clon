import { useState } from 'react'
import Navbar from "./components/navbar/Navbar.jsx"
import "./App.scss";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      </div>
  )
}

export default App
