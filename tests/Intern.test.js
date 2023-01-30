const Employee = require('./Employee.test');


class Intern extends Employee {
  constructor (employeeID, name, role ) {
    super(employeeID, 'Ann', 'Intern' )
    this.employeeID = employeeID;
    this.name = name;
    this.role = role;
  }

}

checkEmployee(); {
    console.log(`The Intern name is ${this.name} and their ID is ${this.employeeID} .  `)
}

const intern = new Intern( ASK441, 'Ann', 'Intern')
Intern.printInfo();
Intern.checkEmployee();