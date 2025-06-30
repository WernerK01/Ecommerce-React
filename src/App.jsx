import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Navbar } from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <h1 className="text-center supershadow-title">Ecommerce Koll</h1>
      <p className="text-center supershadow-text">¡Bienvenido a la página principal!</p>
      <ItemListContainer />
    </>
  )
}

export default App
