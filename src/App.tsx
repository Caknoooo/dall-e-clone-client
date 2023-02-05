import React from "react";
import { Route, BrowserRouter, Link, Routes } from "react-router-dom";
import logo from "./assets/logo.svg";
import { CreatePost, Home } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="" className="w-28 object-contain" />
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-3 py-2 rounded-md"
        >
          Create
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="align-items-center text-center">
          <p>Copyright © 2023 Cakno All Right Reserved.</p>
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default App;
