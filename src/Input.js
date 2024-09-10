import React from 'react'
import convertCssColorNameToHex from 'convert-css-color-name-to-hex';


const Input = ({Color,setColor,setHex,setTextcolr,Textcolr}) => {


  return (
    <main className='main'>
        <form className='addForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='content_type'>Add Color Item</label>
            <input
            type = 'text'
            id = 'content_type'
            placeholder='Add Color Item'
            value={Color}
            onChange={(e) => {setColor(e.target.value)
                setHex(convertCssColorNameToHex(e.target.value))
            }}
            ></input>
            <button 
            className='button'
            onClick={() => setTextcolr(!Textcolr)}>Toggle Text Color</button>
        </form>
    </main>
  )
}

export default Input