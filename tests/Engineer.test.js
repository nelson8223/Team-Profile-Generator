const Employee = require('./Employee.test');


class Engineer extends Employee {
  constructor (employeeID, name, role ) {
    super(employeeID, 'Orlando', 'Engineer' )
    this.employeeID = employeeID;
    this.name = name;
    this.role = role;
  }

}

checkEmployee(); {
    console.log(`The Engineer name is ${this.name} and their ID is ${this.employeeID} .  `)
}

const engineer = new Engineer( QIV732, 'Orlando', 'Engineer')
engineer.printInfo();
engineer.checkEmployee();