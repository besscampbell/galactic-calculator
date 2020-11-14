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
}
