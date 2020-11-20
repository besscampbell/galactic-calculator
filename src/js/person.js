export default class Person {
  constructor (earthAge, lifeExpect, galaxyAges, galaxyLifeExpect) {
    this.earthAge = earthAge;
    this.lifeExpect = lifeExpect;
    this.galaxyAges = [];
    this.galaxyLifeExpect = [];
  }

  spaceAges() {
    const planetCalculator = [.24, .62, 1, 1.88, 11.86];
    planetCalculator.forEach((number) => {
      this.galaxyAges.push(Math.round(this.earthAge/number));
    });
    return this.galaxyAges;
  }

  spaceLifeExpect() {
    const planetCalculator = [.24, .62, 1, 1.88, 11.86];
    let yearsLeft = this.lifeExpect - this.earthAge;
    planetCalculator.forEach((number) => {
      this.galaxyLifeExpect.push(Math.round(yearsLeft/number));
    });
    let [mercury, venus, earth, mars, jupiter] = this.galaxyLifeExpect
    if (yearsLeft >= 0) {
      return this.galaxyLifeExpect;
    } else {
      let message = `You have lived ${Math.abs(mercury)} Mercurian, ${Math.abs(venus)} Venusian, ${Math.abs(earth)} Earthling, ${Math.abs(mars)} Martian, ${Math.abs(jupiter)} Jupitian years past when you were expected to, keep on defying the odds!`;
      return message;
    }
  }
};