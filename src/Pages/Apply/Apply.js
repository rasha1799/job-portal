import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import ApplyForm from "./ApplyForm/ApplyForm";

const Apply = () => {
  const { _id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/job/${_id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>{details.job_title}</h1>
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={details?.img} />
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Text>
                  <b style={{ textAlign: "left" }}>
                    {" "}
                    Description : {details?.job_description}
                  </b>
                  <h3 style={{ textAlign: "left" }}>
                    Vaccancy:{details.vaccancy}
                  </h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div style={{ marginBottom: "50px" }}>
        <ApplyForm job={details}></ApplyForm>
      </div>
    </div>
  );
};

export default Apply;
