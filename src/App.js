import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Main from "./layout/Main";
import About from "./pages/About/About";
import Admission from "./pages/Admission/Admission";
import CoCurricularActivities from "./pages/Facilities/CoCurricularActivities";
import DebateClub from "./pages/Facilities/DebateClub";
import Facilities from "./pages/Facilities/Facilities";
import Lab from "./pages/Facilities/Lab";
import Library from "./pages/Facilities/Library";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      {
        path: "/facilities",
        element: <Facilities />,
        children: [
          { path: "library", element: <Library /> },
          { path: "lab", element: <Lab /> },
          { path: "co-curricular", element: <CoCurricularActivities /> },
          { path: "debate", element: <DebateClub /> },
        ],
      },
      { path: "/admission", element: <Admission /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
