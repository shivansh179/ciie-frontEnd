import React, { useState } from "react";
import axios from "axios";
import user from "./User";

const AddData = () => {
  const [name, setName] = useState("");
  const [Registration_number, setRegistration_number] = useState("");
  const [year, setYear] = useState(0); // Initialize year to 0 (Number type)
  const [domain, setDomain] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("https://ciie-backend.onrender.com/", {
        name,
        Registration_number,
        year,
        domain,
        status,
      });

      localStorage.setItem("members", JSON.stringify(result.data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="add-data">
      <div className="inside">
        <h1>Add Student</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="det">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="Registration_number">Registration Number:</label>
            <input
              type="text"
              id="Registration_number"
              value={Registration_number}
              onChange={(e) => setRegistration_number(e.target.value)}
              required
            />

            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />

            <label htmlFor="domain">Domain:</label>
            <input
              type="text"
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            />

            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="Add">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddData;
