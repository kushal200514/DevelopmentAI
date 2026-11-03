require('./db');

const express = require('express');

const Student = require('./Student');

const app = express();

app.use(express.json());

// CREATE
app.post('/students', async (req, res) => {

    const student = new Student(req.body);

    await student.save();

    res.status(201).json(student);

});

// READ ALL
app.get('/students', async (req, res) => {

    const students = await Student.find();

    res.json(students);

});

// UPDATE
app.put('/students/:id', async (req, res) => {

    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(student);

});

// DELETE
app.delete('/students/:id', async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    res.json({
        message: 'Deleted successfully'
    });

});

// START SERVER
app.listen(3003, () =>

    console.log('Mongoose app running on port 3003')

);