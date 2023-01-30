const Employee = require('./Employee.test');


class Manager extends Employee {
  constructor (employeeID, name, role ) {
    super(employeeID, 'Mary', 'Manager' )
    this.employeeID = employeeID;
    this.name = name;
    this.role = role;
  }

}

checkEmployee(); {
    console.log(`The Manager name is ${this.name} and their ID is ${this.employeeID} .  `)
}

const manager = new Manager( KGG987, 'Mary', 'Manager')
Manager.printInfo();
Manager.checkEmployee();