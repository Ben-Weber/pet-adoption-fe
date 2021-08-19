import React, { useState } from "react";
import AppContext from "./Context/AppContext";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import HomeWelcome from "./Pages/HomeWelcome";
import Search from "./Pages/Search";
import MyPetsPage from "./Pages/MyPetsPage";
import PetPage from "./Pages/PetPage";
import Admin from "./Pages/Admin";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./Components/Footer";

function App() {
  //todo (1) DASHBOARD Admin Page -- User List -- Pet List -- Update Pet Card if Admin (plus Snackbar)
  //todo (2) Fix Search Card min-height to be the same (maybe by img)
  //todo (3) on Search Card... text-overflow: ellipsis; on search-card. https://www.w3schools.com/cssref/css3_pr_text-overflow.asp

  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(true);
  const [currentUser, setCurrentUser] = useState("");

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
        }}
      >
        <Router>
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
