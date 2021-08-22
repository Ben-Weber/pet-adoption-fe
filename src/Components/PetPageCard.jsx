import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "react-bootstrap";
import "./PetPageCard.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { updatePetStatus } from "../data/petsApi";
import { useLocation } from "react-router-dom";
import { useCon } from "../Context/AppContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

let userId;
if (localStorage.getItem("userId") !== null) {
  userId = localStorage.getItem("userId").toString();
}

function PetPageCard(props) {
  const { currentUser } = useCon();

  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [petStatus, setPetStatus] = useState("");
  const location = useLocation();
  let petId = location.state.petId;
  const classes = useStyles();
  const {
    img,
    name,
    type,
    height,
    weight,
    color,
    bio,
    hypoallergenic,
    dietary,
    breed,
  } = props;

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  useEffect(() => {
    if (petStatus !== "") {
      const ownership = { userId, petStatus, petId };
      updatePetStatus(ownership);
    }
  }, [petStatus]);

  const handleAdopt = () => {
    setPetStatus("Adopted");
    setOpenSnackBar(true);
  };

  const handleFoster = () => {
    setPetStatus("Fostered");
    setOpenSnackBar(true);
  };

  const handleReturn = () => {
    setPetStatus("Returned");
    setOpenSnackBar(true);
  };

  const handleSaveForLater = () => {
    setPetStatus("Saved For Later");
    setOpenSnackBar(true);
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              {" "}
              <img
                src={img}
                className="pet-img shadow-lg bg-body rounded"
                alt="dog"
              />
              {currentUser && (
                <div className="d-flex justify-content-evenly align-items-end">
                  <Button
                    className="btn btn-success mt-3"
                    onClick={handleAdopt}
                  >
                    Adopt
                  </Button>
                  <Button className="btn btn-success" onClick={handleFoster}>
                    Foster
                  </Button>
                  <Button className="btn btn-secondary" onClick={handleReturn}>
                    Return
                  </Button>
                  <Button
                    className="btn btn-outline-success"
                    onClick={handleSaveForLater}
                  >
                    Save For Later
                  </Button>
                </div>
              )}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <table className="table ">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Type</th>
                    <td>{type}</td>
                  </tr>
                  <tr>
                    <th scope="row">Height</th>
                    <td colSpan="2">{height}</td>
                  </tr>
                  <tr>
                    <th scope="row">Weight</th>
                    <td colSpan="2">{weight}</td>
                  </tr>
                  <tr>
                    <th scope="row">Color</th>
                    <td colSpan="2">{color}</td>
                  </tr>
                  <tr>
                    <th scope="row">Bio</th>
                    <td colSpan="2">{bio}</td>
                  </tr>
                  <tr>
                    <th scope="row">Hypoallergenic</th>
                    <td colSpan="2">{hypoallergenic}</td>
                  </tr>
                  <tr>
                    <th scope="row">Dietary Restrictions</th>
                    <td colSpan="2">{dietary}</td>
                  </tr>
                  <tr>
                    <th scope="row">Breed</th>
                    <td colSpan="2">{breed}</td>
                  </tr>
                </tbody>
              </table>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
      >
        <Alert onClose={handleCloseSnackBar} severity="success">
          {name} is {petStatus} Successfuly!
        </Alert>
      </Snackbar>
    </>
  );
}

export default PetPageCard;
