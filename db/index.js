const connection = require('./connection');

class DB {
    
        // create a class and make sure the constructor conectes the mysql conection
    constructor(connection){
        this.connection =  connection
    }

    
    //create query fucntions to call on the front end

    //employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    findAllDepartments(){
        return this.connection.promise().query('SELECT department.name FROM Department JOIN role on role.department_id = department.id;')
    }
    findAllEmployees(){
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, concat(manager.first_name, " ", manager.last_name) AS manager FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id JOIN employee manager ON employee.manager_id = manager.id;')
    }
    //role id, title, department name, salary
    findAllRoles(){
        return this.connection.promise().query('SELECT role.id, role.title, role.salary, department.name FROM role JOIN department ON role.department_id = department.id;')
    }

    createEmployee(employee){
        return this.connection.promise().query('INSERT INTO employee SET ?', employee);
    }
}


//export new class with connection being passed in
module.exports = new DB(connection);

