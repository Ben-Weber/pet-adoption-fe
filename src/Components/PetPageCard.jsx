import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./PetPageCard.css";

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

function PetPageCard() {
  // const { petName, petImg, petBio } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {" "}
            <img
              src="https://bit.ly/3zVVUyr"
              className="pet-img shadow-lg bg-body rounded"
              alt="dog"
            />
            <p className="d-flex justify-content-evenly align-items-end">
              <a href="/petPage" className="btn btn-success mt-3">
                Adopt
              </a>
              <a href="/petPage" className="btn btn-success">
                Foster
              </a>
              <a href="/petPage" className="btn btn-secondary">
                Return
              </a>
              <a href="/petPage" className="btn btn-outline-success">
                Save For Later
              </a>
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <table className="table ">
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  <td>Ollie</td>
                </tr>
                <tr>
                  <th scope="row">Type</th>
                  <td>Ostrich</td>
                </tr>
                <tr>
                  <th scope="row">Height</th>
                  <td colSpan="2">2.1 – 2.8 m</td>
                </tr>
                <tr>
                  <th scope="row">Weight</th>
                  <td colSpan="2">63 – 140 kg</td>
                </tr>
                <tr>
                  <th scope="row">Color</th>
                  <td colSpan="2">Black; With Hint Of Midnight Blue</td>
                </tr>
                <tr>
                  <th scope="row">Bio</th>
                  <td colSpan="2">
                    The common ostrich or simply ostrich, is a species of large
                    flightless bird native to certain large areas of Africa. It
                    is one of two extant species of ostriches, the only living
                    members of the genus Struthio in the ratite order of birds.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Hypoallergenic</th>
                  <td colSpan="2">No, not even close</td>
                </tr>
                <tr>
                  <th scope="row">Dietary Restrictions</th>
                  <td colSpan="2">
                    Typically eats plants, roots, and seeds but will also eat
                    insects, lizards, or other creatures available.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Breed</th>
                  <td colSpan="2">Somali, of course</td>
                </tr>
              </tbody>
            </table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default PetPageCard;
