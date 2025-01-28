import React from "react";
import { Routes, Route } from "react-router-dom";

import ListAtividade from "../pages/ListAtividade";
import CreateAtividade from "../pages/CreateAtividade";
import RelatorioAtividadade from "../pages/RelatorioAtividade";

const Router = () => (
  <Routes>
    <Route path="/" element={<ListAtividade />} />
    <Route path="/createAtividade" element={<CreateAtividade />} />
    <Route path="/relatorio/:nome" element={<RelatorioAtividadade />} />
  </Routes>
);

export default Router;
