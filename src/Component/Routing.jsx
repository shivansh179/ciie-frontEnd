import ReactDOM from "react-dom/client";
import Description from './Description';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from './AddData'
import AdvanceDescription from'./AdvanceDescription'
import Detail from './Detail'
import User from './User'
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";



export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="./AddData.jsx" element={<AddData/>} />
          <Route path="./AdvanceDescription.jsx" element={<AdvanceDescription/>} />
          <Route path="./Description.jsx" element={<Description />} />
          <Route path="./Detail.jsx" element={<Detail />} />
          <Route path="./Dropdown.jsx" element={<Dropdown />} />
          <Route path="./Navbar.jsx" element={<Navbar />} />
          <Route path="./User.jsx" element={<User />} />
       </Routes>
    </BrowserRouter>
  );
}

