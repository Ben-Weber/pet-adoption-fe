import React, { useState } from "react";
import AdminAddPet from "../Components/AdminAddPet";
import AdminPetsList from "../Components/AdminPetsList";
import AdminUsersList from "../Components/UsersList/AdminUsersList";
import "./pages.css";

function Admin() {
  const [PetList, setPetList] = useState(true);
  const [UserList, setUserList] = useState(false);
  const [AddPet, setAddPet] = useState(false);

  return (
    <>
      <section className="text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Real Admin Page</h1>
            <div className="d-flex justify-content-evenly">
              <h5
                style={{
                  cursor: "pointer",
                }}
                className={PetList ? "pillFilled" : "pillEmpty"}
                onClick={() => {
                  setPetList(true);
                  setUserList(false);
                  setAddPet(false);
                }}
              >
                Pet List
              </h5>
              <h5
                style={{
                  cursor: "pointer",
                }}
                className={UserList ? "pillFilled" : "pillEmpty"}
                onClick={() => {
                  setUserList(true);
                  setPetList(false);
                  setAddPet(false);
                }}
              >
                User List
              </h5>
              <h5
                style={{
                  cursor: "pointer",
                }}
                className={AddPet ? "pillFilled" : "pillEmpty"}
                onClick={() => {
                  setAddPet(true);
                  setUserList(false);
                  setPetList(false);
                }}
              >
                Add Pet
              </h5>
            </div>
          </div>
        </div>
      </section>

      {PetList && <AdminPetsList />}

      {UserList && <AdminUsersList />}

      {AddPet && <AdminAddPet />}
    </>
  );
}

export default Admin;
