import React, { useState } from 'react';
import {Input} from '@chakra-ui/react';
import InputMask from "react-input-mask";


function ExpiryDateInput({ formFecha, setFormFecha }) {
  //const [expiryDate, setExpiryDate] = useState(formFecha.expiryDate || '');
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Obtiene los últimos 2 dígitos del año actual
  const currentMonth = currentDate.getMonth() + 1; // Los meses en JavaScript son de 0 a 11

  const handleExpiryDateChange = (e) => {
    const inputDate = e.target.value;
    if (isValidExpiryDate(inputDate)) {
      //setExpiryDate(inputDate);
    }
    setFormFecha({ ...formFecha, expiryDate: inputDate });
  };

  const isValidExpiryDate = (dateString) => {
    // Verifica si la cadena tiene el formato correcto (MM/YY)
    const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!dateRegex.test(dateString)) {
      return false;
    }

    const [inputMonth, inputYear] = dateString.split('/').map(Number);

    // Verifica si el mes es válido (entre 1 y 12)
    if (inputMonth < 1 || inputMonth > 12) {
      return false;
    }

    // Verifica si el año es válido (posterior al año actual)
    if (inputYear < currentYear || (inputYear === currentYear && inputMonth < currentMonth)) {
      return false;
    }

    return true;
  };

  return (
    <div>
      <Input
        type='text'
        value={formFecha.fechaVen || ''}
        size='sm' 
        placeholder={formFecha.fechaVen || " MM/AA"} onChange={(e) =>
         handleExpiryDateChange && setFormFecha({ ...formFecha, fechaVen: e.target.value })}
        as={InputMask} maskChar={null} mask="99/99"
         />
      {!isValidExpiryDate(formFecha.fechaVen) && (
        <div style={{ color: 'red' }}>Ingrese una fecha válida y posterior a la actual.</div>
      )}
    </div>
  );
}

export default ExpiryDateInput;
