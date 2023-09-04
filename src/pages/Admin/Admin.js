import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageSidebar from "../../components/PageSidebar";
import PageTopBanner from "../../components/PageTopBanner";

const Admin = () => {
  const facilities = [
    { id: 1, title: "Admission", to: "/admission" },
    { id: 2, title: "News", to: "/admin/news" },
    { id: 3, title: "Notice", to: "/admin/notice" },
    { id: 4, title: "Results", to: "/facilities/lab" },
    // { id: 5, title: "Results", to: "/facilities/lab" },
  ];
  const { pathname } = useLocation();
  const selected = facilities.find((item) => item.to === pathname) || {};
  return (
    <div className="h-[calc(100vh-64px)] overflow-x-scroll">
      <PageTopBanner title={selected?.title || "Admin"} />
      <div className="max-w-[1200px] border w-full mx-auto p-3 md:flex gap-5">
        <PageSidebar sectionName={"Admin"} links={facilities} />
        <div className=" w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
