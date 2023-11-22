module.exports=(sequelize, Sequelize) =>{
    const User = sequelize.define('user', {
        firstname :{
          type: Sequelize.STRING,
          allowNull: false
        },
        lastname :{
          type: Sequelize.STRING,
          allowNull: false
        },
        roll :{
          type: Sequelize.INTEGER,
          allowNull: false
        },
        stream :{
          type: Sequelize.STRING,
          allowNull: false
        },
        email:{
          type: Sequelize.STRING,
          allowNull: false
        },
        date:{
          type: Sequelize.DATEONLY
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        }
      }
    );
    return User;
}


    
  
   