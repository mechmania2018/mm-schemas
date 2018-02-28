const mongoose = require('mongoose')
const { Team } = require('../')

mongoose.connect(process.env.MONGO_URL)
mongoose.Promise = Promise

const test = new Team({
  name: 'Asaf'
})

test.save()