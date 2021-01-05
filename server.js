const inquirer = require("inquirer");
const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345",
  database: "employee_db",
});

connection.query = util.promisify(connection.query);
connection.connect(function (err) {
  if (err) throw err;
  menu();
});

function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "main",
        message: "What would you like to do?",
        choices: [
          "View all departments.",
          "View all employees.",
          "Add employee.",
          "Delete employee.",
          "Get employees by manager.",
          "Update role.",
        ],
      },
    ])
    .then(function (answer) {
      switch (answer.main) {
        case "View all departments.":
          getAllDepartments();
          break;
        case "View all employees.":
          getAllEmployees();
          break;
        case "Add employee.":
          addEmployees();
          break;
        case "Delete employee.":
          deleteEmployee();
          break;
        case "Get employees by manager.":
          getEmployeeByManager();
          break;
        case "Update role.":
          updateRoles();
          break;
      }
    });
}

function getAllEmployees() {
  let query =
    "SELECT employee.id, employee.first_name, employee.last_name, employee.roles_id, employee.manager_id, employee.department_name";
  query += "FROM employee";

  connection.query(query, function (err, res) {
    console.table("All Employees", res);
  });
}

function getAllRoles() {}
function getAllDepartments() {}
function addDepartments() {}
function addRoles() {}
function addEmployees() {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is the employees first name?",
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the employees last name?",
      },
      {
        name: "roleId",
        type: "input",
        message: "What is the employees role id?",
      },
      {
        name: "managerId",
        type: "input",
        message: "What is the employees managers ID?",
      },
    ])
    .then(function (answer) {
      connection.query("INSERT INTO employee SET ?", {
        first_name: answer.firstName,
        last_name: answer.lastName,
        roles_id: answer.roleId,
        manager_id: answer.managerId,
      });
    });
}
function updateRoles() {}
function getEmployeeByManager() {}
function deleteEmployee() {}
