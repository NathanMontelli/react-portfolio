import react from 'react'
import { Container } from 'reactstrap'
import Appbar from './components/Appbar'
import About from './components/About'

function App() {
  return (
    <>
    <Container fluid>
    <Appbar />
    <About />
    </Container>
    </>
  )
}

export default App
