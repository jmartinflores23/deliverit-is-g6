import React, { useState } from 'react'
import { Select, Stack, Box, Heading, Flex, Text, Input, Textarea, Radio, RadioGroup } from '@chakra-ui/react';

function Pago({ formData, setForm }) {
  const [opcionSelecc, setOpcionSelecc] = useState('efectivo');

  const cambioOpcion = (event) => {
    setOpcionSelecc(event.target.value)
  };
  return (

    <Box textAlign='center' >

      <Stack isInline justifyContent='center'>
        <Flex direction='column' mr={300 }>
          <label>
            <input type="radio" value="efectivo" checked={opcionSelecc === 'efectivo'} onChange={cambioOpcion} /> Efectivo
          </label>
        </Flex>
        <Flex direction='column' ml={300}>
          <label>
            <input type="radio" value="tarjeta" checked={opcionSelecc === 'tarjeta'} onChange={cambioOpcion} /> Tarjeta
          </label>
        </Flex>
      </Stack>

      <div style={{ display: "grid", gridTemplateColumns: "40% 60%" }}>
      <Stack p={4} alignItems="center" justifyContent="center" marginBottom='266px'>
      {opcionSelecc === 'efectivo' &&
          <Stack>
          <Text>INDIQUE CON CUANTO VA A ABONAR</Text>
          <Input variant='filled' htmlsize={5} ></Input>
          </Stack>}
      </Stack>
      <Stack p={4} alignItems="center" justifyContent="center">
      {opcionSelecc === 'tarjeta' &&
        <Stack my='5' textAlign='left' boxShadow='dark-lg' borderWidth={1} borderRadius='lg' p={4}>
          <Stack isInline>
            <Text>N° Tarjeta </Text> <Input size='sm' placeholder="0000-0000-0000-0000" type="number" /><br /><br /><br />
          </Stack>
          <Stack isInline >
              <Text>Caducidad: </Text><Input size='sm' placeholder="MM"  type="number" /> <Input size='sm' htmlsize={4} widht='auto' placeholder="AA" type="number" /><br /><br /><br />
          </Stack>
          <Stack>
              <Text>CÓD SEGURIDAD</Text> <Input placeholder="000" type="number" /><br />
          </Stack>
         
        </Stack>}
      </Stack>
      </div>

    </Box>

  )
}

export default Pago