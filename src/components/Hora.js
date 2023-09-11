import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import { MdCalendarMonth } from "react-icons/md";
import 'react-datepicker/dist/react-datepicker.css';
import { Flex, Box, Text, Icon, Stack, Radio, RadioGroup, Center, Divider, HStack } from '@chakra-ui/react'

function Hora({ formData, setFormData }) {
  return (
    <Flex width='full' align='left' justifyContent='center'>
      <Box textAlign='center' w='75%' >
        <Opciones formData={formData} setFormData={setFormData} />
      </Box>
    </Flex>
  )
}

const Opciones = ({ formData, setFormData }) => {
  const [value, setValue] = React.useState(formData.antesPosible === 'SI' ? '1' : formData.antesPosible === 'NO' ? '2' : '')

  const ComponenteSeleccionado = value === '1' ? <LoAntesPosible /> : value === '2' ? <SeleccionarFechaYHora formData={formData} setFormData={setFormData} /> : '';

  return (
    <Box my='5' textAlign='left' boxShadow='dark-lg' borderWidth={1} borderRadius='lg' p={7} width='full'>
      <Text>SELECCIONAR FORMA DE ENVIO:</Text>
      <Center height='50px'>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction='row'>
            <Radio value='1' onChange={(e) => setFormData({ ...formData, antesPosible: "SI" })}>Lo antes posible</Radio>

            <Divider orientation="vertical" h="50px" borderColor="gray.300" />

            <Radio value='2' onChange={(e) => setFormData({ ...formData, antesPosible: "NO" })}>Seleccionar fecha y hora</Radio>
            =          </Stack>
        </RadioGroup>
      </Center>

      {ComponenteSeleccionado}

    </Box>
  );
}

const SeleccionarFechaYHora = ({ formData, setFormData }) => {
  const [selectedDate, setSelectedDate] = useState(formData.fecha);

  const handleDateChange = (date) => {
    setFormData({ ...formData, fecha: date })
    setSelectedDate(date);
  };

  return (
    <Box align='center'>
      <HStack borderWidth={4} borderColor='black' w='22%'>
        <Icon as={MdCalendarMonth} color='black.500' />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Hora"
          dateFormat="yyyy-MM-dd HH:mm"
          className="date-time-picker"
        />
      </HStack>
    </Box>
  );

}


const LoAntesPosible = ({ formData, setFormData }) => {
  return (<Text> Su pedido llegara en aproximadamente 20 mins. </Text>);

}


export default Hora