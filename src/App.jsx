import React from "react";
import "./App.css";
import "reset-css";
import Home from "./stock/pages/Home";
import Login from "./user/pages/Login";
import DefaultPage from "./shared/components/DefaultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Login" element={<Login />}></Route>
        <Route path="/" element={<DefaultPage />}>
          <Route path="DashBoard" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
