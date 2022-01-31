import React from 'react'
import { Container } from 'reactstrap'
import Appbar from './components/Appbar'
import About from './components/About'
import Cards from './components/Cards'

function App() {
  return (
    <>
    <Container fluid>
    <Appbar />
    <About />
    <Cards />
    </Container>
    </>
  )
}

export default App
