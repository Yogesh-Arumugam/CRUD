const { model } = require("mongoose")

exports.generateCrudMethods = Model =>{
    return {
        getAll:() => Model.find(), 
        getById : id => Model.findById(id),
        create : record => Model.create(record),
        update: (id, record) => model.findByIdAndUpdate(id, record,{ new:true }),
        delete: id => model.findByIdAndDelete(id)
    }
}