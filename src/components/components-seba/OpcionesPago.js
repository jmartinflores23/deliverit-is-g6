import React, {useState} from 'react'
import AgregarTarjeta from './AgregarTarjeta'
import AgregarEfectivo from './AgregarEfectivo';
import '../../App.css'

const OpcionesPago = () => {
    const [opcionSelecc, setOpcionSelecc] = useState('efectivo');

    const cambioOpcion = (event) => {
        setOpcionSelecc(event.target.value);
    }
  return (
    <div class="separados">
      <div class="box">
        <label> 
          <input type="radio"value="efectivo" checked={opcionSelecc === 'efectivo'} onChange={cambioOpcion} /> Efectivo
        </label>
      </div>
      <div class="box">
        <label> 
          <input type="radio"value="tarjeta" checked={opcionSelecc === 'tarjeta'} onChange={cambioOpcion} /> Tarjeta
        </label>
      </div>
        
        {opcionSelecc === 'efectivo' && <AgregarEfectivo/>}
        {opcionSelecc === 'tarjeta' && <AgregarTarjeta/>}
    </div>
  )
}

export default OpcionesPago