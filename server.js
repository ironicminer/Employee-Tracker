const inquirer = require("inquirer");
const mysql = require("mysql");
const util = require("util");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:root,
    password: "12345",
    database:,
});

connection.query = util.promisify(connection.query);
connection.connect(function (err){
    if (err) throw err;
});


function menu(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "",
                message: "What would you like to do?",
                choices: [
                    
                ]

            }
        ])
        .then(function (){



        })
}