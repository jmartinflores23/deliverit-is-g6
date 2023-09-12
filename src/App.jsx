import './App.css';
import Formulario from './components/Formulario';
import { Heading, Box, Icon } from '@chakra-ui/react';
import { GiKnifeFork } from 'react-icons/gi'



function App() {
  return (
    <div className="App">
      <Box bg='#007090' w='100%' p={4} color='white' marginBottom='20' /* borderWidth='0.5em' borderColor='black' */>
        <Icon as={GiKnifeFork} boxSize={12} />
        <Heading display='inline' size='3xl' fontFamily='Merriwheater'>  DeliverEat!</Heading>
      </Box>
      <Formulario/>
    </div>
  );
}

export default App;
