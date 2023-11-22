
const database = require('../database');
const show = (req, res) =>{
    let query= "SELECT * FROM users";
    if(req?.query?.search){
        query+= " WHERE firstname LIKE '%"+ req?.query?.search +"%' OR lastname LIKE '%"+ req?.query?.search +"%' OR roll LIKE '%" + req?.query?.search +"%' OR stream LIKE '%"+ req?.query?.search +"%' OR date LIKE '%"+ req?.query?.search +"%' OR email LIKE '%" + req?.query?.search + "%'";
    }
    

    database.sequelize.query(query).then((alldata)=>{
        res.render("result",{alldata:alldata[0]})
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = {
    show
}