const tasks = require('./tasks');

async function saveTask(task){
    await tasks.create(task);
}

async function getTasks() {
    return await tasks.find({});
}

module.exports = {
    getTasks,
    saveTask
};