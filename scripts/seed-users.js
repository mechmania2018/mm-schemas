const mongoose = require('mongoose')
const { Team } = require('../')(mongoose)

mongoose.connect(process.env.MONGO_URL)
mongoose.Promise = Promise

const test = new Team({
  name: 'Admin',
  admin: true
})

test.save()