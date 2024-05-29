import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Mydashboard from "./Mydashboard.jsx";
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Mydashboard />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
