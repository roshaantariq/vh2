const mongoose = require('mongoose')

const Word = new mongoose.Schema({
  word: {type:String,default:''},
  lc: {type:String,default:''}
})

module.exports = mongoose.model('Word',Word)
