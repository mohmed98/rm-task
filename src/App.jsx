import Header from './components/Header'
import Summary from './components/Summary'
import Graph from './components/Graph'
import Cta from './components/Cta'
import Navigation from './components/Navigation'
import { Box, Container } from '@chakra-ui/react'

function App() {

  return (
    <>

      <Header />
        <Box p="5" bg={'gray.100'}>

          <Summary />
          <Graph />
          <Cta />
        </Box>
      <Navigation />
    </>
  )
}

export default App
