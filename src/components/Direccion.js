import React from 'react'

function Direccion({formData, setFormData}) {
  return (
    <div className='container'>
          <label htmlFor='calle'>Calle</label>
          <input type='text' value={formData.calle} onChange={(e) =>
            setFormData({...formData, calle: e.target.value })} />
        
        
        
          <label htmlFor='numero'>Numero</label>
          <input type='number'value={formData.numero} onChange={(e) =>
            setFormData({...formData, numero: e.target.value })} />
        

          <label htmlFor='ciudad'>Ciudad</label>
          <select  value={formData.ciudad} onChange={(e) =>
            setFormData({...formData, ciudad: e.target.value })} >
              <option value="cba">Cordoba</option>
              <option value="jm">Jesus Maria</option>
              <option value="vm">Villa Maria</option>
              <option value="r4">Rio Cuarto</option>
              <option value="cde">Cruz del Eje</option>
          </select>
          <label htmlFor='indicaciones' >Indicaciones para la entrega</label>
          <textarea typeof='text' value={formData.indicaciones} onChange={(e) =>
            setFormData({...formData, indicaciones: e.target.value })} />
    </div>
  )
}

export default Direccion