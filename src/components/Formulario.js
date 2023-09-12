import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import BarraDeProgreso from './BarraDeProgreso';
import Carrito from './Carrito';
import Direccion from './Direccion';
import Hora from './Hora';
import Pago from './Pago';
import ResumenDeTransaccion from './ResumenDeTransaccion';

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
      imagen: 'https://www.pizziosa.com/wp-content/uploads/2021/01/Lata-Coca-Cola.png',
      nombre: 'Coca Cola',
      precio: '$499',
    },
    {
      imagen: 'https://img.interempresas.net/fotos/2159536.jpeg',
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
    nombreTitular: "",
    numeroTarjeta: "",
    fechaVen: "",
    codSeg: "",
    antesPosible: "",
    fecha: "",
    total: "",
  });
  function noAvanzar(page) {
    switch (page) {
      case 0:
        return items.length === 0;
      case 1:
        return (formData.calle === "" || formData.numero === "" || formData.ciudad === "");
      case 2:
        return (formData.formaDePago === 'efectivo' && formData.cantidadEfectivo === '') ||
          (formData.formaDePago === 'tarjeta' && (formData.numeroTarjeta.length != 19 || parseInt(formData.numeroTarjeta.charAt(0)) != 4 || formData.fechaVen === '' || formData.nombreTitular === '' || formData.codSeg.length != 3)) ||
          formData.formaDePago === ''
      case 3:
        return (formData.antesPosible === '' && formData.fecha === '') ||
          (formData.antesPosible === 'NO' && formData.fecha === '');
      default:
        return false
    }
  }

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Carrito formData={formData} setFormData={setFormData} items={items} setItems={setItems}></Carrito>
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
      <Box mx='10%' my='7' className='progressbar'>
        <BarraDeProgreso page={page} titulos={FormTitles} />
      </Box>
      <div className='form-container'>
        <Heading p={5} className='header'>
          <h1>{FormTitles[page]}</h1>
        </Heading>
        <Box className='body'>
          {PageDisplay()}
        </Box>
        <Box mx='10' my='7' p='1' className='footer'>
          <Stack my='4' isInline justifyContent='space-between'>
            <Button size='lg' p='3' colorScheme='blue'
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => page === 0 ? currPage : currPage - 1);
              }}
            >Volver</Button>
            <Stack isInline>
              <Button size='lg' p='3' align='end' colorScheme='blue'
                onClick={() => {
                  cancelarPedido();
                }}
              >
                <Text> Cancelar <br></br>pedido
                </Text>
              </Button>
              <Button size='lg' p='3' align='end' colorScheme='blue'
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    confirmarPedido();
                    console.log(formData)
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
                isDisabled={noAvanzar(page)}

              >
                <div>
                  {page === FormTitles.length - 1 ? (
                    <span dangerouslySetInnerHTML={{ __html: "Confirmar<br />Pedido" }} />
                  ) : (
                    "Siguiente"
                  )}
                </div>

              </Button>
            </Stack>
          </Stack>
        </Box>
      </div>
    </div>
  )
}

const confirmarPedido = () => {
  Swal.fire({
    title: '¿Confirmar pedido?',
    text: '¿Estás seguro de que deseas confirmar este pedido?',
    icon: 'question',
    iconColor: 'pink',
    showCancelButton: true,
    confirmButtonText: 'Sí, confirmar',
    confirmButtonColor: 'green',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      // El usuario ha confirmado el pedido, puedes realizar acciones aquí
      Swal.fire('Pedido confirmado', 'El pedido se ha confirmado con éxito.', 'success');
    }
  });
}

const cancelarPedido = () => {
  Swal.fire({
    title: '¿Cancelar pedido?',
    text: '¿Estás seguro de que deseas cancelarr este pedido?',
    icon: 'question',
    iconColor: 'pink',
    showCancelButton: true,
    confirmButtonText: 'Sí, cancelar',
    confirmButtonColor: 'red',
    cancelButtonText: 'No, no cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      // El usuario ha confirmado el pedido, puedes realizar acciones aquí
      Swal.fire('Pedido cancelado', 'El pedido se ha cancelado con éxito.', 'error');
    }
  });


}

export default Formulario


