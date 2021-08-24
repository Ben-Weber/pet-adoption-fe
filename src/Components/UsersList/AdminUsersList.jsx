import React from "react";
import "./UsersList.css";
import { ListGroup } from "react-bootstrap";
import Collapsible from "react-collapsible";
import { useCon } from "../../Context/AppContext";

function AdminUsersList() {
  const { AllUsersInfo } = useCon();
  return (
    <div className="userContainer mt-4 mb-4">
      <ListGroup defaultActiveKey="#link1">
        {AllUsersInfo.length > 0 &&
          AllUsersInfo.map((user, index) => {
            return (
              <>
                <div className="userDiv btn btn-success">
                  <Collapsible
                    key={index}
                    trigger={`${user.firstName} ${user.lastName}`}
                  >
                    <hr></hr>
                    <p>{`Id - ${user.userId}`}</p>
                    <hr></hr>
                    <p>{`Email - ${user.email}`}</p>
                    <hr></hr>
                    <p>{`Bio - ${user.bio}`}</p>
                    <hr></hr>
                    <p>{`Phone - ${user.phone}`}</p>
                  </Collapsible>
                </div>
              </>
            );
          })}
      </ListGroup>
    </div>
  );
}

export default AdminUsersList;
