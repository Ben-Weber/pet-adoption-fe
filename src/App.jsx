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
  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(true);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          show: show,
          setShow: setShow,
          register: register,
          setRegister: setRegister,
        }}
      >
        <Router>
          <NavBar />
          {/* <Route path="/" exact component={Home} /> */}
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
