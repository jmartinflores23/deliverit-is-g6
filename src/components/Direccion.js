import React from 'react'
import { Select, Stack, Box, Heading, Flex, Text, Input, Textarea, } from '@chakra-ui/react';

function Direccion({ formData, setFormData }) {
  return (
    <Flex width='full' align='left' justifyContent='center'>
      <Box textAlign='center' w= '75%' >
        <DireccionBody formData={formData} setFormData={setFormData} />
      </Box>
    </Flex>
  )
}
const DireccionBody = ({ formData, setFormData }) => {
  return (
    <Box my='5' textAlign='left' boxShadow='dark-lg' borderWidth={1} borderRadius='lg' p={7} width='full'>
      <Stack isInline justifyContent='space-between'  align='center'>
        <Text> Calle:</Text>
        <Input size='sm' placeholder={formData.calle || "Ingrese la calle:"} onChange={(e) =>
          setFormData({ ...formData, calle: e.target.value })} />
        <Text>Nº:</Text>
        <Input size='sm' placeholder={formData.numero || "Ingrese el número:"} onChange={(e) =>
          setFormData({ ...formData, numero: e.target.value })} />
      </Stack>
      <Stack isInline p={3} my='4' justifyContent='space-between'  align='center'>
        <Text>Ciudad:</Text>
        <SelectorDireccion formData={formData} setFormData={setFormData} />
      </Stack>
      <Text>Indicaciones para el repartidor:</Text>
      <Textarea placeholder={formData.indicaciones || "Opcionalmente puede agregarle notas a su repartidor..."} onChange={(e) =>
        setFormData({ ...formData, indicaciones: e.target.value })} />
    </Box>
  )
}
const SelectorDireccion = ({ formData, setFormData }) => {
  return (
    <Select placeholder={formData.ciudad || "Seleccione"} size='sm' onChange={(e) =>
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