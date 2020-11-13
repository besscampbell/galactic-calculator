export default class Person{
  constructor(earthAge, lifeExpect, galaxyAges, galaxyLifeExpect) {
    this.earthAge = earthAge;
    this.lifeExpect = lifeExpect;
    this.galaxyAges = [];
    this.galaxyLifeExpect = [];
  }

  spaceAges() {
    const planetCalculator = [.24, .62, 1.88, 11.86]
    let age = this.earthAge
    let planets = this.galaxyAges
    planetCalculator.forEach(function(number) {
      planets.push(Math.round(age/number));
    });
    return this.galaxyAges;
  }
};