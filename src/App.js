import './App.css';
import React from 'react';
import { Select, Stack, Box, Heading, Flex, Text, Input, Button, Textarea, } from '@chakra-ui/react';


function App() {
  return (

      <DireccionArea/>

  );
}
const DireccionArea = () => {
  return (
    <Flex minHeight='100vh' width='full' align='left' justifyContent='center'>
      <Box textAlign='center' px='10'>
        <Heading>Agregar Dirección</Heading>
        <DireccionBody/>
      </Box>
    </Flex>
  )
}
const DireccionBody = () => {
  return (
    <Box my='5' textAlign='left'borderWidth={1} px={6} width='full'>
      <Stack my='4' isInline justifyContent='space-between'> 
        <Text> Calle:</Text>
        <Input size='sm' placeholder='Ingrese su calle' />
        <Text>Nº:</Text>
        <Input size='sm' placeholder='Número' />
      </Stack>
      <Stack isInline justifyContent='space-between'> 
        <Text>Ciudad:</Text>
        <SelectorDireccion/>
      </Stack>
      <Text my='2'>Indicaciones para la entrega</Text>
      <Textarea placeholder='Escriba aquí...' />
      <Stack my='4' isInline justifyContent='space-between'>
        <Button width='initial' mt='4px'>Atrás</Button> 
        <Button width='initial' mt='4px'>Continuar</Button>
      </Stack>
      
    </Box>
  )
}
const SelectorDireccion = () => {
  return(
    <Select placeholder='Seleccionar Opción' size='sm' >
      <option value='Alta Gracia'> Alta Gracia</option>
      <option value='Córdoba'>Córdoba</option>
      <option value='Jesús María'> Jesús María</option>
      <option value='Villa María'>Villa María</option>
      <option value='Villa Allende'>Villa Allende</option>
  </Select>
  )
}
/* Esto no va lo esta haciendo Seba creo
const PagoArea = () => {
  return (
    <Flex minHeight='100vh' width='full' align='left' justifyContent='center'> 
    <Box>
      <Heading>Forma de Pago</Heading>
    </Box>
    <FormaPagoButton/>
    </Flex>
  )
}
const FormaPagoButton = () => { 
  return (
    <RadioGroup defaultValue='1'>
      <Stack direction='row'>
        <Radio value='1'>Efectivo</Radio>
        <Radio value='2'>Tarjeta</Radio>
      </Stack>
    </RadioGroup>
  )
}
*/
export default App;
