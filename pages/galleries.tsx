import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import { goods } from '../data/goods';


function test() {
  return <>
    <h1>Мои работы:</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
      {goods.map(good => (
        <Col key={good.id}>
          <StoreItem {...good} />
        </Col>
      ))}
    </Row>
  </>
}

export default test
