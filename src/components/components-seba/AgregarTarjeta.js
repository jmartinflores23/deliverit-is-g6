import React from 'react'

const AgregarTarjeta = () => {
  return (
    
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
        
    </div>
  )
}

export default AgregarTarjeta