const Engineer = require('../lib/Engineer')
const Employee =  require('../lib/Employee')

test("To check if the Engineer constructor will render", ()=> {
  expect(employee.name).toBe('Mary');
  expect(employee.id).toBe('ASK145');
  expect(employee.emailAddress).toBe('Mary8223@gmai.com');
  expect(employee.Github).toBe("https://github.com/");

})
test("test if we can render the getName()", () => {
  expect(employee.getName()).toBe('Mary');
})  

test("test if we can render the getID()", () => {
  expect(employee.getID()).toBe('ASK145');
})  

test("test if we can render the getEmailAddress()", () => {
  expect(employee.getEmailAddress()).toBe('Mary8223@gmai.com');
})
test("test if we can render the getGibHub()", () => {
  expect(employee.getGibHub()).toBe('https://github.com/');
})







