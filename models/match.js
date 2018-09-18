const { Schema, SchemaTypes } = require('mongoose')

const MatchSchema = new Schema({
  key: { type: String, required: true, unique: true },
  winner: { type: Number, required: true, unique: true, default: 3 }
})

module.exports = m => m.model('Match', MatchSchema)