import React, { useState}  from 'react'
import Direccion  from './Direccion';
import Pago  from './Pago';
import Hora from './Hora';
import Resumen from './Resumen';
import Progreso from './Progreso';




function Formulario() {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState ({
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

    const FormTitles = ["Direccion", "Forma de Pago", "Horario", "Resumen" ];
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
      <div className='progressbar'>
        <Progreso page={page} titulos ={FormTitles}/>
      </div>
      <div className='form-container'>
        <div className='header'>
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className='body'>{PageDisplay()}</div>
        <div className='footer'>
          <button
            disabled = {page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >Volver</button>
          <button 
            onClick={() => {
               if(page === FormTitles.length -1){
                alert("Pedido Confirmado");
                console.log(formData)
               } else {
              setPage((currPage) => currPage + 1);}
            }}
            >
              {page === FormTitles.length -1 ?  "Confirmar Pedido" : "Siguiente"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Formulario


