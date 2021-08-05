import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Admin.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  Type: yup.string(),
  Name: yup.string(),
  Breed: yup.string(),
  Bio: yup.string(),
  Dietary: yup.string(),
  Height: yup.number(),
  Weight: yup.number(),
  Color: yup.string(),
});

function Admin() {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="page-rapper">
      <h1 className="admin-header">Welcome Admin</h1>
      <div className="form-container">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Breed of animal</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Bio</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Dietary restrictions</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Height</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Weight</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Color</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Adoption Status</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Adopted</option>
                <option>Fostered</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Animal Image</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Hypoallergenic?" />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Admin;
