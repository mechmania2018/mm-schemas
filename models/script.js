const { Schema, SchemaTypes } = require('mongoose')
const timestamps = require('mongoose-timestamp')

const ScriptSchema = new Schema({
  url: { type: String, required: true, unique: true },
  owner: { type: SchemaTypes.ObjectId, ref: 'Team' }
})

ScriptSchema.plugin(timestamps)
module.exports = m => m.model('Script', ScriptSchema)