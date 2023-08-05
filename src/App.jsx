import Header from './components/Header'
import Summary from './components/Summary'
import Graph from './components/Graph'
import Cta from './components/Cta'
import Navigation from './components/Navigation'
import { Container } from '@chakra-ui/react'

function App() {

  return (
    <Container>
      <Header />
      <Summary />
      <Graph />
      <Cta />
      <Navigation />
    </Container>
  )
}

export default App
