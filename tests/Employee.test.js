const Employee =  require('../lib/Employee')

test("To check if the Employee constructor will render", () => {
expect(employee.name).toBe('Orlando');
expect(employee.id).toBe('QIV732');
expect(employee.emailAddress).toBe('nelson8223@gmai.com');

})

test("test if we can render the getName()", () => {
expect(employee.getName()).toBe('Orlando');

})
test("test if we can render the getId()", () => {
    expect(employee.getID()).toBe('QIV732');
})

test("test if we can render the getEmailAddress()", () => {
    expect(employee.getEmailAddress()).toBe('nelson8223@gmai.com');

})

