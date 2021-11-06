const mysql = require('mysql2');
const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // {TODO: Add your MySQL password}
      password: 'mer1z1ana93',
      database: 'employee_db',
    },
    
  );

connection.connect(function(error){
    if ( error) throw error
}   
);

module.exports = connection