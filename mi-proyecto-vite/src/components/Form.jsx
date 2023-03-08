import React from 'react'

const Form = () => {
    const handleSubmit = (event) =>{
        //prevent default para que no se reinicie
        event.preventDefault()
        console.log("La info se envio");
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text"></input>
            <input type="text"></input>
            <button>Enviar</button>
        </form>
    </>



  )
}

export default Form