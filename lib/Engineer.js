const Employee = require('./Employee')


class Engineer extends Employee {
    constructor(employeeId, emailAddress,name, Github) {
    super(employeeId, emailAddress,name)
    this.Github = Github

    }
    getGithub() {
        return this.Github
    }
    getRole(){
        return "Engineer"
}
}
module.exports = Engineer;
