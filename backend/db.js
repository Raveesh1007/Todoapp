const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rak51837:dIesvdnKmsqytEfU@cluster0.4hyk7op.mongodb.net/");

const todoSchema = new mongoose.Schema({  // Corrected `mongoose.Schema` usage
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);  // Corrected model definition

module.exports = {
    Todo
};
