import React from 'react'


const Square = ({Color,Hex,Textcolr}) => {
    
  return (
    <section className='square'>
        <div style={{backgroundColor: Color,
        color: Textcolr ? 'black' : 'white'
        }}>
            <p>{Color ? Color : 'Empty'}</p>
            <p>{Hex ? Hex : null}</p>
        </div>
    </section>
  )
}

export default Square