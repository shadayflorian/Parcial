//escribir rafce para que se cree inemediataente un componente de funcion en rect
import './Card.css'  
//Si no estoy importando nada, botto el import
const Card = ({pizza}) => {
      return (
        <div key={pizza.id} className='card'>
         
         <img src={pizza.img} className='cardImage'/>
         <h3 className='cardTitle'>{pizza.tipo}</h3>
         <h4 className='cardPrice'>{pizza.precio}</h4>
       
        </div>
      )
    }
    
export default Card