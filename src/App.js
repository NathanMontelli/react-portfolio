import React from 'react'
import { Container } from 'reactstrap'
import Appbar from './components/Appbar'
import About from './components/About'
import Cards from './components/Cards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import "./App.css"

function App() {
  return (
    <>
      <Container fluid>
        <Appbar />
        <About />
        <Cards />
        <Contact />
        <Footer />
      </Container>
    </>
  )
}

export default App
