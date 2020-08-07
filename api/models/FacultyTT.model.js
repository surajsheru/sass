const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const FacTT = sequelize.define('FacTT', {
        acy: {
            type: Sequelize.STRING
            
              },
              sem: {
      type: DataTypes.INTEGER
      
        },
        clsid: {
      type: Sequelize.STRING
      },
      day: {
        type: Sequelize.STRING
        },
      pno: {
        type: DataTypes.INTEGER
        },
        empid: {
            type: Sequelize.STRING
            },
      subcode: {
        type: Sequelize.STRING
        }
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return FacTT;
  }