import * as React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Search from "./pages/Search"
import './pages/index.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App