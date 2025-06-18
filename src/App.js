import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import './App.css'; // optional global styles

function App() {
  const [employees, setEmployees] = useState(() => {
    const stored = localStorage.getItem('employees');
    return stored ? JSON.parse(stored) : [];
  });

  const [darkMode, setDarkMode] = useState(false);

  const addEmployee = (employee) => {
    const updated = [...employees, employee];
    setEmployees(updated);
    localStorage.setItem('employees', JSON.stringify(updated));
  };

  const deleteEmployee = (index) => {
    const updated = employees.filter((_, i) => i !== index);
    setEmployees(updated);
    localStorage.setItem('employees', JSON.stringify(updated));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'App dark' : 'App'}>
        <nav className="nav">
          <Link to="/">Add Employee</Link>
          <Link to="/list">Employee List</Link>
          <button onClick={toggleDarkMode} className="toggle-btn">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<EmployeeForm onAddEmployee={addEmployee} />} />
          <Route
            path="/list"
            element={
              <EmployeeList
                employees={employees}
                onDelete={deleteEmployee}
                darkMode={darkMode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

