import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./pages.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  Type: yup.string().required(),
  Name: yup.string().required(),
  Breed: yup.string().required(),
  Bio: yup.string().required(),
  Dietary: yup.string().required(),
  Height: yup.number().required("No password provided.").positive(),
  Weight: yup.number().positive().integer().label("Phone Number"),
  Color: yup.string().required(),
  Adoption: yup.string(),
  Hypoallergenic: yup.boolean(),
});

function Admin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    history.push("/petPage");
  };

  return (
    <div className="page-rapper">
      <h1 className="admin-header">Welcome Admin</h1>
      <div className="form-container">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Type</Form.Label>{" "}
              <Form.Select
                // id="Type"
                {...register("Type")}
                defaultValue="Choose..."
              >
                <option>Dog</option>
                <option>Cat</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control {...register("Name")} type="text" />
              <span style={{ color: "red" }}>{errors.Name?.message}</span>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Breed of animal</Form.Label>
              <Form.Control {...register("Breed")} type="text" />
              <span style={{ color: "red" }}>{errors.Breed?.message}</span>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Bio</Form.Label>
              <Form.Control {...register("Bio")} type="text" />
              <span style={{ color: "red" }}>{errors.Bio?.message}</span>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Dietary restrictions</Form.Label>
              <Form.Control {...register("Dietary")} type="text" />
              <span style={{ color: "red" }}>{errors.Dietary?.message}</span>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Height</Form.Label>
              <Form.Control {...register("Height")} type="number" />
              <span style={{ color: "red" }}>
                {errors.Weight && "Height is required field"}
              </span>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Weight</Form.Label>
              <Form.Control {...register("Weight")} type="number" />
              <span style={{ color: "red" }}>
                {errors.Weight && "Wight is required field"}
              </span>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Color</Form.Label>
              <Form.Control {...register("Color")} type="text" />
              <span style={{ color: "red" }}>{errors.Color?.message}</span>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Adoption Status</Form.Label>
              <Form.Select {...register("Adoption")} defaultValue="Choose...">
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
            <Form.Check
              {...register("Hypoallergenic")}
              type="checkbox"
              label="Hypoallergenic?"
              isValid
            />
          </Form.Group>

          <Button
            onClick={handleSubmit(onSubmit)}
            variant="success"
            type="submit"
          >
            Add Pet
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Admin;
