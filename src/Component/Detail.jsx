import React from "react";
import Navbar from "./Navbar";
import User from "./User";
import axios from "axios";

const Detail = () => {
  const handleSendReport = async () => {
    try {
      const response = await axios.get(
        "https://ciie-backend.onrender.com/getUsers"
      );
      const users = response.data;

      const csvContent =
        "data:text/csv;charset=utf-8," +
        users.map((user) => Object.values(user).join(",")).join("\n");

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "users_report.csv");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="detail">
        <div className="box">
          <Navbar />
          <User />
        </div>
        <div className="buttons">
          <button className="Send Report" onClick={handleSendReport}>
            Send Report
          </button>

          <a className="buttons1" href="/add-student">
            Add Student
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Detail;
