import React, { useState, useEffect } from 'react'
import InputMask from "react-input-mask";
import { Stack, HStack, Box, Heading, Flex, Text, Input, Radio, RadioGroup } from '@chakra-ui/react';
import ExpiryDateInput from './ExpiryDateInput';

function Pago({ formData, setFormData }) {
  const [opcionSelecc, setOpcionSelecc] = useState('efectivo');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');

  const verificarTarjeta = (numeroTarjeta) => {
    const esValido = esNumeroDeTarjetaValido(numeroTarjeta);
    const tipoDeTarjeta = determinarTipoDeTarjeta(numeroTarjeta);

    if (esValido) {
      console.log(`La tarjeta es válida y es de tipo: ${tipoDeTarjeta}`);
      //setTipoTarjeta(tipoDeTarjeta);
    } else {
      //setTipoTarjeta('');
    }
  
  };

  const handleChange = (e) => {
    const nuevoNumeroTarjeta = e.target.value;
    setNumeroTarjeta(nuevoNumeroTarjeta);
    verificarTarjeta(nuevoNumeroTarjeta);
  };

  const cambioOpcion = (event) => {
    const nuevaFormaPago = event.target.value;
    setOpcionSelecc(nuevaFormaPago);
    // Actualiza formData con la nueva formaDePago
    setFormData({ ...formData, formaDePago: nuevaFormaPago});
    console.log(formData);
  };


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
        <Stack p={4} alignItems="center" justifyContent="center" marginBottom='234px'>
          {formData.formaDePago === 'efectivo' &&
            <Stack>
              <Text>INDIQUE CON CUANTO VA A ABONAR</Text>
              <Input type='number' placeholder={formData.cantidadEfectivo || "$ Monto a abonar"} onChange={(e) =>
              handleChange && setFormData({ ...formData, cantidadEfectivo: e.target.value, formaDePago: 'efectivo', numeroTarjeta: '', fechaVen: '', codSeg: '' })} variant='filled' htmlsize={5} ></Input>
            </Stack>}
        </Stack>
        <Stack p={4} alignItems="center">
          {formData.formaDePago === 'tarjeta' &&
            <Stack my='5' textAlign='left' boxShadow='dark-lg' borderWidth={1} borderRadius='lg' p={7}>
              <Stack isInline>
                <Text>N° Tarjeta </Text> <Input size='sm' placeholder={formData.numeroTarjeta || "0000-0000-0000-0000"}
                  onChange={(e) => setFormData({ ...formData, numeroTarjeta: e.target.value, formaDePago: 'tarjeta', cantidadEfectivo: '' })} type="text" as={InputMask} maskChar={null} mask="9999-9999-9999-9999" /><br /><br /><br />
              </Stack>
              <Stack isInline>
                <Text>Caducidad: </Text>
                <ExpiryDateInput formFecha={formData} setFormFecha={setFormData}/>
                  {/*size='sm' placeholder={formData.fechaVen || "MM/AA"} onChange={(e) =>
                  setFormData({ ...formData, fechaVen: e.target.value })} type="text" />*/}
              </Stack>
              <HStack>
                <Text>CÓD SEGURIDAD</Text> <Input placeholder={formData.codSeg || "000"} onChange={(e) =>
                  setFormData({ ...formData, codSeg: e.target.value })} type="number" /><br />
              </HStack>

            </Stack>}
        </Stack>
      </div>

    </Box>

  )
  function esNumeroDeTarjetaValido(numeroTarjeta) {
    let sum = 0;
    let doubleUp = false;
  
    for (let i = numeroTarjeta.length - 1; i >= 0; i--) {
      let curDigit = parseInt(numeroTarjeta.charAt(i));
  
      if (doubleUp) {
        curDigit *= 2;
        if (curDigit > 9) {
          curDigit -= 9;
        }
      }
  
      sum += curDigit;
      doubleUp = !doubleUp;
    }
  
    return sum % 10 === 0;
  }
  function determinarTipoDeTarjeta(numeroTarjeta) {
    const firstDigit = parseInt(numeroTarjeta.charAt(0));
  
    if (firstDigit === 4) {
      return 'Visa';
    } else if (firstDigit >= 51 && firstDigit <= 55) {
      return 'Mastercard';
    } else {
      return 'Desconocido';
    }
  }
  

}

export default Pago