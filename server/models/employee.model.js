const mongoose = require('mongoose')

module.exports = mongoose.model('employee',
{
    Name     : {type:String},
    position : {type:String},
    Accomplished : {type:String},
    mood     : {type:String}

})