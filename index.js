const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const fs = require("fs");
const inquirer = require('inquirer');
const employeeGenerator = require('./employeeGenerator')

const teamGroup = []

const employeeTypeQuestion = [
  {

        type: 'list',
        message: 'Please select this employee you want to add',
        name: 'name',
      },
      {
      type: 'list',
      message: 'Please select the employee type you wish to add:',
      name: "teamGroup",
      choices: [
        {name:'Engineer', value:'engineer', short:'Engineer' },
        {name: "Intern", value:"intern", short: 'Intern'},
        {name:"None", value:"none", short:"None"},

      ],
       
    }
  ];

   teamGroup = await inquirer.prompt(employeeTypeQuestion);
  
  if (teamGroup === "none") {
    isTeamComplete = true;
    
  } else {
    if(teamGroup === "engineer") {
      await createEngineer();
    
  }
  if (teamGroup === "intern") {
    await createIntern();
  }


.then(function (response) {
  
        const newManager = new Manager( 
          response.name
        )
   console.log(newManager)
   teamGroup.push(newManager)
   init()
    });

    if (teamGroup ==="none") {
      await createEngineer();
      
    } else {
      if(teamGroup === "intern"){
        await createIntern()
      }
      
    }

    const newEngineer = new Engineer(
      response.name
    )
    console.log(newEngineer)
   teamGroup.push(newEngineer)
   init()
    
   const newIntern = new Intern(
    response.name
  )
  console.log(newIntern)
 teamGroup.push(newIntern)
 init()



    // function writeToFile(fileName, data) {}

    function init() {

    //     const createHTML = employeeGenerator(teamGroup)
    //     console.log(createHTML)
    //   fs.writeFile("./index.html", createHTML, (err)=>{ 
    //    if (err) throw new Error('something went wrong')
    //   } )
      

    // }

  }

  const createManager = async () => {

const managerQuestions = [
{
  type: "input",
  message: "Enter manager name",
  name: "name",
  
},
{
  type: "input",
  message: "Enter your office number",
  name: "officeNumber",
},
{
  type: "input",
  message: "Enter employee ID",
  name: "employeeId",
},
{
  type: "input",
  message: "Enter email address",
  name: "emailAddress",

},
]
const managerAnswer = await inquirer.prompt(managerQuestions);

const manager = new Manager(managerAnswer);
employeeGenerator.push(manager);
  },

  const createEngineer = async() =>{
 
    const engineerQuestions = [
   {
    type: "input",
    message: " Please enter Engineer name",
    name: "name",
    },
    {
      type: "input",
      message: "Please enter engineer ID",
      name: "employeeId"

    },
    {
      type: "input",
      message: "Please enter engineer github profile",
      name: "github"

    }


    ];

    const engineerAnswers = await inquirer.prompt(engineerQuestions);

    const engineer = new Engineer(engineerAnswers);

    employee.push(engineer);

    const createIntern = async() =>{

      const internQuestions = [
     {
      type: "input",
      message: " Please enter Intern ID",
      name: "name",

     },
     {
     type: "input",
      message: " Please enter Intern name",
      name: "employeeId",
     },
     {
     type: "input",
     message: " Please enter Intern name",
     name: "employeeId",
     },
     {
      type: "input",
      message: " Please enter Intern email address",
      name: "emailAddress",

     },
     {
      type: "input",
      message: " Please enter Intern school",
      name: "school",

     },
      ]
     const internAnswers = await inquirer.prompt(internQuestions);

    const intern = new Intern(internAnswers);

    employee.push(intern);


    init();



    function init() {

      const createHTML = employeeGenerator(teamGroup)
      console.log(createHTML)
    fs.writeFile("./index.html", createHTML, (err)=>{ 
     if (err) throw new Error('something went wrong')
    } )
    

  }
     



      

    }




  }













}