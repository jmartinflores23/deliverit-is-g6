import React from 'react'
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "./BarraDeProgreso.css";

function BarraDeProgreso({ page, titulos }) {


  return (
    <ProgressBar
      percent={page * 25}
      filledBackground="linear-gradient(to right, #e381c9, #e31bae)"
    >
      <Step transition="scale">
        {({ accomplished, page, titulos }) => (
          <div className={`step ${accomplished ? "completed" : ""}`}>
            Carrito
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, page, titulos }) => (
          <div className={`step ${accomplished ? "completed" : ""}`}>
            Direccion
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, page, titulos }) => (
          <div className={`step ${accomplished ? "completed" : ""}`}>
            Forma de Pago
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, page, titulos }) => (
          <div className={`step ${accomplished ? "completed" : ""}`}>
            Horario
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, page, titulos }) => (
          <div className={`step ${accomplished ? "completed" : ""}`}>
            Resumen
          </div>
        )}
      </Step>
    </ProgressBar>
  )
}

export default BarraDeProgreso