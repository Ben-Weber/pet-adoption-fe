import React, { useEffect, useState } from "react";
import "./pages.css";
import { Button, Form } from "react-bootstrap";
import {
  FormControlLabel,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import SearchCard from "../Components/SearchCard";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getPetInfo, searchResult } from "../data/petsApi";
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

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: 350,
  },
}));

const TextFieldGreen = withStyles({
  root: {
    "& label.Mui-focused": {
      color: green[700],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: green[700],
    },
  },
})(TextField);

const SelectGreen = withStyles({
  root: {
    "& label.Mui-focused": {
      color: green[700],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: green[700],
    },
  },
})(Select);

function Search() {
  const [advancedSearch, setAdvancedSearch] = useState({
    checkedA: false,
  });

  const classes = useStyles();
  const [selectedType, setSelectedType] = useState("");
  const [selected, setSelected] = useState("");
  const [openType, setOpenType] = useState(false);
  const [open, setOpen] = useState(false);

  const handleTypeChange = (event) => {
    let newVal = event.target.value;
    setSelectedType(newVal);
  };

  const handleTypeClose = () => {
    setOpenType(false);
  };

  const handleTypeOpen = () => {
    setOpenType(true);
  };

  const handleChange = (event) => {
    let newVal = event.target.value;
    setSelected(newVal);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSwitchChange = (e) => {
    setAdvancedSearch({ ...advancedSearch, [e.target.name]: e.target.checked });
  };

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const [search, setSearch] = useState(false);
  const [petInfo, setPetInfo] = useState({});

  const onSubmit = async (data) => {
    let searchResulttt;
    searchResulttt = await searchResult(data);
    setPetInfo(searchResulttt.data);
    setSearch(true);
    console.log("searchResult.data", searchResulttt.data);
    console.log("petInfo", petInfo);
    return searchResulttt;
  };

  return (
    <div>
      <main>
        <section className="pb-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Search Page</h1>
              <div className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don't simply skip over it entirely.
              </div>
              <FormControlLabel
                control={
                  <GreenSwitch
                    checked={advancedSearch.checkedA}
                    onChange={handleSwitchChange}
                    name="checkedA"
                  />
                }
                label="Advanced Search"
              />
            </div>
          </div>

          <form>
            <div className="m-2">
              <FormControl className={classes.formControl}>
                <InputLabel id="selected-option">Animal Type</InputLabel>
                <SelectGreen
                  id="animalType"
                  {...register("animalType")}
                  labelId="selected-option"
                  open={openType}
                  onClose={handleTypeClose}
                  onOpen={handleTypeOpen}
                  value={selectedType}
                  onChange={handleTypeChange}
                >
                  <MenuItem value="Dog">Dog</MenuItem>
                  <MenuItem value="Cat">Cat</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </SelectGreen>
              </FormControl>
            </div>

            {advancedSearch.checkedA && (
              <>
                <div className="m-2">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="selected-option">
                      Adoption Status
                    </InputLabel>
                    <Select
                      id="animalStatus"
                      {...register("animalStatus")}
                      labelId="selected-option"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={selected}
                      onChange={handleChange}
                    >
                      <MenuItem value="Adopted">Adopted</MenuItem>
                      <MenuItem value="Fostered">Fostered</MenuItem>
                      <MenuItem value="Both">Both</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <TextFieldGreen
                    id="animalName"
                    {...register("animalName")}
                    className="m-3"
                    style={{ minWidth: 350 }}
                    label="Name"
                    type="search"
                  />
                </div>

                {/* <div className="m-2">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="selected-option">
                      Height in CM
                    </InputLabel>
                    <Select
                      id="animalStatus"
                      {...register("animalStatus")}
                      labelId="selected-option"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={selected}
                      onChange={handleChange}
                    >
                      <MenuItem value="Adopted">Adopted</MenuItem>
                      <MenuItem value="Fostered">Fostered</MenuItem>
                      <MenuItem value="Both">Both</MenuItem>
                    </Select>
                  </FormControl>
                </div> */}

                <div>
                  <TextFieldGreen
                    id="minHeight"
                    {...register("minHeight")}
                    style={{ width: 180 }}
                    className="m-3"
                    label="Min Height in CM"
                    type="number"
                  />
                  <TextFieldGreen
                    id="maxHeight"
                    {...register("maxHeight")}
                    style={{ width: 180 }}
                    className="m-3"
                    label="Max Height in CM"
                    type="number"
                  />
                </div>
                <div>
                  <TextFieldGreen
                    id="minWeight"
                    {...register("minWeight")}
                    style={{ width: 180 }}
                    className="m-3"
                    label="Min Weight in Kg"
                    type="number"
                  />
                  <TextFieldGreen
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
          <div className="search-card-container">
            {petInfo.length > 0 &&
              petInfo.map((pet, index) => {
                return (
                  <SearchCard
                    key={index}
                    petId={pet.petId}
                    petImg={pet.image}
                    petName={pet.petName}
                    petBio={pet.petBio}
                  />
                );
              })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Search;
