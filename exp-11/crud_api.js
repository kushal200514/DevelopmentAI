const express = require('express');

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: 'Rohit Kumar', dept: 'CSE' },
    { id: 2, name: 'Ananya Sharma', dept: 'ISE' }
];

// GET all students
app.get('/students', (req, res) => {

    res.status(200).json(students);

});

// GET student by ID
app.get('/students/:id', (req, res) => {

    const student = students.find(
        s => s.id === parseInt(req.params.id)
    );

    if (!student)
        return res.status(404).json({
            message: 'Student not found'
        });

    res.status(200).json(student);

});

// POST - Create student
app.post('/students', (req, res) => {

    const newStudent = {
        id: students.length + 1,
        ...req.body
    };

    students.push(newStudent);

    res.status(201).json(newStudent);

});

// PUT - Update student
app.put('/students/:id', (req, res) => {

    const index = students.findIndex(
        s => s.id === parseInt(req.params.id)
    );

    if (index === -1)
        return res.status(404).json({
            message: 'Student not found'
        });

    students[index] = {
        ...students[index],
        ...req.body
    };

    res.status(200).json(students[index]);

});

// DELETE student
app.delete('/students/:id', (req, res) => {

    students = students.filter(
        s => s.id !== parseInt(req.params.id)
    );

    res.status(200).json({
        message: 'Student deleted successfully'
    });

});

// Start server
app.listen(3002, () =>
    console.log('CRUD API running on port 3002 http://localhost:3002/students')
);