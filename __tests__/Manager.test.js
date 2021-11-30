const Manager = require('../lib/Manager');

test('managerObject', () => {
    const manager = new Manager('Lukasz', 118, 'lukasz.test@gmail.com', 3);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('managerRole', () => {
    const manager = new Manager('Lukasz', 118, 'lukasz.test@gmail.com',3);

    expect(manager.getRole()).toEqual("Manager");
}); 