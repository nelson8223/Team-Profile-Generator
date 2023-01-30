class Employee {
    constructor(employeeId, emailAddress,name ) {
        this.employeeId = employeeId;
        this.emailAddress = emailAddress;
        this.name = name;
    }

    getId() {
        return this.employeeId
    }
   
    getEmailAddress(){
        return this.emailAddress
    }

    getName() {
        return this.name
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;