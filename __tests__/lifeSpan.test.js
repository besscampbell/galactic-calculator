import LifeSpan from '../src/js/lifeSpan.js';
import Person from '../src/js/person.js';

describe( 'LifeSpan', () => {

  let lifeSpan;
  let person;

  beforeEach(() => {
    person = new Person (35, 0, [], []);
    lifeSpan = new LifeSpan ("female", "Asia", 4, false, 7)
  });
  test('should correctly create a life span object with properties for gender, continent, exercise, smoker, drinks', () => {
    expect(lifeSpan.gender).toEqual("female");
    expect(lifeSpan.continent).toEqual("Asia");
    expect(lifeSpan.exercisePerWeek).toEqual(4);
    expect(lifeSpan.smoker).toBeFalsy();
    expect(lifeSpan.drinksPerWeek).toEqual(7);
  });
});