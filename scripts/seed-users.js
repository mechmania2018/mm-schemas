const mongoose = require('mongoose')
const { Team } = require('../')(mongoose)

mongoose.connect(process.env.MONGO_URL)
mongoose.Promise = Promise

const test = new Team({
  name: 'Admin',
  email: 'pranay.gp@gmail.com',
  admin: true
})

test.save()