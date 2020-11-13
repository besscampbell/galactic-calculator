import Person from '../src/js/person.js';

describe( 'Person', () => {

  let person;

  beforeEach(() =>{
    person = new Person(35, 86, [], [])
  })
  test('should correctly create a person object with properties for their Earth age, their life expectancy, and  an array for their galaxy age', () => {
    expect(person.earthAge).toEqual(35);
    expect(person.lifeExpect).toEqual(86);
    expect(person.galaxyAges).toEqual([]);
    expect(person.galaxyLifeExpect).toEqual([]);
  });

  test('should create an array to loop through to calculate the age on all the planets', () => {
    expect(person.spaceAges()).toEqual([146, 56, 35, 19, 3]);
  });

  test('should correctly determine how many years a user has left to live on each planet', () => {
    expect(person.spaceLifeExpect()).toEqual([213, 82, 51, 27, 4])
  });

    test ('should correctly display the years live past life expectancy for all planets', () => {
    let person2 = new Person (99, 89, [], []);
    expect(person2.spaceLifeExpect()).toEqual("You have lived 42 Mercurian, 16 Venusian, 10 Earthling, 5 Martian, 1 Jupitian years past when you were expected to, keep on defying the odds!")
    });
});

 