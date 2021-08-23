import React from "react";
import { useCon } from "../Context/AppContext";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../data/usersApi";
import * as yup from "yup";
const schema = yup.object().shape({
  email: yup.string().email().required().label("Email Address"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /[a-zA-Z]/,
      "Password can only contain English letters and numbers."
    ),
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

function Login() {
  const history = useHistory();

  const { setCurrentUser, setShow, setLoggedIn } = useCon();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    history.push("/homeWelcome");
    const user = await loginUser(data);
    setCurrentUser(user);
    setLoggedIn(user);
    setShow(false);
  };

  return (
    <form className="d-flex flex-column m-1" noValidate autoComplete="off">
      <TextFieldGreen
        id="email"
        {...register("email")}
        className="m-2 "
        label="Email Address"
        type="text"
        color={errors.email && "secondary"}
      />
      <span style={{ color: "red" }}>{errors.email?.message}</span>

      <TextFieldGreen
        id="Password"
        {...register("password")}
        className="m-2"
        label="Password"
        type="password"
        color={errors.password && "secondary"}
      />
      <span style={{ color: "red" }}>{errors.password?.message}</span>

      <div className="d-flex flex-row-reverse m-2">
        <Button
          className="w-50"
          variant="success"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Login
        </Button>
      </div>
    </form>
  );
}
export default Login;
