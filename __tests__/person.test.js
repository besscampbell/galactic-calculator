import Person from '../src/js/person.js';

describe( 'Person', () => {
  test('should correctly create a person object with properties for their Earth age, an array for their galaxy age, and their life expectancy', () => {
    const person = new Person(35, [], 86);
    expect(person.earthAge).toEqual(35);
    expect(person.galaxyAges).toBeUndefined([]);
    expect(person.lifeExpect).toEqual(86);
  });
});

