import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";

const User = () => {
  const [users, setUsers] = useState([]);
  const [displayedName, setDisplayedName] = useState("John Doe");

  useEffect(() => {
    axios
      .get("https://ciie-backend.onrender.com/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const handleNameChange = (event) => {
    setDisplayedName(event.target.value);
  };

  return (
    <div className="main">
      <br />
      {users.map((user) => {
        return (
          <div className="detail" key={user._id}>
            <div className="personal">
              <div className="div">
                <span>Name: </span>
                {user.name}
              </div>
              <div className="div">
                <span>Reg No.:</span>
                {user.Registration_number}
              </div>
              <div className="div">
                <span>Year :</span>
                {user.year}
              </div>
              <div className="div">
                <span>Domain :</span> {user.domain}
              </div>
              <br />
            </div>
            <div className="status">
              <span className="user-status">{user.status}</span>
              <Dropdown id={user._id} />
              <button
                className="submit"
                onClick={() => {
                  const elem = document.getElementById(user._id);
                  const value = elem.value;
                  if (value === user.status) {
                    alert("No Change is Status");
                    return;
                  }
                  axios
                    .post("https://ciie-backend.onrender.com/update", {
                      reg_no: user.Registration_number,
                      status: value,
                    })
                    .then(() => {
                      const allUsers = users.map((u) => {
                        if (u._id === user._id) {
                          return { ...u, status: value };
                        } else {
                          return u;
                        }
                      });
                      setUsers(allUsers);
                    });
                }}
              >
                submit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default User;
