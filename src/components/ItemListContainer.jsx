import React from 'react'
import './ItemListContainer.css'
import {Container, Row, Col} from 'react-bootstrap'
import ItemListMostrar from './ItemListMostrar'

function ItemListContainer( {greetings} ) {

    return (
        <Container className='saludos'>
            <Row>
                <Col>
                   <ItemListMostrar greetings={greetings}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemListContainer