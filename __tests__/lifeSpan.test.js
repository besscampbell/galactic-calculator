import LifeSpan from '../src/js/lifeSpan.js';
import Person from '../src/js/person.js';

describe( 'LifeSpan', () => {

  let lifeSpan;
  let person;

  beforeEach(() => {
    person = new Person (35, 0, [], []);
    lifeSpan = new LifeSpan ("female", "Asia", 4, false, 0)
  });
  test('should correctly create a life span object with properties for gender, continent, exercise, smoker, life expectancy', () => {
    expect(lifeSpan.gender).toEqual("female");
    expect(lifeSpan.continent).toEqual("Asia");
    expect(lifeSpan.exercisePerWeek).toEqual(4);
    expect(lifeSpan.smoker).toBeFalsy();
    expect(lifeSpan.lifeExpectancy).toEqual(0)
  });
  test('should correctly assign a base life expectancy based on gender', () => {
    expect(lifeSpan.calculateLifeSpan()).toEqual(82);
  });
});