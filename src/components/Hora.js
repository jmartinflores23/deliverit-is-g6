import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import { MdCalendarMonth } from "react-icons/md";
import 'react-datepicker/dist/react-datepicker.css';
import { Flex, Box, Text, FormLabel, SimpleGrid, Stack, Radio, RadioGroup, Center, Divider, HStack } from '@chakra-ui/react'

function Hora({ formData, setFormData }) {
  return (
    <Flex justifyContent='center' textAlign='center'  >
      <Opciones formData={formData} setFormData={setFormData} />
    </Flex>
  )
}

const Opciones = ({ formData, setFormData }) => {
  const [value, setValue] = React.useState(formData.antesPosible === 'SI' ? '1' : formData.antesPosible === 'NO' ? '2' : '')

  const ComponenteSeleccionado = value === '1' ? <LoAntesPosible /> : value === '2' ? <SeleccionarFechaYHora formData={formData} setFormData={setFormData} /> : '';

  return (
    <Box my='5' textAlign='left' boxShadow='dark-lg' borderWidth={1} borderRadius='lg' p={5} w='75%'>
      <Text>Seleccionar Forma de Envío:</Text>
      <Center height='50px'>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction='row'>
            <Radio value='1' onChange={(e) => setFormData({ ...formData, antesPosible: "SI" })}>Lo antes posible</Radio>
            <Divider orientation="vertical" h="50px" borderColor="gray.300" />
            <Radio value='2' onChange={(e) => setFormData({ ...formData, antesPosible: "NO" })}>Seleccionar fecha y hora</Radio>
          </Stack>
        </RadioGroup>
      </Center>

      {ComponenteSeleccionado}

    </Box>
  );
}

const SeleccionarFechaYHora = ({ formData, setFormData }) => {
  const fechaActual = new Date();
  const [selectedDate, setSelectedDate] = useState(formData.fecha);
  const [selectedHour, setSelectedHour] = useState(formData.fecha);

  const handleDateChange = (date) => {

    if (date >= fechaActual) 
    {
      setSelectedDate(date);
    }else 
    {
      setSelectedDate(fechaActual);
    }

    if (selectedHour) {
      selectedHour.setTime(date)

      setFormData({ ...formData, fecha: selectedHour })
    }

  };
  const handleHourChange = (hour) => {
    setSelectedHour(hour);
    if (selectedDate) {
      const horas = hour.getHours();
      const minutos = hour.getMinutes();

      selectedDate.setHours(horas);
      selectedDate.setMinutes(minutos);

      setFormData({ ...formData, fecha: selectedDate })
    }

  };

  return (
    <SimpleGrid p='3' minChildWidth='120px' spacing={1}>

      <Box m='1'>
        <FormLabel>Fecha: </FormLabel>
        <Box borderWidth={2} borderRadius='lg' w='190px' p='1'>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Seleccione fecha"
            className="date-time-picker" />
        </Box>

      </Box>


      <Box m='1'>
        <FormLabel>Hora:  </FormLabel>
        <Box borderWidth={2} borderRadius='lg' w='190px' p='1'>
          <DatePicker
            selected={selectedHour}
            onChange={handleHourChange}
            showTimeSelect
            showTimeSelectOnly
            placeholderText="Seleccione hora"
            dateFormat='HH:mm'
            timeIntervals={15}
            timeCaption="Time"
            className="date-time-picker" />
        </Box>

      </Box>
    </SimpleGrid>
  );

}


const LoAntesPosible = ({ formData, setFormData }) => {
  return (<Text> Su pedido llegara en aproximadamente 20 mins. </Text>);

}


export default Hora