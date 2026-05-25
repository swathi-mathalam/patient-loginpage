import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PatientRegistration from "./pages/patientRegistration";
import PatientManagement from "./pages/PatientManagement";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Appointments from "./pages/Appointments";
import Consultation from "./pages/Consultation";
import Reports from "./pages/Reports";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Patients */}
        <Route
          path="/patients"
          element={
            <ProtectedRoute>
              <PatientRegistration  />
            </ProtectedRoute>
          }
        />
        <Route
  path="/patient-management"
  element={
    <ProtectedRoute>
      <PatientManagement />
    </ProtectedRoute>
  }
/>

<Route
  path="/appointments"
  element={
    <ProtectedRoute>
      <Appointments />
    </ProtectedRoute>
  }
/>
<Route
  path="/consultation"
  element={
    <ProtectedRoute>
      <Consultation />
    </ProtectedRoute>
  }
/>
<Route
  path="/reports"
  element={
    <ProtectedRoute>
      <Reports />
    </ProtectedRoute>
  }
/>


        {/* Default Route */}
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;