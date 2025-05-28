import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ApplicationForm from './components/ApplicationForm';
import StatusPage from './components/StatusPage';
import QrPage from './components/QrPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/status/:applicationId" element={<StatusPage />} />
        <Route path="/qr/:applicationId" element={<QrPage />} />
      </Routes>
    </Router>
  );
}

export default App;
