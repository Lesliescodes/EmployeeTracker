const { prompt } = require('inquirer');
require('console.table');
const db = require('./db');


function start() {
    questions()
}


function questions() {
    prompt([
        {
            type: 'list',
            name: 'option',
            message: 'What would you like to do?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit']
        }
    ]).then((res) => {
        switch (res.option) {
            case 'view all employees':
                viewAllEmployees();
                break;
            case 'view all departments':
                viewAllDepartments()
                break;
            case 'view all roles':
                viewAllRoles();
                break;
            case 'add a department':
                addDepartment()
                break;
            case 'add a role':
                addRole();
                break;
            case 'add an employee':
                addEmployee();
                break;
            case 'update an employee role':
                updateEmployee();
                break;
            default:
                process.exit()
        }
    })
}

function viewAllEmployees() {
    db.findAllEmployees().then(([data]) => {
        console.table(data)
    }).then(() => questions());
}
function viewAllDepartments() {
    db.findAllDepartments().then(([data]) => {
        console.table(data)
    }).then(() => questions());
}
function viewAllRoles() {
    db.findAllRoles().then(([data]) => {
        console.table(data)
    }).then(() => questions());
}
// In the future i want to have add department fully functional
function addDepartment() {
    prompt([
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter new department name'
        },
        // {
        //     type: 'input',
        //     name: 'show_room',
        //     massage: 'Gallery is default',
        // },

    ]).then((res) => {
        // let department = res.department_id
    })
}
function addEmployee() {
    // prompt user to type new employee first name and last name
    prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter First Name',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter Last Name'
        },
    ]).then((res) => {
        let first = res.first_name;
        let last = res.last_name;

        db.findAllRoles().then(
            ([data]) => {

                const allRolesAvailble = data.map(({ title, id }) => ({
                    name: title,
                    value: id
                }));

                //create a list of existing roles for the user to choose from
                prompt([
                    {
                        type: 'list',
                        name: 'roleId',
                        message: "What Role should the employee have?",
                        choices: allRolesAvailble
                    }
                ]).then((res) => {
                    let roleId = res.roleId

                    //create a list of employees to select the manager

                    db.findAllEmployees().then(([data]) => {

                        const findAllEmployees = data.map(({ id, first_name, last_name }) => ({
                            name: `${first_name} ${last_name}`,
                            value: id
                        }));

                        prompt([{
                            type: 'list',
                            name: 'manId',
                            message: "Who is the manager?",
                            choices: findAllEmployees
                        }]).then((data) => {

                            let newEmployee = {
                                first_name: first,
                                last_name: last,
                                role_id: roleId,
                                manager_id: data.manId
                            }


                            //save it to the DB
                            db.createEmployee(newEmployee)
                            //run the question function again
                        }).then(() => questions());



                    })

                })


            })
    })


}



start();



