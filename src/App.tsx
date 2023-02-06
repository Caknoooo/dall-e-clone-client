import React from "react";
import { Route, BrowserRouter, Link, Routes } from "react-router-dom";
import logo from "./assets/logo.svg";
import { CreatePost, Home } from "./pages";
import { Footer } from "./footer";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white dark:bg-gray-600 sm:px-8 px-4 py-4 border-b border-b-[#d9dfe9]">
        <Link to="/">
          <img src={logo} alt="" className="w-28 object-contain" />
        </Link>

        <div className="space-x-4 h-full px-3 py-4 overflow-x-auto flex items-center p-2">
          <Link
            to="/"
            className="space-x-2 font-inter font-medium bg-[#158913] text-white px-4 py-2 rounded-md flex justify-between"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>Home</span>
          </Link>

          <Link
            to="/create-post"
            className="flex justify-between space-x-2 font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span>Create</span>
          </Link>
        </div>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
