import { Box, Flex, FormLabel, Input, NumberInput, NumberInputField, Select, SimpleGrid, Stack, Textarea } from '@chakra-ui/react';
import React from 'react';

function Direccion({ formData, setFormData }) {
  return (
    <Flex width='full' align='left' justifyContent='center'>
      <Box textAlign='center' w='75%' >
        <DireccionBody formData={formData} setFormData={setFormData} />
      </Box>
    </Flex>
  )
}
const DireccionBody = ({ formData, setFormData }) => {
  return (
    <Box my='5' textAlign='left' boxShadow='dark-lg' borderWidth={1} borderRadius='lg' p={7} width='full'>
      <SimpleGrid p='1' minChildWidth='120px' spacing={4} >
        <Box>
          <FormLabel> Calle:</FormLabel>
          <Input borderColor='black' borderWidth={2} placeholder={formData.calle || "Ingrese la calle:"} onChange={(e) =>
            setFormData({ ...formData, calle: e.target.value })} />
        </Box>
        <Box>
          <FormLabel borderRadius='lg' >Número:</FormLabel>
          <NumberInput >
            <NumberInputField  borderColor='black' borderWidth={2} placeholder={formData.numero || "Ingrese el número:"} onChange={(e) =>
              setFormData({ ...formData, numero: e.target.value })} />
          </NumberInput>
        </Box>
        <Box>

          <FormLabel>Ciudad:</FormLabel>
          <SelectorDireccion formData={formData} setFormData={setFormData} />


        </Box>
      </SimpleGrid>


      <Stack>
        <FormLabel>Indicaciones para el repartidor:</FormLabel>
        <Textarea borderColor='black' placeholder={formData.indicaciones || "Opcionalmente puede agregarle notas a su repartidor..."} onChange={(e) =>
          setFormData({ ...formData, indicaciones: e.target.value })} />
      </Stack>
    </Box>
  )
}
const SelectorDireccion = ({ formData, setFormData }) => {
  return (
    <Select borderWidth={2} borderColor='black' placeholder={formData.ciudad || "Seleccione"} onChange={(e) =>
      setFormData({ ...formData, ciudad: e.target.value })}>
      <option value='Alta Gracia'> Alta Gracia</option>
      <option value='Córdoba'>Córdoba</option>
      <option value='Jesús María'> Jesús María</option>
      <option value='Villa María'>Villa María</option>
      <option value='Villa Allende'>Villa Allende</option>
    </Select>
  )
}

export default Direccion