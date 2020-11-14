import Person from '../js/person.js';

export default class LifeSpan {
  constructor (gender, continent, exercisePerWeek, smoker, lifeExpectancy) {
    this.gender = gender; 
    this.continent = continent;
    this.exercisePerWeek = exercisePerWeek;
    this.smoker = smoker;
    this.lifeExpectancy = lifeExpectancy;
  }

  calculateLifeSpan() {
    let lifeAge = this.lifeExpectancy;
    let gender = this.gender;
    const genderArray = ["non-binary", "female", "male"];
    genderArray.forEach(function(element) {
      if (gender === "non-binary") {
        lifeAge = 83;
      } else if (gender === "female") {
        lifeAge = 80;
      } else {
        lifeAge = 74;
      }
    });
    return lifeAge;
  }
  calculateContinent() {
    let lifeAge = this.lifeExpectancy;
    let landMass = this.continent;
      if (landMass === "North America" || landMass === "South America" || landMass === "Antarctica" || landMass === "Asia") {
        lifeAge += -10;
        return lifeAge
      } else {
        return lifeAge;
      }
  }
}
