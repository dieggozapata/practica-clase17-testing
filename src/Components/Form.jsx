import React from 'react'
const Form = ({handleClick}) => {    
  return (
    <div>
        <h1>Valores Numéricos</h1>
        <form action="">            
            <input data-testid = 'valorNumerico' type='text' />
            <button onClick={handleClick}>Enviar</button>
        </form>
    </div>
  )
}

export default Form