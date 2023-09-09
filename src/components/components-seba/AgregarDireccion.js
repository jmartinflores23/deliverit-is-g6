import React from 'react';

export const AgregarDireccion = () => {
  return (
    
    <div class="caja">
      <form action="">
        <h4 text-align="left" >Agregar Dirección</h4>
        <label >Calle:</label> <input placeholder="Nuevo Mundo" className="form-control mb-3" type="text"/>
        <label>Número: </label><input placeholder="664" className="form-control mb-3" type="number"/>
      </form>

        
    </div>
  )
}

export default AgregarDireccion;