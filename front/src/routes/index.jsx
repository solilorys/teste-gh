import React from "react";
import { Routes, Route } from "react-router-dom";

import Atividade from "../pages/Atividade";

const Router = () => (
  <Routes>
    <Route path="/" element={<Atividade />} />
  </Routes>
);

export default Router;
