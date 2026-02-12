import { useInput } from "./hooks/useInput.js"
import { useRef } from "react"
import { useFilter } from "./hooks/useFilter.js"
import Header from "./Components/header/Header.jsx"
import MainLayout from "./Components/mainLayout/MainLayout"
import Footer from "./Components/footer/Footer"

function App() {

  const { input, handleInput } = useInput();
  const containerRef = useRef();
  const { handleCategory, contenido, category } = useFilter({ input });

  return (
    <div className='container' ref={containerRef}>
      <Header title="PELISAPI" input={input} handleInput={handleInput} onClick={handleCategory} />
      <MainLayout input={input} containerRef={containerRef} contenido={contenido} category={category} />
      <Footer />
    </div>
  )
}

export default App
