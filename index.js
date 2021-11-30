const fs = require('fs'); 
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const generateHTML = require('./src/html-template');

const teamArray = []; 

const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Who is the team manager? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of the team manager!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the manager's employee ID? (Required)",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the manager's employee ID!");
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address? (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the manager's email address!");
            return false;
          }
        }
    },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number? (Required)",
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter the manager's office number!");
            return false;
          }
        }
    }
  ])
  .then(managerInput => {
    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager); 
    console.log(manager); 
    })
};

const addEmployee = () => {
    console.log(`
    =================
    Add employees to the team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?", 
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter the employee's name!");
                  return false;
                }
              }
            },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log ("Please enter the employee's ID!")
                  return false; 
                } 
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log ("Please enter the employee's email address!")
                  return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the Engineer's github username.",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput ) {
                    return true;
                } else {
                    console.log ("Please enter the Engineer's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school name.",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ("Please enter the Intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        teamArray.push(employee); 
        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html (in the dist folder).")
        }
    })
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Style sheet copied successfully!');
    });
  };  


addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
});


