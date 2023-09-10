import React from 'react'
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "./ProgressBar.css";

function Progreso({page, titulos}) {

  const FormTitles = ["Direccion", "Forma de Pago", "Horario", "Resumen" ];

  return (
    <ProgressBar
        percent={page * 33.34}
        filledBackground="linear-gradient(to right, #e381c9, #e31bae)"
      >
        <Step transition="scale">
          {({ accomplished, page, titulos }) => (
           <div className={`step ${accomplished ? "completed": ""}`}>
            Direccion
           </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, page, titulos }) => (
            <div className={`step ${accomplished ? "completed": ""}`}>
             Forma de Pago
           </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, page, titulos }) => (
           <div className={`step ${accomplished ? "completed": ""}`}>
            Horario
           </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, page, titulos }) => (
           <div className={`step ${accomplished ? "completed": ""}`}>
            Resumen
           </div>
          )}
        </Step>
      </ProgressBar>
  )
}

export default Progreso