const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const Emp_Leave = sequelize.define('Emp_Leaves', {
      empid: {
      type: Sequelize.STRING
      
        },
      empcls: {
        type: DataTypes.DOUBLE
        },
        empels: {
          type: DataTypes.DOUBLE
          },
          empvac: {
            type: DataTypes.DOUBLE
            },
            empml: {
              type: DataTypes.DOUBLE
              },
              emplop: {
                type: DataTypes.DOUBLE
                }
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return Emp_Leave;
  }