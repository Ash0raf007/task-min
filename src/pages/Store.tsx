import { Col, Row } from "react-bootstrap";
import dataItems from "../data/data.json";
import Items from "../components/Items";

type AllItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {dataItems.map((allItem: AllItem) => (
          <Col key={allItem.id}>
            <Items allItem={allItem} /> 
          </Col>
        ))}
      </Row>
    </>
  );
}
