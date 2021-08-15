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

function PetPageCard(props) {
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

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {" "}
            <img
              // src="https://bit.ly/3zVVUyr"
              src={img}
              className="pet-img shadow-lg bg-body rounded"
              alt="dog"
            />
            <div className="d-flex justify-content-evenly align-items-end">
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
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <table className="table ">
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  {/* <td>Ollie</td> */}
                  <td>{name}</td>
                </tr>
                <tr>
                  <th scope="row">Type</th>
                  {/* <td>Ostrich</td> */}
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
                  {/* <td colSpan="2">
                    The common ostrich or simply ostrich, is a species of large
                    flightless bird native to certain large areas of Africa. It
                    is one of two extant species of ostriches, the only living
                    members of the genus Struthio in the ratite order of birds.
                  </td> */}
                  <td colSpan="2">{bio}</td>
                </tr>
                <tr>
                  <th scope="row">Hypoallergenic</th>
                  <td colSpan="2">{hypoallergenic}</td>
                </tr>
                <tr>
                  <th scope="row">Dietary Restrictions</th>
                  {/* <td colSpan="2">
                    Typically eats plants, roots, and seeds but will also eat
                    insects, lizards, or other creatures available.
                  </td> */}
                  <td colSpan="2">{dietary}</td>
                </tr>
                <tr>
                  <th scope="row">Breed</th>
                  {/* <td colSpan="2">Somali, of course</td> */}
                  <td colSpan="2">{breed}</td>
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
