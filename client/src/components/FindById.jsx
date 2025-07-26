import { useState } from "react";
import axios from "axios";
import "../styles/FindById.css";




export function FindById() {
    const [id, setId] = useState("");
    const [employee, setEmployee] = useState(null);

    async function getData(e) {
        e.preventDefault(); 
        try {
            const response = await axios.get(`http://localhost:3001/api/employees/${id}`);
            setEmployee(response.data);
        } catch (err) {
            setEmployee(null);
            alert("Employee Not Found: " + err);
        }
    }

    return (
        <div className="container">
            <h1>Find Record by ID</h1>
           
            <input type="text" placeholder="Enter Id" value={id} onChange={(e) => setId(e.target.value)} 
            />
            <br /><br />
            <button onClick={getData}>Find Data</button>
            <br /><br />

            {employee && (
                <div className="fatched-data">
                    <h4>Employee Details</h4>
                    <hr />
                    <p>Emp No is: {employee.empNo}</p>
                    <p>Emp Name is: {employee.empName}</p>
                    <p>Emp Sal is: {employee.empSal}</p>
                </div>
            )}
        </div>
    );
}
