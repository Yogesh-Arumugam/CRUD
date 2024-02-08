const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://admin:123abc@cluster0.qdrkskp.mongodb.net/employee_db?retryWrites=true&w=majority'



module.exports = ()=>{
    return mongoose.connect(dbUri)

  }


            
