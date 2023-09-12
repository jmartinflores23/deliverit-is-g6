import React, { useState, useEffect } from 'react'
import { Stack, HStack, Box, Heading, Flex, Text, Input, InputLeftElement, InputRightElement, InputGroup } from '@chakra-ui/react';
import ExpiryDateInput from './ExpiryDateInput';
import InputMask from "react-input-mask";
import { CalendarIcon, UnlockIcon } from '@chakra-ui/icons';
import { FaCcVisa} from 'react-icons/fa'


function Pago({ formData, setFormData,}) {
  const [opcionSelecc, setOpcionSelecc] = useState('efectivo');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');


  const determinarTipoDeTarjeta = (numeroTarjeta) => {
    const firstDigit = parseInt(numeroTarjeta.charAt(0));
  
    if (firstDigit === 4) {
      return <FaCcVisa size='3em'/>;
    } else if (firstDigit === 5) {
      return <Text color='red'>Sólo aceptamos tarjeta Visa</Text>;
    } else{
      return <Text color='red'>Sólo aceptamos tarjeta Visa</Text>
    }
  }

  const cambioOpcion = (event) => {
    const nuevaFormaPago = event.target.value;
    setOpcionSelecc(nuevaFormaPago);
    // Actualiza formData con la nueva formaDePago
    setFormData({ ...formData, formaDePago: nuevaFormaPago});
  };

  return (
    <Box textAlign='center' >
      <Stack justifyContent='center'>
        <Flex direction='column'>
          <label>
            <input type="radio" value="efectivo" checked={formData.formaDePago === 'efectivo'} onChange={cambioOpcion} /> Efectivo
          </label>
        </Flex>
        <Flex direction='column' >
          <label>
            <input type="radio" value="tarjeta" checked={formData.formaDePago === 'tarjeta'} onChange={cambioOpcion} /> Tarjeta
          </label>
        </Flex>
      </Stack>
        <Stack p={4} alignItems="center" justifyContent="center" >
          {formData.formaDePago === 'efectivo' &&
            <Stack boxShadow='dark-lg' borderWidth={1} borderRadius='lg' p='7'>
              <Text>Con cuanto va abonar?</Text>
              <InputGroup>
              <InputLeftElement pointerEvents='none' color='gray.500' fontSize='1.2em' children='$'/>
                <Input type='number' placeholder={formData.cantidadEfectivo || "Monto a abonar"} onChange={(e) =>
                setFormData({ ...formData, cantidadEfectivo: e.target.value, formaDePago: 'efectivo', nombreTitular: '', numeroTarjeta: '', fechaVen: '', codSeg: '' })} variant='filled' htmlsize={5} ></Input>
              </InputGroup>
            </Stack>}
          {formData.formaDePago === 'tarjeta' &&
            <Stack my='5' textAlign='left' boxShadow='dark-lg' borderWidth={1} borderRadius='lg' p={7}>
              <Text textAlign='center'>Ingrese los datos de la Tarjeta</Text>
              <HStack>
                <Text> Nombre y Apellido</Text> 
                <Input size='sm' type='text' placeholder={formData.nombreTitular || "Ingrese nombre del titular"}
                  onChange={(e) => {
                  setFormData({...formData, nombreTitular: e.target.value })
                  }} 
                  />
              </HStack>
              <HStack>
                <Text>N° Tarjeta </Text> 
                <Input size='sm' type='tel' pattern='[0-9]{13,19}' placeholder={formData.numeroTarjeta || "0000-0000-0000-0000"}
                  onChange={(e) => {
                  const nuevoNumeroTarjeta = e.target.value;
                  setFormData({ ...formData, numeroTarjeta: e.target.value, formaDePago: 'tarjeta', cantidadEfectivo: '' })
                  determinarTipoDeTarjeta(nuevoNumeroTarjeta);}} 
                  as={InputMask} mask='9999-9999-9999-9999' maskChar={null}/>
                <Text>{determinarTipoDeTarjeta(formData.numeroTarjeta)}</Text>
              </HStack>
              <HStack>
                <Text>Caducidad: </Text>
                <InputGroup>
                <InputRightElement fontSize='1.2em'>
                    <CalendarIcon color='gray.600'/>
                </InputRightElement>
                    <ExpiryDateInput formFecha={formData} setFormFecha={setFormData}/>
                </InputGroup>
              </HStack>
              <HStack>
                <Text>CVC:</Text>
                <InputGroup>
                <InputLeftElement fontSize='1.2em'>
                    <UnlockIcon color='gray.600'/>
                </InputLeftElement> 
                <Input placeholder={formData.codSeg || "000"} onChange={(e) =>
                  setFormData({ ...formData, codSeg: e.target.value })} type="text"
                  as={InputMask} mask='999' maskChar={null} />
                </InputGroup>
              </HStack>

            </Stack>}
        </Stack>
    </Box>

  )
}

export default Pago