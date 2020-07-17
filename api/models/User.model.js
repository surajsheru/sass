module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
      un: {
      type: Sequelize.STRING
      
        },
      pwd: {
      type: Sequelize.STRING
      },
      utype: {
        type: Sequelize.STRING
        }
    },{
      timestamps: false
    });
    
    return User;
  }