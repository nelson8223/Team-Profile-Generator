class Employee {
constructor(employeeID, emailAddress,name, role ) {
    this.employeeID = employeeID;
    this.emailAddress = emailAddress;
    this.name = name;
    this.role= role;

}}


printInfo(); {
    console.log(`The Employee name is ${this.name} and their employee ID is ${this.employeeID} .  `)
    console.log(`The associate email address is  ${this.emailAddress}.  `)
    console.log(`Their current role at the Company is  ${this.role}.  `)
}

module.exports = Employee;
