const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const Emp_Ded = sequelize.define('Emp_Ded', {
      empid: {
      type: Sequelize.STRING
      
        },
            empLic: {
              type: DataTypes.DOUBLE
              },
              empIt: {
                type: DataTypes.DOUBLE
                },
                empcpf: {
                  type: DataTypes.DOUBLE
                  },
                  empother: {
                    type: DataTypes.DOUBLE
                    },
                  empdosal: {
                    type: DataTypes.DATEONLY
                    }
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return Emp_Ded;
  }