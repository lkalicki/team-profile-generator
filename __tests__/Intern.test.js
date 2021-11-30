const Intern = require('../lib/Intern');

test('internObject', () => {
    const intern = new Intern('Lukasz', 118, 'lukasz.test@gmail.com', 'UConn');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('internSchool', () => {
    const intern = new Intern('Lukasz', 118, 'lukasz.test@gmail.com', 'UConn');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('internRole', () => {
    const intern = new Intern('Lukasz', 118, 'lukasz.test@gmail.com', 'UConn');

    expect(intern.getRole()).toEqual("Intern");
}); 