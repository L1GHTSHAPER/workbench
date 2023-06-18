import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import TicketDetail from "./screens/TicketDetail/TicketDetail.jsx";

import { Registration } from "./screens/Registration/index.jsx";
import { Login } from "./screens/Login/index.jsx";
import { Clients } from "./screens/Clients/index.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Registration />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<TicketDetail />} path="/tickets/:id" />
        <Route element={<Clients />} path="/clients" />

        <Route element={<div>Not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
