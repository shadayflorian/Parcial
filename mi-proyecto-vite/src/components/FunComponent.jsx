import { useState } from 'react'

const FunComponent = () => {
   
 const [students, setStudents] = useState({
    name: 'Shaday',
    age: 19, 
    country: 'Colombia'
 })
 
 const materia = {
    //spread operation
    ...students,
    nota: 10
 }

    //destructuracion
 const changeName = () => {
    if(students.name === 'Shaday'){
        setStudents({country: students.country, name: 'Nair'})
    } else {
        setStudents({country: students.country, name: 'Shaday'})
    }
 }   
 return (

        <div>
           <h2>{students.name}</h2>
           {console.log(useState)}
           <button onClick={changeName}>Change name</button>
        </div>
    )
}

//estado: datos que se guardan dentro del componente
export default FunComponent