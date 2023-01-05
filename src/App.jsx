import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./pages";
const App = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="mb-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
