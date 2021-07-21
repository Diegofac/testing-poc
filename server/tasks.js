const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let tasks = new Schema({
    name:  String,
    description: String,
    workerURL:   String,
    timeout: Number
});

module.exports = mongoose.model('tasks', tasks );
