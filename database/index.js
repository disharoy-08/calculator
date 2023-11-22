const dbConfig = require('../config').DB;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.dbName,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        logging: dbConfig?.enableLog?console.log:false
    }
);

sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
}).catch((error)=>{
    console.error(`Unable to connect to the database ${error}`);
});

sequelize.sync({alter:false, force:false});

module.exports = {
    Sequelize,
    sequelize
};

