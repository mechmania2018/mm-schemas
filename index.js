const Team = require('./models/team')
const Script = require('./models/script')
const Log = require('./models/log')
const Task = require('./models/task')

module.exports = mongoose => ({
  Team: Team(mongoose),
  Script: Script(mongoose),
  Log: Log(mongoose),
  Task: Task(mongoose),
})