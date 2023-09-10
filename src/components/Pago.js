import React, {useState} from 'react'
import '../App.css'

function Pago({formData, setForm}) {
  const [opcionSelecc, setOpcionSelecc] = useState('efectivo');
  
      const cambioOpcion = (event) => {
          setOpcionSelecc(event.target.value);
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
          
          {opcionSelecc === 'efectivo' && 
          <div class="cajaEfectivo">
            <h3>INDIQUE CON CUANTO VA A ABONAR</h3><br/>
            <input type="text"></input>
          </div>}
          {opcionSelecc === 'tarjeta' && 
          <div class='cajaTarjeta'>
            <div>
              <label>N° Tarjeta </label> <input placeholder="0000-0000-0000-0000" className="form-control mb-3" type="number"/><br/><br/><br/>
            </div>
            <div>
              <label>Caducidad: </label><input placeholder="MM" className="form-control mb-3" type="number"/> <input placeholder="AA" className="form-control mb-3" type="number"/><br/><br/><br/>
            </div>
            <div>
              <label>CÓD SEGURIDAD</label> <input placeholder="000" className="form-control mb-3" type="number"/><br/>
            </div>
          </div>}
      
      </div>
    )
  }
}

export default Pago