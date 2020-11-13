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
};