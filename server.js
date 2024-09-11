require('dotenv').config()
const express = require("express");
const example = require('./src/routes/example')
const uuid = require('uuid');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use("/api/example", example)

const todos = [
    { id: uuid.v4(), description: "Write your daily tasks!!!", completed: true},
    { id: uuid.v4(), description: "Follow your hobbies!!!", completed: false},
    { id: uuid.v4(), description: "Do housework!!!", completed: false}
]

//GET / POST / PUT / DELETE
//GET_TODOLIST
app.get("/todos", (req, res) => {
    res.status(201).json({Task: todos });
} )

//GET_TODOLIST_BY_ID
app.get("/todos/:id", (req, res) => {
    let todo = todos.filter((todo) => todo.id === req.params.id)
    if(todo.length === 0)
        return res.status(404).json({ error: "Todo ID not found" });
    res.status(201).json({Task: todos });
} )

//CREATE_TODOLIST
app.post("/todos", (req, res) => {
    let newTask = req.body;

    if (!newTask || newTask !== "" || Object.keys(newTask).length === 0) {
        return res.status(400).json({ error: "Task description is required" });
    }

    const newTodo = { id: uuid.v4(), ...newTask, completed: false };
    todos.push(newTodo);

    const addedTask = todos.find(todo => todo.id === newTodo.id);

    if (addedTask) {
        res.status(201).json({newTask: todos });
    } else {
        res.status(500).json({ error: "Failed to create task" });
    }
});

//PUT_TODOLIST
app.put("/todos/:id", (req, res) => {
    let todo = todos.find((todo) => todo.id === req.params.id)
    if(todo) {
        todo.description = req?.body?.description ?? todo?.description
        todo.completed = req?.body?.completed ?? todo?.completed
        console.log(req.body)
    } else {
        return res.status(404).json({ error: "Todo ID not found" });
    }
    res.status(201).json({task: todos });
} )

//DELETE_TODOLIST
app.delete("/todos/:id", (req, res) => {
    let index = todos.findIndex((todo) => todo.id === req.params.id)
    console.log(index)
    if(index >= 0) {
        todos.splice(index, 1)  
    } else {
        return res.status(404).json({ error: "Todo ID not found" });
    }
    res.status(201).json({newTask: todos });
} )

const PORT = process.env.PORT ||3000;

function onServerStart() {
    console.log(`Server is running on port ${PORT}`);
}

app.listen(PORT, onServerStart);