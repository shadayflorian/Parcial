const Navbar = () => {

    let titulos = ['Home', 'Catalogo', 'About us', 'Contacto']
  return (
    <>
        <ul>
           {titulos.map((titulo, index) => <li key={index}>{titulo}</li>)}
        </ul>
    </>
  )
}
//el primer elemento de map es la variable 
//el segundo es el inde
export default Navbar