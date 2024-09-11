require('dotenv').config()
const express = require("express");
const example = require('./src/routes/example')
const uuid = require('uuid');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use("/api/example", example)

const todos = [
    { id: 1, description: "Write your daily tasks!!!", completed: true},
    { id: 2, description: "Follow your hobbies!!!", completed: false},
    { id: 3, description: "Do housework!!!", completed: false}
]

//GET / POST / PUT / DELETE
//GET_TODOLIST
app.get("/todos", (req, res) => {
    res.json(todos)
} )

//GET_TODOLIST_BY_ID
app.get("/todos/:id", (req, res) => {
    let todo = todos.filter((todo) => todo.id === +req.params.id)
    res.json(todo)
} )

//CREATE_TODOLIST
app.post("/todos", (req, res) => {
    let newTask = req.body
    todos.push({id: uuid.v4(), ...newTask})
    res.json(todos)
} )

//PUT_TODOLIST
app.put("/todos/:id", (req, res) => {
    let todo = todos.find((todo) => todo.id === +req.params.id)
    if(todo) {
        todo.description = req.body.description
        todo.completed = req.body.completed
        res.json(todos)
    } else {
        res.send("The id is not exist!!!")
    }
} )

//DELETE_TODOLIST
app.delete("/todos/:id", (req, res) => {
    let index = todos.findIndex((todo) => todo.id === +req.params.id)
    todos.splice(index, 1)  
    res.json(todos)
} )

const PORT = process.env.PORT ||3000;

function onServerStart() {
    console.log(`Server is running on port ${PORT}`);
}

app.listen(PORT, onServerStart);