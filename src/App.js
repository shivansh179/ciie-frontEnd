import Home from "./Home";
import "./style.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AddStudentPage from "./Component/addStudent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/add-student" element={<AddStudentPage />} />
      <Route path="/" element={<Home />} />
    </>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
