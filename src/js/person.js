export default class Person{
  constructor(earthAge, lifeExpect, galaxyAges) {
    this.earthAge = earthAge;
    this.lifeExpect = lifeExpect;
    this.galaxyAges = [];
  }
  spaceAge() {
    this.galaxyAges.push(Math.round(this.earthAge/.24));
    return this.galaxyAges;
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