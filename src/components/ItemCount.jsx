import {
  Button,
  ButtonGroup,
  Card,
  Col,
  ListGroup,
  Row,
} from "react-bootstrap";
import "./ItemCount.css";

function ItemCount({ stock, qty, setQty, onAdd }) {
  const initial = 1;
  const restar = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const sumar = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };

  return (
    <Card>
      <Card.Body>
        <ListGroup>
          <Row>
            <Col style={{ textAlign: "left" }}>
              <>
                {qty > initial ? (
                  <Button variant="outline-primary" size="sm" onClick={restar}>
                    -
                  </Button>
                ) : (
                  <Button variant="primary" size="sm" disabled>
                    -
                  </Button>
                )}
              </>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <Card.Text>
                <h4>{qty}</h4>
              </Card.Text>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <>
                {qty < stock ? (
                  <Button variant="outline-primary" size="sm" onClick={sumar}>
                    +
                  </Button>
                ) : (
                  <Button variant="primary" size="sm" disabled>
                    +
                  </Button>
                )}
              </>
            </Col>
          </Row>
          <Row>
            <ButtonGroup>
              <>
                {stock >= initial ? (
                  <Button
                    variant="primary"
                    onClick={() => {
                      onAdd();
                    }}
                  >
                    Agregar items al carrito
                  </Button>
                ) : (
                  <Button variant="primary" disabled>
                    Sin suficiente stock
                  </Button>
                )}
              </>
            </ButtonGroup>
          </Row>
        </ListGroup>
        <ListGroup>
          <Card.Text className="text-muted" style={{ textAlign: "center" }}>
            Stock: {stock}
          </Card.Text>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default ItemCount;
