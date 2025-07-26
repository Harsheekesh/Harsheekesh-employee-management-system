import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import  { FindById } from './components/FindById'; 
import  { Delete } from './components/Delete'; 
import { InsertEmployee } from './components/InsertEmployee';
import { FindAllEmployees } from './components/FindAllEmployees';
import { Update } from './components/Update';
import './styles/App.css';

function App() {
  return (
    <div className='app-wrapper'>
      {/* Full-width header */}
      <header className="full-width-header">
        <div className="heading"><h2>Employee Record Management System</h2></div>
      </header>

      <div className='app-container'>
        <div className='nav-links'>
          <nav>
            <NavLink to="/insert">Insert Employee</NavLink>
            <NavLink to="/find-all">Find All Employees</NavLink>
            <NavLink to="/find-by-id">Find Employee by ID</NavLink>
            <NavLink to="/delete">Delete Employee</NavLink>
            <NavLink to="/update">Update Employee</NavLink>
          </nav>
        </div>

        <div className="routes">
          <Routes>
            <Route path="/insert" element={<InsertEmployee />} />
            <Route path="/find-all" element={<FindAllEmployees />} />
            <Route path="/find-by-id" element={<FindById />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </div>
      </div>

      {/* Full-width footer */}
      <footer className="full-width-footer">
        <div className="footer-content">
          <p>© 2023 Employee Management System. All rights reserved.</p>
          <p>Developed by Harsheekesh Tiwari</p>
        </div>
      </footer>
    </div>
  );
}

export default App;