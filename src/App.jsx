import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

        <button onClick={() => setCount(5)}>
          count is {count}
        </button>
       
    </div>
  )
}

export default App
