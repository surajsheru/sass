const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const Emp_Office = sequelize.define('Emp_Office', {
      empid: {
      type: Sequelize.STRING
      
        },
      emptype: {
        type: Sequelize.STRING
        },
      emppan: {
        type: Sequelize.STRING
        },
        empaadhar: {
          type: Sequelize.STRING
          },
          empacno: {
            type: DataTypes.BIGINT
            },
            empbasic: {
              type: DataTypes.DOUBLE
              },
              empagp: {
                type: DataTypes.DOUBLE
                },
                empspl: {
                  type: DataTypes.DOUBLE
                  },
                  empdoj: {
                    type: DataTypes.DATEONLY
                    },
                    empdop: {
                      type: DataTypes.DATEONLY
                      },
                      empinc: {
                        type: DataTypes.DATEONLY
                        }
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return Emp_Office;
  }