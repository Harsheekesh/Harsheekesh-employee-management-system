import { useState } from "react";
import "../styles/findAllEmployees.css";
import axios from "axios";

export function FindAllEmployees() {
    const [employees, setEmployees] = useState([]);

    async function findAllEmployees(e) {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:3001/api/employees');
            setEmployees(response.data);
        } catch (error) {
            alert("Failed to fetch employees");
        }
    }

    return (
        <div className="container">
            

            <div className="empTable">
                <table>
                    <thead>
                        <tr>
                            <th>Employee No</th>
                            <th>Employee Name</th>
                            <th>Employee Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee._id}>
                                <td>{employee.empNo}</td>
                                <td>{employee.empName}</td>
                                <td>{employee.empSal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

             <form onSubmit={findAllEmployees}>
                <button id="find-btn" type="submit">Find All</button>
            </form>
        </div>
    );
}