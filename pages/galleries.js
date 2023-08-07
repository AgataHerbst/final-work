import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import { goods } from '../data/goods';
import Heading from "../components/Heading";
import s from '../styles/Galleries.module.css';


function Galleries() {
  return <>
    <main className={s.main}>
      <div className={s.galleriesHead}>
        <Heading text="Мои работы:" />
      </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {goods.map(good => (
          <Col key={good.id}>
            <StoreItem {...good} />
          </Col>
        ))}
      </Row>
    </main>
  </>
}


export default Galleries;
