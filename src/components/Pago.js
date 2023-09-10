import React, { useState } from 'react'
import {  Stack, Box, Heading, Flex, Text, Input, Radio, RadioGroup } from '@chakra-ui/react';

function Pago({ formData, setFormData }) {
  const [opcionSelecc, setOpcionSelecc] = useState('efectivo');

  // const cambioOpcion = (event) => {
  //   setOpcionSelecc(event.target.value)
  // };

  const cambioOpcion = (event) => {
    const nuevaFormaDePago = event.target.value;
    setOpcionSelecc(nuevaFormaDePago);
    // Actualiza formData con la nueva formaDePago
    setFormData({ ...formData, formaDePago: nuevaFormaDePago });
  };
  return (

    <Box textAlign='center' >

      <Stack isInline justifyContent='center'>
        <Flex direction='column' mr={300 }>
          <label>
            <input type="radio" value="efectivo" checked={opcionSelecc === 'efectivo'} onChange={cambioOpcion}/> Efectivo
          </label>
        </Flex>
        <Flex direction='column' ml={300}>
          <label>
            <input type="radio" value="tarjeta" checked={opcionSelecc === 'tarjeta'} onChange={cambioOpcion}  /> Tarjeta
          </label>
        </Flex>
      </Stack>

      <div style={{ display: "grid", gridTemplateColumns: "40% 60%" }}>
      <Stack p={4} alignItems="center" justifyContent="center" marginBottom='266px'>
      {opcionSelecc === 'efectivo' &&
          <Stack>
          <Text>INDIQUE CON CUANTO VA A ABONAR</Text>
          <Input placeholder={formData.cantidadEfectivo || "$ Monto a abonar"} onChange={(e) =>
          setFormData({ ...formData, cantidadEfectivo: e.target.value })} variant='filled' htmlsize={5} ></Input>
          </Stack>}
      </Stack>
      <Stack p={4} alignItems="center" justifyContent="center">
      {opcionSelecc === 'tarjeta' &&
        <Stack  my='5' textAlign='left' boxShadow='dark-lg' borderWidth={1} borderRadius='lg' p={7} widht='full'>
          <Stack isInline>
            <Text>N° Tarjeta </Text> <Input size='sm' placeholder={formData.numeroTarjeta || "0000-0000-0000-0000"} 
            onChange={(e) => setFormData({ ...formData, numeroTarjeta: e.target.value })} type="text" /><br /><br /><br />
          </Stack>
          <Stack isInline >
              <Text>Caducidad: </Text><Input size='sm' placeholder={formData.fechaVen || "MM/AA"} onChange={(e) =>
          setFormData({ ...formData, fechaVen: e.target.value })} type="text" /> <br /><br /><br />
          </Stack>
          <Stack>
              <Text>CÓD SEGURIDAD</Text> <Input placeholder={formData.codSeg || "000"} onChange={(e) =>
          setFormData({ ...formData, codSeg: e.target.value })} type="number" /><br />
          </Stack>
         
        </Stack>}
      </Stack>
      </div>

    </Box>

  )
}

export default Pago