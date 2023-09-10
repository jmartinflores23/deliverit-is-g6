import React,{useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Flex,Box,Text,Stack,Radio,RadioGroup,Center} from '@chakra-ui/react'

function Hora({formData, setFormData}) {
  return (
    <Flex width='full' align='left' justifyContent='center'>
      <Box textAlign='center' w= '75%' >
        <Opciones formData={formData} setFormData={setFormData}/>
      </Box>
  </Flex>
  )
}

const Opciones = ({formData, setFormData}) => 
{
  const [value, setValue] = React.useState("Lo antes posible");
  const handleValueChanged = (newValue) => {setValue(newValue);};

  const ComponenteSeleccionado = value === "Lo antes posible" ? <LoAntesPosible/> : <SeleccionarFechaYHora/>;

  return (
    <Center>
      <Box my='5' textAlign='left' boxShadow='dark-lg' borderWidth={1} borderRadius='lg' p={7} width='full'>
        <Text>SELECCIONAR FORMA DE ENVIO:</Text>
        <RadioGroup onChange={handleValueChanged} value={value}>
          <Stack spacing={8} direction='row'>
              <Box>
                <Stack>
                  <Radio value = "Lo antes posible"> Lo antes posible</Radio>
                </Stack>
              </Box>
              <Box>
                <Stack>
                  <Radio value = "Seleccionar fecha y hora"> Seleccionar fecha y hora</Radio>
                </Stack>
              </Box>
          </Stack>
        </RadioGroup>
        <Box>
          {ComponenteSeleccionado}
        </Box>
      </Box>
    </Center>
  );
}

const SeleccionarFechaYHora = ({formData, setFormData}) => 
{
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour,setSelectedHour] = useState(null);

  const handleDateChange = (date) => {setSelectedDate(date);};
  const handleHourChange = (hour) => {setSelectedHour(hour);};
  
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


const LoAntesPosible = ({formData, setFormData}) => 
{
  return (
      <Text> Su pedido llegara en aproximadamente 20 mins. </Text>
  );
}


export default Hora