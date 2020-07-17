module.exports = (sequelize, Sequelize) => {
    const Emp_Info = sequelize.define('Emp_Info', {
      empid: {
      type: Sequelize.STRING
      
        },
      empname: {
      type: Sequelize.STRING
      },
      empsname: {
        type: Sequelize.STRING
        },
        empgen: {
          type: Sequelize.STRING
          },
      empdes: {
        type: Sequelize.STRING
        },
        empdept: {
          type: Sequelize.STRING
          },
          empqua: {
            type: Sequelize.STRING
            },
            empphno: {
              type: Sequelize.STRING
              },
              empemail: {
                type: Sequelize.STRING
                }
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return Emp_Info;
  }