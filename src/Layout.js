import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "./styles.css";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
