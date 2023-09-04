import React, { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PageSidebar from "../../components/PageSidebar";
import PageTopBanner from "../../components/PageTopBanner";
import { AuthContext } from "../../context/AuthContexts";

const Admin = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const facilities = [
    { id: 1, title: "Admission", to: "/admin/admission" },
    { id: 2, title: "News", to: "/admin/news" },
    { id: 3, title: "Notice", to: "/admin/notice" },
    // { id: 4, title: "Results", to: "/admin/lab" },
    // { id: 5, title: "Results", to: "/facilities/lab" },
  ];
  useEffect(() => {
    if (!user) {
      // User is not authenticated, navigate to the home page
      navigate("/");
    }
  }, [user, navigate]);

  const { pathname } = useLocation();
  const selected = facilities.find((item) => item.to === pathname) || {};
  return (
    <div className="h-[calc(100vh-64px)] overflow-x-scroll">
      {user ? (
        <>
          <PageTopBanner title={selected?.title || "Admin"} />
          <div className="max-w-[1200px] w-full mx-auto p-3 md:flex gap-5">
            <PageSidebar sectionName={"Admin"} links={facilities} />
            <div className="p-4 w-full">
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Admin;
