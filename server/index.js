require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.MONGO_DBNAME || 'company1',
            retryWrites: true,
            w: 'majority'
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

connectDB();

// Employee Schema
const employeeSchema = new mongoose.Schema({
    empNo: { type: Number, required: true },
    empName: { type: String, required: true, unique: true },
    empSal: { type: Number, required: true }
}, {
    timestamps: false,
    versionKey: false
});

const Employee = mongoose.model('Employee', employeeSchema);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Routes
// Create Employee
app.post('/api/employees', async (req, res, next) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json({ message: 'Employee added successfully' });
    } catch (error) {
        next(error);
    }
});

// Get All Employees
app.get('/api/employees', async (req, res, next) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        next(error);
    }
});

// Get Single Employee
app.get('/api/employees/:id', async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        next(error);
    }
});

// Update Employee
app.put('/api/employees/:id', async (req, res, next) => {
    try {
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        next(error);
    }
});

// Delete Employee
app.delete('/api/employees/:id', async (req, res, next) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        next(error);
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
