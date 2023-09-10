import React, { useState } from 'react'
import Direccion from './Direccion';
import Pago from './Pago';
import Hora from './Hora';
import Resumen from './Resumen';
import Progreso from './Progreso';
import { Select, Stack, Box, Heading, Flex, Text, Input, Button, Textarea, } from '@chakra-ui/react';

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
        return <Resumen formData={formData} setFormData={setFormData} />
    }
  }
  return (
    <div className='form'>
      <span className='progressbar'>
        <Progreso page={page} titulos={FormTitles} />
      </span>
      <div className='form-container'>
        <Heading p={5} className='header'>
          <h1>{FormTitles[page]}</h1>
        </Heading>
        <div className='body'>{PageDisplay()}</div>
        <div className='footer'>
          <Stack my='4' isInline justifyContent='space-between'>
            <Button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >Volver</Button>
            <Button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("Pedido Confirmado");
                  console.log(formData)
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Confirmar Pedido" : "Siguiente"}
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Formulario


