const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    passport: 'password',
    port: 5432,
});

const getUsers = (request,response) =>{
    pool.query('SELECT * from users ORDER BY id ASC',(error,results)=>{
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}