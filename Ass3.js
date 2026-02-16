const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "A", mobileno: 8978735498, address: "ABC", age: 20 },
  { id: 2, name: "B", mobileno: 7873547890, address: "BCD", age: 25 },
  { id: 3, name: "C", mobileno: 9988776655, address: "CDE", age: 22 }
];

// GET all students
app.get("/students", (req, res) => {
  res.send(students);
});

// MAP → extract only names
app.get("/students/names", (req, res) => {
  const names = students.map(s => s.name);
  res.send(names);
});

// FILTER → students above age 21
app.get("/students/above21", (req, res) => {
  const result = students.filter(s => s.age > 21);
  res.json(result);
});

// FIND → student by id
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// ADD student
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    mobileno: req.body.mobileno,
    address: req.body.address,
    age: req.body.age
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// UPDATE student
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let found = false;

  students = students.map(s => {
    if (s.id === id) {
      found = true;
      return { ...s, ...req.body };
    }
    return s;
  });

  if (!found) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({ message: "Student updated" });
});

// DELETE student
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const before = students.length;

  students = students.filter(s => s.id !== id);

  if (students.length === before) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({ message: "Student deleted" });
});

// START SERVER
app.listen(3000, () => console.log("Server running on port 3000"));
