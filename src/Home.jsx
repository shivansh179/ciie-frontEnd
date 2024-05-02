import React from "react";
import Details from "./Component/Detail";
import Description from "./Component/Description.jsx";
import AddData from "./Component/AddData.jsx";

const Home = () => {
  return (
    <div className="home">
      <Description />
      <Details />
    </div>
  );
};

export default Home;
