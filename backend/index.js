const express = require("express");
const { createTodo, updateTodo } = require("./types");  // Importing zod schemas
const { Todo } = require("./db");  // Importing the Todo model
const app = express();

app.use(express.json());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        return res.status(400).json({
            msg: "You sent the wrong inputs"
        });
    }

    const newTodo = await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created",
        todo: newTodo
    });
});

app.get("/todo", async function(req, res) {
    const todos = await Todo.find();
    res.json({
        todos: todos
    });
});

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        return res.status(400).json({
            msg: "You sent the wrong inputs"
        });
    }

    await Todo.updateOne(
        { _id: req.body.id },
        { completed: true }
    );

    res.json({
        msg: "Todo updated"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
