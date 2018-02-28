const { Schema, SchemaTypes } = require('mongoose')
const timestamps = require('mongoose-timestamp')

const LogSchema = new Schema({
  url: { type: String, required: true, unique: true },
  players: [{type: SchemaTypes.ObjectId, ref: 'Script'}]
})

LogSchema.plugin(timestamps)
module.exports = m => m.model('Log', LogSchema)