import './App.css'
import { useState } from 'react'
import Title from './components/Title/Title'


function App() {

  const [playing, setPlaying] = useState<boolean>(true);
  const [finished, setFinished] = useState<boolean>(false)

  return (
    <>
      <div>
      {
        playing ?  
        <>
          <Title/>
          <p>body content here</p>
        </> 
        : null
      }
        
      </div>
    </>
  )
}

export default App
