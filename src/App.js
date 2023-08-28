import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Main from "./layout/Main";
import About from "./pages/About/About";
import Admission from "./pages/Admission/Admission";
import ClassRoutine from "./pages/ClassRoutine/ClassRoutine";
import Committee from "./pages/Committee/Committee";
import Documents from "./pages/Documents/Documents";
import CoCurricularActivities from "./pages/Facilities/CoCurricularActivities";
import DebateClub from "./pages/Facilities/DebateClub";
import Facilities from "./pages/Facilities/Facilities";
import Lab from "./pages/Facilities/Lab";
import Library from "./pages/Facilities/Library";
import Hero from "./pages/Home/Hero/Hero";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Results from "./pages/Results/Results/Results";
import Students from "./pages/Students/Students";
import Teachers from "./pages/Teachers/Teachers";

const router = createBrowserRouter([
  { path: "/test", element: <Hero /> },
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
      { path: "/students", element: <Students /> },
      { path: "/admission", element: <Admission /> },
      { path: "/teachers", element: <Teachers /> },
      { path: "/members", element: <Committee /> },
      { path: "/academic/class-routine", element: <ClassRoutine /> },
      { path: "/results", element: <Results /> },
      { path: "/docs", element: <Documents /> },
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
