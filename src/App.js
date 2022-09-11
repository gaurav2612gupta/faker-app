import * as React from 'react';
import ReactDOM from "react-dom/client";
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Search from "./pages/Search"
import './pages/index.css'
const App = () => {
  return (
    <div>
          <Route path="/" component = {Home} exact />
          <Route path="/search" component = {Search} exact />
    </div>
  )
}

export default App