const Employee = require('./Employee')


class Manager extends Employee {
constructor(employeeId, emailAddress,name, officeNumber){
 super(employeeId, emailAddress,name)
 this.officeNumber = officeNumber;

}

getOfficeNumber() {
    return this.officeNumber
}
getRole(){
    return "Manager"
}

}

module.exports = Manager;