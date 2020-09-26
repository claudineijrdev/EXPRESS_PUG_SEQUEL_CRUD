const { DataTypes } = require('sequelize')
const sequelize = require('./index')


const event = sequelize.define('Event',{
     name: DataTypes.STRING,
     description: DataTypes.TEXT
})

module.exports = event

/*module.exports = (sequelize, DataTypes) =>{
     return sequelize.define('event', {
          name: DataTypes.STRING,
          description: DataTypes.TEXT
     })
}*/