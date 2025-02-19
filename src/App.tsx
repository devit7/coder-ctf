import React from "react";
import { Button } from "@/components/ui/button"
import { Routes, Route } from "react-router"
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import path from 'path';
import Navigation from "./components/Navigation";
import Layouts from '@/layouts/Layouts';
import Challenges from './pages/Challenges';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />} >
          <Route index element={<Home />} />
          <Route path="challenges" element={<Challenges/>} />
        </Route >
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
