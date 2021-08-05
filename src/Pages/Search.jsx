import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FormControlLabel, Switch, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import SearchCard from "../Components/SearchCard";
import UseSelect from "../Components/UseSelect";
// import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  animalType: yup.mixed().label("Animal Type"),
  adoptionStatus: yup.bool().label("Adoption Status"),
  animalName: yup.string().label("Animal Name"),
  minHeight: yup.number().label("Min Height"),
  maxHeight: yup.number().label("Max Height"),
  minWeight: yup.number().label("Min Weight"),
  maxWeight: yup.number().label("Max Weight"),
});

const GreenSwitch = withStyles({
  switchBase: {
    color: green[100],
    "&$checked": {
      color: green[700],
    },
    "&$checked + $track": {
      backgroundColor: green[700],
    },
  },
  checked: {},
  track: {},
})(Switch);

function Search() {
  const [advancedSearch, setAdvancedSearch] = useState({
    checkedA: false,
  });

  const handleChange = (e) => {
    setAdvancedSearch({ ...advancedSearch, [e.target.name]: e.target.checked });
  };

  // const history = useHistory();
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    // history.push("/homeWelcome")
  };

  return (
    <div>
      <main>
        <section className="pb-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Search Page</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don't simply skip over it entirely.
              </p>
              <p>
                <a href="/myPetsPage" className="btn btn-warning my-2">
                  Adopted Pets
                </a>
              </p>
              <FormControlLabel
                control={
                  <GreenSwitch
                    checked={advancedSearch.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                  />
                }
                label="Advanced Search"
              />
            </div>
          </div>

          <form>
            <UseSelect
              title="Animal Type"
              option1="Dog"
              option2="Cat"
              option3="Other"
            />
            {advancedSearch.checkedA && (
              <>
                <UseSelect
                  className="m-3"
                  title="Adoption Status"
                  option1="Adopted"
                  option2="Fostered"
                  option3="Both"
                />
                <div>
                  <TextField
                    id="animalName"
                    {...register("animalName")}
                    className="m-3"
                    style={{ minWidth: 350 }}
                    label="Name"
                    type="search"
                  />
                </div>
                <div>
                  <TextField
                    id="minHeight"
                    {...register("minHeight")}
                    style={{ width: 180 }}
                    className="m-3"
                    label="Min Height in CM"
                    type="number"
                  />
                  <TextField
                    id="maxHeight"
                    {...register("maxHeight")}
                    style={{ width: 180 }}
                    className="m-3"
                    label="Max Height in CM"
                    type="number"
                  />
                </div>
                <div>
                  <TextField
                    id="minWeight"
                    {...register("minWeight")}
                    style={{ width: 180 }}
                    className="m-3"
                    label="Min Weight in Kg"
                    type="number"
                  />
                  <TextField
                    id="maxWeight"
                    {...register("maxWeight")}
                    style={{ width: 180 }}
                    className="m-3"
                    label="Max Weight in Kg"
                    type="number"
                  />
                </div>
              </>
            )}
            <Button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              variant="success"
            >
              Search
            </Button>
          </form>
        </section>

        <div className="Search-container">
          <div className="d-flex flex-wrap justify-content-evenly">
            <SearchCard
              cardImg="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
              cardTitle="marshmallow"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
            <SearchCard
              cardImg="https://bit.ly/3ihwplf"
              cardTitle="Goldeye"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
            <SearchCard
              cardImg="https://bit.ly/3zQ0DkW"
              cardTitle="tortly"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
            <SearchCard
              cardImg="https://bit.ly/3f6StNq"
              cardTitle="mufasa"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Search;
