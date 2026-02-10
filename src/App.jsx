import { useInput } from "./hooks/useInput.js"
import Header from "./Components/header/Header.jsx"
import MainLayout from "./Components/mainLayout/MainLayout"
import Footer from "./Components/footer/Footer"

function App() {

  const { input, handleInput } = useInput();
  
  return (
    <div className="container">
      <Header title="APIPELI" input={input} handleInput={handleInput} />
      <MainLayout input={input} />
      <Footer />
    </div>
  )
}

export default App
