const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const FacSubjects = sequelize.define('FacSubject', {
        acy: {
            type: Sequelize.STRING
            
              },
              subcode: {
      type: Sequelize.STRING
      
        },
      clsid: {
      type: Sequelize.STRING
      },
      year: {
        type: DataTypes.INTEGER
        },
        sem: {
          type: DataTypes.INTEGER
          },
      empid: {
        type: Sequelize.STRING
        }
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return FacSubjects;
  }