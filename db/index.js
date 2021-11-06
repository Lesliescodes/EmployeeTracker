const connection = require('./connection');

class DB {
    
        // create a class and make sure the constructor conectes the mysql conection
    constructor(connection){
        this.connection =  connection
    }

    
    //create query fucntions to call on the front end

    findAllEmployees(){
        return this.connection.promise().query('')
    }
}


//export new class with connection being passed in
module.exports = new DB(connection);

