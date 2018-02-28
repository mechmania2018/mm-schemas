const { Schema, SchemaTypes } = require('mongoose')

const TeamSchema = new Schema({
  name: { type: String, required: true, unique: true },
  latestScript: { type: SchemaTypes.ObjectId, ref: 'Script' },
})

module.exports = m => m.model('Team', TeamSchema)