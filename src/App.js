import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);

  // Load employees from localStorage when app loads
  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  // Save employees to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  // Function to add new employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <EmployeeForm onAddEmployee={addEmployee} />

      <h2>Current Employees</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            <strong>{emp.name}</strong> - {emp.title} ({emp.department}) | {emp.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
