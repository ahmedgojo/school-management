import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Public Pages
import Home from './pages/public/Home.jsx';
import Login from './pages/auth/Login.jsx';

// Dashboards
import AdminDashboard from './pages/dashboards/AdminDashboard.jsx';
import StudentDashboard from './pages/dashboards/StudentDashboard.jsx';
import TeacherDashboard from './pages/dashboards/TeacherDashboard.jsx';
import ParentDashboard from './pages/dashboards/ParentDashboard.jsx';

// Layouts
import DashboardLayout from './components/layouts/DashboardLayout.jsx';
import PublicLayout from './components/layouts/PublicLayout.jsx';

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          {/* We can add other public routes here: About, Contact, Gallery, etc. */}
        </Route>

        {/* Authentication Route */}
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to={`/dashboard/${user?.role}`} /> : <Login />} 
        />

        {/* Protected Dashboard Routes */}
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />}
        >
          {/* Role-based routing */}
          <Route path="admin" element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
          <Route path="student" element={user?.role === 'student' ? <StudentDashboard /> : <Navigate to="/login" />} />
          <Route path="teacher" element={user?.role === 'teacher' ? <TeacherDashboard /> : <Navigate to="/login" />} />
          <Route path="parent" element={user?.role === 'parent' ? <ParentDashboard /> : <Navigate to="/login" />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
