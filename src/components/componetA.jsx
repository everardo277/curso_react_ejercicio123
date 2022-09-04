import React from 'react'
import {Contacto} from '../modelo/contacto'
import ComponetB from './componetB'

function componetA() {
    const parametros = new Contacto('Robert', 'White', 'gratis@gratis.com', true);
  return (
    <div>
        <h2>Datos de contacto</h2>
        <ComponetB props={parametros} />
        
    </div>
  )
}


export default componetA
