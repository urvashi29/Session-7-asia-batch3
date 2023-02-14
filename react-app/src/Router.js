import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./modules/Navbar/Navbar";
import About from "./modules/About/container/About";
import Contact from "./modules/Contact/container/Contact";
import Employee from "./modules/Employee/container/Employee";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
