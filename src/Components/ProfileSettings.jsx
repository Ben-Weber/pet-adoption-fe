import React, { useEffect, useState } from "react";
import { useCon } from "../Context/AppContext";
import { ButtonBase, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  firstName: yup.string().label("First Name"),
  lastName: yup.string().label("Last Name"),
  email: yup.string().email().label("Email Address"),
  password: yup
    .string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain English letters."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  phoneNumber: yup.number().positive().integer().label("Phone Number"),
});

const TextFieldGreen = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
  },
})(TextField);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ProfileSettings() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { currentUser } = useCon();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    setShow(false);
    setOpenSnackBar(true);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  const { bio, email, firstName, lastName, password, phone } = currentUser;

  return (
    <>
      <Button onClick={handleShow} className="btn btn-secondary my-2 m-4">
        Profile Settings
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div
            className="d-flex flex-row justify-content-around"
            style={{ border: "none", width: "100%" }}
          >
            <Modal.Title className="text-secondary">
              <ButtonBase> Profile Settings </ButtonBase>
            </Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body>
          <form
            className="d-flex flex-column m-1"
            noValidate
            autoComplete="off"
          >
            <TextFieldGreen
              id="email"
              {...register("email")}
              className="m-2"
              label="Email Address"
              type="text"
              color={errors.email && "secondary"}
              defaultValue={email}
            />
            <span style={{ color: "red" }}>{errors.email?.message}</span>
            <TextFieldGreen
              id="firstName"
              {...register("firstName")}
              className="m-2"
              label="First Name"
              type="text"
              color={errors.firstName && "secondary"}
              defaultValue={firstName}
            />
            <span style={{ color: "red" }}>{errors.firstName?.message}</span>
            <TextFieldGreen
              id="lastName"
              {...register("lastName")}
              className="m-2"
              label="Last Name"
              type="text"
              color={errors.lastName && "secondary"}
              defaultValue={lastName}
            />
            <span style={{ color: "red" }}>{errors.lastName?.message}</span>
            <TextFieldGreen
              id="password"
              {...register("password")}
              className="m-2"
              label="Change Password"
              type="password"
              color={errors.password && "secondary"}
              defaultValue={password}
            />
            <span style={{ color: "red" }}>{errors.password?.message}</span>
            <TextFieldGreen
              id="confirmPassword"
              {...register("confirmPassword")}
              className="m-2"
              label="Confirm Change Password"
              type="password"
              color={errors.confirmPassword && "secondary"}
              defaultValue={password}
            />
            <span style={{ color: "red" }}>
              {errors.confirmPassword?.message}
            </span>
            <TextFieldGreen
              id="phoneNumber"
              {...register("phoneNumber")}
              className="m-2"
              label="Phone Number"
              type="number"
              color={errors.phoneNumber && "secondary"}
              defaultValue={phone}
            />
            <span style={{ color: "red" }}>
              {errors.phoneNumber && "Phone Number must be valid"}
            </span>

            <TextFieldGreen
              placeholder="About me"
              multiline
              rows={3}
              id="aboutMe"
              {...register("aboutMe")}
              className="m-2"
              label="About Me"
              type="text"
              variant="outlined"
              defaultValue={bio}
            ></TextFieldGreen>

            <div className="d-flex flex-row-reverse m-2">
              <Button
                onClick={handleSubmit(onSubmit)}
                className="w-50"
                variant="success"
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
      >
        <Alert onClose={handleCloseSnackBar} severity="success">
          Settings Updated!
        </Alert>
      </Snackbar>
    </>
  );
}

export default ProfileSettings;
