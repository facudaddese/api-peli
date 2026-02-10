import { useInput } from "./hooks/useInput.js"
import Header from "./Components/header/Header.jsx"
import MainLayout from "./Components/mainLayout/MainLayout"
import Footer from "./Components/footer/Footer"
import { useRef } from "react"
// import { Routes, Route } from "react-router-dom"

function App() {

  const { input, handleInput } = useInput();
  const containerRef = useRef();

  return (
    <div className='container' ref={containerRef}>
      <Header title="PELISAPI" input={input} handleInput={handleInput} />
      <MainLayout input={input} containerRef={containerRef} />
      <Footer />
    </div>
  )
}

export default App
