import React from 'react'
import "./index.css";
import Input from './Input';
import Square from './Square';
import {useState} from 'react'

const App = () => {
  const [Color,setColor] = useState('')
  const [Hex,setHex] = useState('')
  const[Textcolr, setTextcolr] = useState(true)
  return (
    <div className='App'>
      <Square 
      Color={Color}
      Hex={Hex}
      Textcolr = {Textcolr}
      />
      <Input 
      Color ={Color}
      setColor ={setColor}
      setHex ={setHex}
      Textcolr ={Textcolr}
      setTextcolr = {setTextcolr}

      />
    </div>
  )
}

export default App
