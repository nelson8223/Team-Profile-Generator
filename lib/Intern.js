const Employee = require('./Employee')


class Intern extends Employee {
    constructor(employeeId, emailAddress,name, school) {
    super(employeeId, emailAddress,name)
    this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole(){
        return "Intern"
}

}

module.exports = Intern;