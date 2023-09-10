import { Button, Heading, Stack, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Direccion from './Direccion';
import Hora from './Hora';
import Pago from './Pago';
import Progreso from './Progreso';
import ResumenDeTransaccion from './ResumenDeTransaccion';
import Swal from 'sweetalert2';

function Formulario() {

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    calle: "",
    numero: "",
    ciudad: "",
    indicaciones: "",
    formaDePago: "",
    cantidadEfectivo: "",
    numeroTarjeta: "",
    fechaVen: "",
    codSeg: "",
    antesPosible: "",
    fecha: "",
    hora: ""
  });

  const FormTitles = ["Dirección", "Forma de Pago", "Horario", "Resumen"];
  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Direccion formData={formData} setFormData={setFormData} />
      case 1:
        return <Pago formData={formData} setFormData={setFormData} />
      case 2:
        return <Hora formData={formData} setFormData={setFormData} />
      case 3:
        return <ResumenDeTransaccion formData={formData} setPage={setPage} />
    }
  }
  return (
    <div className='form'>
      <Box mx='20' my='7' className='progressbar'>
        <Progreso page={page} titulos={FormTitles} />
      </Box>
      <div className='form-container'>
        <Heading p={5} className='header'>
          <h1>{FormTitles[page]}</h1>
        </Heading>
        <Box className='body'>
            {PageDisplay()}
        </Box>
        <Box mx='10' my='7' className='footer'>
          <Stack my='4' isInline justifyContent='space-between'>
            <Button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage);
              }}
            >Volver</Button>
            <Stack isInline>
              <Button align='end' colorScheme='red'
                onClick={() => {
                  cancelarPedido();
                }}
              >
                Cancelar pedido
              </Button>
              <Button align='end' colorScheme='green'
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    confirmarPedido();
                    console.log(formData)
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Confirmar Pedido" : "Siguiente"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </div>
    </div>
  )
}

const confirmarPedido = () => 
{
    Swal.fire({
        title: '¿Confirmar pedido?',
        text: '¿Estás seguro de que deseas confirmar este pedido?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, confirmar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          // El usuario ha confirmado el pedido, puedes realizar acciones aquí
          Swal.fire('Pedido confirmado', 'El pedido se ha confirmado con éxito.', 'success');
        }
      });
}

const cancelarPedido = () => 
{
  Swal.fire({
    title: '¿Cancelar pedido?',
    text: '¿Estás seguro de que deseas cancelarr este pedido?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, cancelar',
    cancelButtonText: 'No, no cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      // El usuario ha confirmado el pedido, puedes realizar acciones aquí
      Swal.fire('Pedido cancelado', 'El pedido se ha cancelado con éxito.', 'success');
    }
  });


}

export default Formulario


