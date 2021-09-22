import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Forecast from "./Forecast";
import WeatherForm from "./WeatherForm";
import app from "./app.css";
const App = () => (
  <main>
    <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  </main>
);

const Home = () => {
  return (
    <>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <h2>{process.env.REACT_APP_SUBTITLE}</h2>
      <Forecast />
      <WeatherForm />
    </>
  );
};

// const Dashboard = () => (
//   <>
//     <h1>Dashboard</h1>
//   </>
// );

export default App;
