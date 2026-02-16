const express = require("express");
const app = express();

app.use(express.json());

// Sample Data
let users = [
    { id: 1, name: "suchi", age: 20 },
    { id: 2, name: "reddy", age: 20 }
];


// ================= CREATE =================
// POST /users
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// ================= READ ===================

// Get all users
app.get("/users", (req, res) => {
    res.json(users);
});

// Get single user by id
app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});


// ================= UPDATE =================
// PUT /users/:id
app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.age = req.body.age || user.age;

    res.json(user);
});


// ================= DELETE =================
// DELETE /users/:id
app.delete("/users/:id", (req, res) => {
    // const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

    // if (userIndex === -1) {
    //     return res.status(404).json({ message: "User not found" });
    // }

    // const deletedUser = users.splice(userIndex, 1);
    // res.json(deletedUser);


    users = users.filter(u => u.id != parseInt(req.params.id));
    res.send("user deleted");
});


// ================= SERVER =================
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
