import React from 'react'
import PropTypes from 'prop-types'
import {Contacto} from '../modelo/contacto'

const ComponetB =({props}) => {
  return (
    <div>
      <h2>Nombre : {props.nombre}</h2>
      <h2>Apellido : {props.apellido}</h2>
      <h2>Email : {props.email}</h2>
      <h2>Conectado : {props.conectado ? 'Contacto en línea' : 'Contacto no disponible'}</h2>
    </div>
  )
}

ComponetB.propTypes = {
    props: PropTypes.instanceOf(Contacto)
}

export default ComponetB
