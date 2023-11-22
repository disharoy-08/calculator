const {sequelize, Sequelize} = require('../index');
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./user')(sequelize, Sequelize);

module.exports={
    db
};

