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
          </Stack>
        </RadioGroup>
      </Center>

      {ComponenteSeleccionado}

    </Box>
  );
}

const SeleccionarFechaYHora = ({ formData, setFormData }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour,setSelectedHour] = useState(null);

  const handleDateChange = (date) => 
  {
    setSelectedDate(date);
  };
  const handleHourChange = (hour) =>
  {
    const horas = new Date(hour).getHours();
    const minutos = new Date(hour).getMinutes();

    selectedDate.setHours(horas);
    selectedDate.setMinutes(minutos);

    formData.fecha = selectedDate;
  };

  return (
    <Box>
      <Stack direction='row'>
        <Text>Fecha: </Text>
        <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="dd MMMM yyyy" className="date-time-picker"/>
      </Stack>

      <Stack direction='row'>
        <Text>Hora: </Text>
        <DatePicker selected={selectedHour} onChange={handleHourChange} showTimeSelect showTimeSelectOnly timeFormat='HH:mm' timeIntervals={15} className="date-time-picker"/>
      </Stack>
    </Box>
  );

}


const LoAntesPosible = ({ formData, setFormData }) => {
  return (<Text> Su pedido llegara en aproximadamente 20 mins. </Text>);

}


export default Hora