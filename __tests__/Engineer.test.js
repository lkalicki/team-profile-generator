const Engineer = require('../lib/Engineer');

test('engineerObject', () => {
    const engineer = new Engineer('Lukasz', 118, 'lukasz.test@gmail.com', ' lkalicki');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('engineerGithub', () => {
    const engineer = new Engineer('Lukasz', 118, 'lukasz.test@gmail.com', ' lkalicki');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('engineerRole', () => {
    const engineer = new Engineer('Lukasz', 118, 'lukasz.test@gmail.com', ' lkalicki');

    expect(engineer.getRole()).toEqual("Engineer");
});