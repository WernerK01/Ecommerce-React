import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Navbar } from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <h1 className="text-center supershadow-title">Ecommerce Koll</h1>
      <p className="text-center supershadow-text">¡Bienvenido a la página principal!</p>
      <ItemListContainer 
        name={"Auriculares Inalambricos Soundcore C30i Bt Ergonómico Negro"} 
        price={1500}
      />
    </>
  )
}

export default App
