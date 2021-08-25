import { Col, Container, Row } from "react-bootstrap";
import Searchbar from "./Components/Searchbar";
import Table from "./Components/ResultTable";
import { useState } from "react";

function App() {

  const [table, setTable] = useState([])
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg="6" >
          <Searchbar setTable={setTable} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col lg="6">
          <Table tbl={table} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
