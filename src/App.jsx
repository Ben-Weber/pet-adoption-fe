import React, { useEffect, useState } from "react";
import AppContext from "./Context/AppContext";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import HomeWelcome from "./Pages/HomeWelcome";
import Search from "./Pages/Search";
import MyPetsPage from "./Pages/MyPetsPage";
import PetPage from "./Pages/PetPage";
import Admin from "./Pages/Admin";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BackToTop from "./Components/BackToTop";
import { getPetInfo, getUserAdoptedPets } from "./data/petsApi";
import { getAllUsers } from "./data/usersApi";
import PrivateRoute from "./Components/PrivateRoute";

// import axios from "axios";
// import Footer from "./Components/Footer";

function App() {
  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [loggedIn, setLoggedIn] = useState("");
  const [allPetInfo, setAllPetInfo] = useState({});
  const [registerNotice, setRegisterNotice] = useState("");
  const [AllUsersInfo, SetAllUsersInfo] = useState({});
  const [petAdded, setPetAdded] = useState("");
  const [userAdoptedPets, setUserAdoptedPets] = useState({});

  useEffect(() => {
    getPetInfo().then((response) => {
      setAllPetInfo(response);
    });
  }, []);

  useEffect(() => {
    getAllUsers().then((response) => {
      SetAllUsersInfo(response);
    });
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const isAdmin = localStorage.getItem("isAdmin");
    const loggedInUser = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      isAdmin: isAdmin,
    };
    if (id) {
      setLoggedIn(loggedInUser);
    }
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      getUserAdoptedPets(userId).then((response) => {
        setUserAdoptedPets(response);
      });
    }
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          show: show,
          setShow: setShow,
          register: register,
          setRegister: setRegister,
          currentUser: currentUser,
          setCurrentUser: setCurrentUser,
          allPetInfo: allPetInfo,
          setAllPetInfo: setAllPetInfo,
          loggedIn: loggedIn,
          setLoggedIn: setLoggedIn,
          registerNotice: registerNotice,
          setRegisterNotice: setRegisterNotice,
          AllUsersInfo: AllUsersInfo,
          SetAllUsersInfo: SetAllUsersInfo,
          petAdded: petAdded,
          setPetAdded: setPetAdded,
          userAdoptedPets: userAdoptedPets,
          setUserAdoptedPets: setUserAdoptedPets,
        }}
      >
        <Router>
          <BackToTop />
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <PrivateRoute path="/homeWelcome" exact component={HomeWelcome} />
          <PrivateRoute path="/myPetsPage" exact component={MyPetsPage} />
          <Route path="/petPage" exact component={PetPage} />
          <PrivateRoute path="/admin" exact component={Admin} />
        </Router>
      </AppContext.Provider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
