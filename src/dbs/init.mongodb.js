'use strict'

const {db :  {host , port ,name}  } = require('../configs/config.mongodb');
const mongoose = require('mongoose')

const connectString = `mongodb://${host}:${port}/${name}`
console.log(`connectString : `,connectString);
const {countConnect} = require('../helpers/check.connect')

class Database{

    constructor(){
        this.connect()
    }

    connect(type = 'mongodb'){
        if(1 === 1){
            mongoose.set('debug',true)
            mongoose.set('debug',{colur : true})
        }
        mongoose.connect(connectString,{maxPoolSize : 100}).then( _ => console.log(`Connected Mongodb Success` ))
        .catch(err => console.log(`Err Connect!`))
    }

    static getInstance() {
        if(!Database.instance){
            Database.instance = new Database()
        }

        return Database.instance
    }

}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb