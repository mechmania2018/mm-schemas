const { Schema, SchemaTypes } = require('mongoose')

const TaskSchema = new Schema({
  players: [{ type: SchemaTypes.ObjectId, ref: 'Team' }]
})

module.exports = m => m.model('Task', TaskSchema)