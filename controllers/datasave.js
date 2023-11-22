const database = require('../database');
const datasaver = (request,response)=>{

    const fname = request.body.firstname;
    const lname = request.body.lastname;
    const roll = request.body.Roll;
    const stream = request.body.Stream;
    const email = request.body.email;
    const date = request.body.date;

    const query = `
    INSERT INTO users(firstname,lastname, Roll, Stream, email, date)
    VALUES("${fname}","${lname}","${roll}","${stream}","${email}","${date}")`;

    

    database.sequelize.query(query, function(error, data){
        if(error)
        {
            throw error;
        }else{
            response.redirect('/result')
        }
    })
};


module.exports = {
    datasaver
}