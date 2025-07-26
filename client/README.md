const handleSubmit = (e) => {
        e.preventDefault();
        if (empId && empName && empRole) {
            setRecords([...records, { empId, empName, empRole }]);
            setEmpId("");
            setEmpName("");
            setEmpRole("");
        }
    };

    return (
        <div>
            <div className="emp-heading"><h1>Digi-Crafter Employee Record</h1></div>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Enter the Employee ID"
                    value={empId}
                    onChange={e => setEmpId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter the Employee Name"
                    value={empName}
                    onChange={e => setEmpName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter the Employee Role"
                    value={empRole}
                    onChange={e => setEmpRole(e.target.value)}
                />
                <input type="submit" value="Add Record" />
            </form>
            <ul>
                {records.map((rec, idx) => (
                    <li key={idx}>
                        ID: {rec.empId}, Name: {rec.empName}, Role: {rec.empRole}
                    </li>
                ))}
            </ul>
        </div>
    );
}