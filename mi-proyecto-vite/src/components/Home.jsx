import React from 'react'
import Card from './Card'
import Navbar from './Navbar'

const Home = () => {

    let pizzas = [
        {id: 1, tipo: "Muzarella", precio: '$1200', img: 'https://static-sevilla.abc.es/media/gurmesevilla/2013/04/pizza-margarita.jpg'},
        {id: 2, tipo: "Peperonni", precio: '$1300', img: 'https://co.littlecaesars.com/static/1581698757-col-pepperoni.png'},
        {id: 3, tipo: "Napolitana", precio: '$1500', img: 'https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg'},
        {id: 4, tipo: "Tres quesos", precio: '$1400', img: 'https://img.lalr.co/cms/2018/10/10213933/pizza1.jpg?size=xl&ratio=r40_21'},
        {id: 5, tipo: "Pollo y champiñones", precio: '1600', img: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg'}
    ]

    return(
    <div >
        <Navbar/>
        <h1>Bienvenidos a la pizzeria de DH</h1>
        <div className='home'>
        {pizzas.map((pizza) => {
            return(
               
               <Card pizza={pizza}/>
               
            )
         })}
        </div>
    </div>
  )
}

export default Home
