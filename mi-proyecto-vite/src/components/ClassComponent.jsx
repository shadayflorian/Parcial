import { Component} from 'react'

class ClassComponent extends Component{
  constructor(){
    super()
    this.state = {
      name: 'Shaday', 
      age: 19
    }

    this.changeName = this.changeName.bind(this)
    
  }

  changeName(){
    if(this.state.name === "Shaday"){
      this.setState({name: 'Jesus'})
    } else{
      this.setState({name: "Shaday"})
    }
  }

  render(){
    console.log(this.state)
     return(
      
      <div>
        <h1>Hello {this.state.name}, estoy usando componente de clases</h1>
        <button onClick={this.changeName}>Cambiar nombre</button>
      </div>
     )
   }
}

export default ClassComponent
//si tienes un solo elemento usar mejor defauk
//props forma de llevar informacion de un componente a otro
//rcc para componente de clase