import React from 'react'
import './ItemListContainer.css'
import {Container, Row, Col} from 'react-bootstrap'

function ItemListContainer() {
    let greetings = 'Buenos saludos'

    return (
        <Container className='saludos mh-100'>
            <Row>
                <Col>
                    <h3 className='saludo'>{greetings}</h3>
                </Col>
            </Row>

        </Container>
    )
}

export default ItemListContainer