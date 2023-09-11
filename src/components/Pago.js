import React, { useState, useEffect } from 'react'
import { Stack, Box, Heading, Flex, Text, Input, Radio, RadioGroup } from '@chakra-ui/react';

function Pago({ formData, setFormData }) {
  const [opcionSelecc, setOpcionSelecc] = useState('');


  const cambioOpcion = (event) => {
    const nuevaFormaPago = event.target.value;
    setOpcionSelecc(nuevaFormaPago);
    // Actualiza formData con la nueva formaDePago
    setFormData({ ...formData, formaDePago: nuevaFormaPago });
  };



  // Restablecer los campos de tarjeta cuando cambia la opción de pago

  return (

    <Box textAlign='center' >
      <Stack isInline justifyContent='center'>
        <Flex direction='column' mr={300}>
          <label>
            <input type="radio" value="efectivo" checked={formData.formaDePago === 'efectivo'} onChange={cambioOpcion} /> Efectivo
          </label>
        </Flex>
        <Flex direction='column' ml={300}>
          <label>
            <input type="radio" value="tarjeta" checked={formData.formaDePago === 'tarjeta'} onChange={cambioOpcion} /> Tarjeta
          </label>
        </Flex>
      </Stack>

      <div style={{ display: "grid", gridTemplateColumns: "40% 60%" }}>
        <Stack p={4} alignItems="center" justifyContent="center" marginBottom='266px'>
          {formData.formaDePago === 'efectivo' &&
            <Stack>
              <Text>INDIQUE CON CUANTO VA A ABONAR</Text>
              <Input placeholder={formData.cantidadEfectivo || "$ Monto a abonar"} onChange={(e) =>
                setFormData({ ...formData, cantidadEfectivo: e.target.value, formaDePago: 'efectivo', numeroTarjeta: '', fechaVen: '', codSeg: '' })} variant='filled' htmlsize={5} ></Input>
            </Stack>}
        </Stack>
        <Stack p={4} alignItems="center" justifyContent="center">
          {formData.formaDePago === 'tarjeta' &&
            <Stack my='5' textAlign='left' boxShadow='dark-lg' borderWidth={1} borderRadius='lg' p={7} widht='full'>
              <Stack isInline>
                <Text>N° Tarjeta </Text> <Input size='sm' placeholder={formData.numeroTarjeta || "0000-0000-0000-0000"}
                  onChange={(e) => setFormData({ ...formData, numeroTarjeta: e.target.value, formaDePago: 'tarjeta', cantidadEfectivo: '' })} type="text" /><br /><br /><br />
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