require('./database');

const express = require('express')
const app = express()
const port = 3000
const { getTasks, saveTask } = require('./service');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/tasks', async (req, res) => {
  const tasks = await getTasks();
  res.json(tasks);
})

app.post('/tasks', async (req, res) => {
  await saveTask(req.body);
  res.sendStatus(201);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
