import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContexts";
import Main from "./layout/Main";
import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import AdminBoardResults from "./pages/Admin/AdminBoardResults";
import AdminMembers from "./pages/Admin/AdminMembers";
import AdminRegularResults from "./pages/Admin/AdminRegularResults";
import AdminStaffs from "./pages/Admin/AdminStaffs";
import AdminTeachers from "./pages/Admin/AdminTeachers";
import AdmissionAdmin from "./pages/Admin/AdmissionAdmin";
import CRUDNotice from "./pages/Admin/CRUDNotice";
import News from "./pages/Admin/News";
import RoutineAdmin from "./pages/Admin/RoutineAdmin";
import Admission from "./pages/Admission/Admission";
import Chairman from "./pages/Chairman/Chairman";
import ClassRoutine from "./pages/ClassRoutine/ClassRoutine";
import Committee from "./pages/Committee/Committee";
import Documents from "./pages/Documents/Documents";
import CoCurricularActivities from "./pages/Facilities/CoCurricularActivities";
import Facilities from "./pages/Facilities/Facilities";
import Lab from "./pages/Facilities/Lab";
import Library from "./pages/Facilities/Library";
import HeadTeacher from "./pages/HeadTeacher/HeadTeacher";
import Hero from "./pages/Home/Hero/Hero";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Notice from "./pages/Notice/Notice";
import BoardResults from "./pages/Results/BoardResults";
import RegularResults from "./pages/Results/RegularResults";
import Staffs from "./pages/Staff/Staffs";
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
          // { path: "debate", element: <DebateClub /> },
        ],
      },
      { path: "/students", element: <Students /> },
      { path: "/admission", element: <Admission /> },
      { path: "/teachers", element: <Teachers /> },
      { path: "/members", element: <Committee /> },
      { path: "/staffs", element: <Staffs /> },
      { path: "/academic/class-routine", element: <ClassRoutine /> },
      { path: "/board-results", element: <BoardResults /> },
      { path: "/regular-results", element: <RegularResults /> },
      { path: "/docs", element: <Documents /> },
      { path: "/head-teacher", element: <HeadTeacher /> },
      { path: "/chairman", element: <Chairman /> },
      { path: "/notice", element: <Notice /> },
      {
        path: "/admin",
        element: <Admin />,
        children: [
          { path: "news", element: <News /> },
          { path: "notice", element: <CRUDNotice /> },
          { path: "admission", element: <AdmissionAdmin /> },
          { path: "routines", element: <RoutineAdmin /> },
          { path: "board-results", element: <AdminBoardResults /> },
          { path: "regular-results", element: <AdminRegularResults /> },
          { path: "teachers", element: <AdminTeachers /> },
          { path: "members", element: <AdminMembers /> },
          { path: "staffs", element: <AdminStaffs /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
