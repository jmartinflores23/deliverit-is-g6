import './App.css';
import { Select, Stack, Flex, Box, Heading, Text, Input, Button } from '@chakra-ui/react';


function App() {
  return (
    <DireccionArea/>
  );
}
  const DireccionArea = () => {
    return (
      <Flex minHeight='100vh' width='full' align='left' justifyContent='center'> 
        <Box textAlign='center'>
          <Heading>Agregar Dirección</Heading>
          <DireccionBody/>
        </Box>
      </Flex>
    )
  }
  const DireccionBody = () => {
    return (
      <Box textAlign='left'borderWidth={1} px={4} width='full'>
        <Stack isInline justifyContent='space-between'> 
          <Text> Calle:</Text>
          <Input placeholder='Ingrese su calle' />
          <Text>Nº:</Text>
          <Input placeholder='Número' />
        </Stack>
        <Stack isInline justifyContent='space-between'> 
          <Text>Ciudad:</Text>
          <SelectorDireccion/>
        </Stack>
        <Text>Indicaciones para la entrega</Text>
        <Input placeholder='Escribe aquí...' />
        <Button
          width='initial' mt='4px'>Continuar</Button>
      </Box>
    )
  }
  const SelectorDireccion = () => {
    return(
      <Select placeholder='Seleccionar Opción' size='sm' >
        <option value='Córdoba'> Córdoba</option>
        <option value='Jesús María'> Jesús María</option>
        <option value='Villa María'>Villa María</option>
        <option value='Villa Allende'>Villa Allende</option>
    </Select>
    )
  }

export default App;
