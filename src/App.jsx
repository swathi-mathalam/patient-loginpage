import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import PatientRegistration from "./pages/PatientRegistration";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
  path="/patients"
  element={<PatientRegistration />}
/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;