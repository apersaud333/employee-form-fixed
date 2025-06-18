import React, { useState } from 'react';
import './EmployeeList.css';

function EmployeeList({ employees, onDelete, darkMode }) {
  const [filter, setFilter] = useState('');

  const filteredEmployees = filter
    ? employees.filter((emp) => emp.department.toLowerCase() === filter.toLowerCase())
    : employees;

  const departments = [...new Set(employees.map((e) => e.department))];

  return (
    <div className={`employee-list-container ${darkMode ? 'dark' : ''}`}>
      <h2 className="list-title">Employee Directory</h2>

      {departments.length > 0 && (
        <select
          className="filter-select"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="">All Departments</option>
          {departments.map((dept, i) => (
            <option key={i} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      )}

      {filteredEmployees.length === 0 ? (
        <p className="no-employees">No employees found.</p>
      ) : (
        <div className="employee-grid">
          {filteredEmployees.map((emp, index) => (
            <div className="employee-card" key={index}>
              <h3>{emp.name}</h3>
              <p><strong>Title:</strong> {emp.title}</p>
              <p><strong>Department:</strong> {emp.department}</p>
              <p><strong>Email:</strong> {emp.email}</p>
              <button className="delete-btn" onClick={() => onDelete(index)}>
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmployeeList;

