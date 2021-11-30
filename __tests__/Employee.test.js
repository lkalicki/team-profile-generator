const Employee = require('../lib/Employee');

test('employeeObject', () => {
    const employee = new Employee('Lukasz', 118, 'lukasz.test@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('employeeName', () => {
    const employee = new Employee('Lukasz', 118, 'lukasz.test@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('employeeId', () => {
    const employee = new Employee('Lukasz', 118, 'lukasz.test@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('employeeEmail', () => {
    const employee = new Employee('Lukasz', 118, 'lukasz.test@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('employeeRole', () => {
    const employee = new Employee('Lukasz', 118, 'lukasz.test@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 