const Employee = require('./Employee.test');


const Employee =  require('../lib/Employee')
const Manager = require('../lib/Manager')

test("To check if the Manager constructor will render", ()=> {
  expect(employee.name).toBe('Chris');
  expect(employee.id).toBe('JJK948');
  expect(employee.emailAddress).toBe('ChrisPual@gmai.com');
  expect(employee.officeNumber).toBe("804-552-8895");
})
test("test if we can render the getName()", () => {
  expect(employee.getName()).toBe('John');

})  