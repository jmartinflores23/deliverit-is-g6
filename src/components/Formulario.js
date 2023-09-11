import { Button, Heading, Stack, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Direccion from './Direccion';
import Hora from './Hora';
import Pago from './Pago';
import BarraDeProgreso from './BarraDeProgreso';
import ResumenDeTransaccion from './ResumenDeTransaccion';
import Carrito from './Carrito';

function Formulario() {

  const [items, setItems] = useState([
    {
      imagen: 'https://images.deliveryhero.io/image/pedidosya/products/d8cc75fd-7e48-4bb4-a33f-088ba9d40805.jpg?quality=90&width=461&webp=1&dpi=1.5',
      nombre: 'Salmon Poke',
      precio: '$4499',
    },
    {
      imagen: 'https://images.deliveryhero.io/image/pedidosya/products/ed0b03c4-4bc7-4b20-81cf-95b28fc14002.jpg?quality=90&width=461&webp=1&dpi=1.5',
      nombre: 'Katsu Shrimp',
      precio: '$2900',
    },
    {
      imagen: 'https://images.deliveryhero.io/image/pedidosya/products/95211ee6-0d65-434c-9487-3e463be10cb0.jpg?quality=90&width=1680&webp=1&dpi=1.5',
      nombre: 'Veggie Poke',
      precio: '$2499',
    },
    {
      imagen: 'https://images.deliveryhero.io/image/pedidosya/products/a7b109f1-c812-4e82-a4e7-f9282fdca047.jpg?quality=90&width=1680&webp=1&dpi=1.5',
      nombre: 'Coca',
      precio: '$499',
    },
    {
      imagen: 'https://images.deliveryhero.io/image/pedidosya/products/b5ce8d99-0ffc-4206-ae6a-50c4b5ec0444.jpg?quality=90&width=1680&webp=1&dpi=1.5',
      nombre: 'Agua Mineral',
      precio: '$609',
    },
  ]);
  const FormTitles = ["Carrito", "Dirección", "Forma de Pago", "Horario", "Resumen"];
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
    hora: "",
  });

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Carrito items={items} setItems={setItems}></Carrito>
      case 1:
        return <Direccion formData={formData} setFormData={setFormData} />
      case 2:
        return <Pago formData={formData} setFormData={setFormData} />
      case 3:
        return <Hora formData={formData} setFormData={setFormData} />
      case 4:
        return <ResumenDeTransaccion formData={formData} setPage={setPage} />
    }
  }
  return (
    <div className='form'>
      <Box mx='20' my='7' className='progressbar'>
        <BarraDeProgreso page={page} titulos={FormTitles} />
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
                setPage((currPage) => currPage - 1);
              }}
            >Volver</Button>
            <Stack isInline>
              <Button align='end' colorScheme='red'
                onClick={() => {
                  alert("Pedido Cancelado");
                }}
              >
                Cancelar pedido
              </Button>
              <Button align='end' colorScheme='green'
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
          </Stack>
        </Box>
      </div>
    </div>
  )
}

export default Formulario


