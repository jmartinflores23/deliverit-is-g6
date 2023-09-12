import React from 'react'
import { ProgressBar, Step, } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "./BarraDeProgreso.css";
import { MdShoppingCart, MdHouse, MdAttachMoney, MdAccessTime, MdOutlineEditNote } from "react-icons/md";
import { Icon } from '@chakra-ui/react';
import { color } from 'framer-motion';



function BarraDeProgreso({ page, titulos }) {
  return (
    <ProgressBar
      percent={page * 25}
      filledBackground="linear-gradient(to right, #A3BAC3, #007090)"
    >
      <Step transition="scale" >
        {({ accomplished, page, titulos }) => (
          <div className={`step ${accomplished ? "completed" : ""}`}>
            <Icon as={MdShoppingCart} boxSize={12}/>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, page, titulos }) => (
          <div className={`step ${accomplished ? "completed" : ""}`}>
             <Icon as={MdHouse} boxSize={12}/>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, page, titulos }) => (
          <div className={`step ${accomplished ? "completed" : ""}`}>
             <Icon as={MdAttachMoney} boxSize={12}/>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, page, titulos }) => (
          <div className={`step ${accomplished ? "completed" : ""}`}>
             <Icon as={MdAccessTime} boxSize={12}/>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, page, titulos }) => (
          <div className={`step ${accomplished ? "completed" : ""}`}>
             <Icon as={MdOutlineEditNote} boxSize={12}/>
          </div>
        )}
      </Step>
    </ProgressBar>
  )
}

export default BarraDeProgreso