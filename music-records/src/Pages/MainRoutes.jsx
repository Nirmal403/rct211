import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import EditMusicRecord from "./EditMusicRecord";
import SingleMusicRecord from "./SingleMusicRecord";
import Login from "./Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/music/:id" element={<SingleMusicRecord />} />
      <Route path="/music/:id/edit" element={<EditMusicRecord />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRoutes;
