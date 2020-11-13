import Person from '../src/js/person.js';

describe( 'Person', () => {

  let person;

  beforeEach(() =>{
    person = new Person(35, 86, [])
  })
  test('should correctly create a person object with properties for their Earth age, an array for their galaxy age, and their life expectancy', () => {
    expect(person.earthAge).toEqual(35);
    expect(person.lifeExpect).toEqual(86);
    expect(person.galaxyAges).toEqual([]);
  });

  test('should correctly caluculate persons age on Mercury', () => {
    expect(person.galaxyAges.spaceAge()).Equal([146])

  });
});

