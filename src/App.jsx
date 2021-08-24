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
import { getPetInfo } from "./data/petsApi";
import { getAllUsers } from "./data/usersApi";
// import Footer from "./Components/Footer";

function App() {
  //todo (1) DASHBOARD Admin Page -- User List -- Pet List -- Update Pet Card if Admin (plus Snackbar)

  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [loggedIn, setLoggedIn] = useState("");
  const [allPetInfo, setAllPetInfo] = useState({});
  const [registerNotice, setRegisterNotice] = useState("");
  const [AllUsersInfo, SetAllUsersInfo] = useState({});

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
    const loggedInUser = localStorage.getItem("userId");
    if (loggedInUser) {
      setLoggedIn(loggedInUser);
      console.log("LS in currentUser: ", loggedInUser);
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
        }}
      >
        <Router>
          <BackToTop />
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/homeWelcome" exact component={HomeWelcome} />
          <Route path="/myPetsPage" exact component={MyPetsPage} />
          <Route path="/petPage" exact component={PetPage} />
          <Route path="/admin" exact component={Admin} />
        </Router>
      </AppContext.Provider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
