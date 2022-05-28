import React from 'react'
import './ItemListMostrar.css'

function ItemListMostrar({greetings}) {
  return (
    <div className='saludo'>
        <p>
            {'Hola, este es un saludo, '+ greetings}
        </p>
    </div>
  )
}

export default ItemListMostrar