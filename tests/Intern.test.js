const Employee = require('../lib/Employee');
const Intern = require("../lib/Intern")


test("To check if the Intern constructor will render", ()=> {
  expect(employee.name).toBe('John');
  expect(employee.id).toBe('DFG995');
  expect(employee.emailAddress).toBe('John998@gmai.com');
  expect(employee.school).toBe("Virginia Union");
})
test("test if we can render the getName()", () => {
  expect(employee.getName()).toBe('John');

})  
test("test if we can render the getID()", () => {
  expect(employee.getID()).toBe('DFG995');
})  
test("test if we can render the getEmailAddress()", () => {
  expect(employee.getEmailAddress()).toBe('John998@gmai.com');
})
test("test if we can render the getSchool()", () => {
  expect(employee.getSchool()).toBe('Virginia Union');
})
