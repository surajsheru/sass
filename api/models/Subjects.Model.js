module.exports = (sequelize, Sequelize) => {
    const Subjects = sequelize.define('Subject', {
        acy: {
            type: Sequelize.STRING
            
              },
              branch: {
      type: Sequelize.STRING
      
        },
              subcode: {
      type: Sequelize.STRING
      
        },
      subname: {
      type: Sequelize.STRING
      },
      co1: {
        type: Sequelize.STRING
        },
        co2: {
          type: Sequelize.STRING
          },
      co3: {
        type: Sequelize.STRING
        },
        co4: {
          type: Sequelize.STRING
          },
          co5: {
            type: Sequelize.STRING
            }
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return Subjects;
  }