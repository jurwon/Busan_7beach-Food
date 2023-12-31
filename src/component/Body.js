import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import "../CSS/test.css";

import Main from "./Main";
import Join from "./Join";
import Login from "./Login";
import MainBusan from "./API_component/MainBusan";
import MenuPage from "./page/MenuPage";

const BodyDiv = styled.div`
  background-color: #f2ffe9;
  padding: 20px;
`;

const Body = () => {
  return (
    <BrowserRouter>
      <BodyDiv>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route index element={<Main />} />
          <Route path="Join" element={<Join />} />
          <Route path="Login" element={<Login />} />
          <Route path="MainBusan" element={<MainBusan />} />
          <Route path="menuPage/:category" element={<MenuPage />} />
        </Routes>
      </BodyDiv>
    </BrowserRouter>
  );
};

export default Body;
