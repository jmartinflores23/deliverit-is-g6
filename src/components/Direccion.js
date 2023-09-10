import React from 'react'
import { Select, Stack, Box, Heading, Flex, Text, Input, Textarea, } from '@chakra-ui/react';

function Direccion({ formData, setFormData }) {
  return (
    <Flex width='full' align='left' justifyContent='center'>
      <Box textAlign='center' px='10'>
        <DireccionBody formData={formData} setFormData={setFormData} />
      </Box>
    </Flex>
  )
}
const DireccionBody = ({ formData, setFormData }) => {
  return (
    <Box my='5' textAlign='left' borderWidth={1} p={7} width='full'>
      <Stack isInline justifyContent='space-between'>
        <Text> Calle:</Text>
        <Input size='sm' placeholder='Ingrese su calle' onChange={(e) =>
          setFormData({ ...formData, calle: e.target.value })} />
        <Text>Nº:</Text>
        <Input size='sm' placeholder='Número' onChange={(e) =>
          setFormData({ ...formData, numero: e.target.value })} />
      </Stack>
      <Stack isInline p={3} my='4' justifyContent='space-between'>
        <Text>Ciudad:</Text>
        <SelectorDireccion formData={formData} setFormData={setFormData} />
      </Stack>
      <Text p={3}>Indicaciones para la entrega</Text>
      <Textarea placeholder='Escriba aquí...' onChange={(e) =>
        setFormData({ ...formData, indicaciones: e.target.value })} />
    </Box>
  )
}
const SelectorDireccion = ({ formData, setFormData }) => {
  return (
    <Select placeholder='Seleccionar Opción' size='sm' onChange={(e) =>
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