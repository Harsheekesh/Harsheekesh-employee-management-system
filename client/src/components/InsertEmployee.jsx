import { useState } from "react";
import "../styles/InsertEmployee.css";
import axios from "axios";

export function InsertEmployee(){
    const [empNo, setEmpNo] = useState("");
    const [empName, setEmpName] = useState("");
    const [empSal, setEmpSal] = useState("");
    const [employees, setEmployees] = useState([]);

    async function EmployeeHandler(e) {
        
        e.preventDefault();
        try{
            const response = await axios.post('https://harsheekesh-employee-management-system.onrender.com/api/employees', {empNo, empName, empSal});
            alert(response.data.message);
        }
        catch(err)
        {
            alert(err);
        }
    }
   
    return(
        <div className="container">
            
            <form className="form-container" onSubmit={EmployeeHandler} >

             
                <h1>Insert Employee Record  </h1>

                <input type="text" placeholder="EmpNo" value={empNo} onChange={(e) => setEmpNo(e.target.value)} />
                <input type="text" placeholder="EmpName" value={empName} onChange={(e) => setEmpName(e.target.value)} />
                <input type="text" placeholder="EmpSalary" value={empSal} onChange={(e) => setEmpSal(e.target.value)} />
                 <button type="submit"> Add Record </button>
                </form>          
        </div>

    )
}
