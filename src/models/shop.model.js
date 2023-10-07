'use strict'

const {model,Schema,Types} = require('mongoose')

// Declare the Schema of the Mongo model
var shopSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        maxLength:150
    },
    email:{
        type:String,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    status : {
        type:String,
        enum : ['active','inactive'],
        default : 'inactive'
    },
    verify : {
        type : SchemaType.Types.Boolean,
        deafult : false
    },
    roles : {
        type : Array,
        default : []
    }

},{
    timestamps : true,
    collection : COLLECTION_NAME
});

//Export the model
module.exports = mongoose.model('User', userSchema);