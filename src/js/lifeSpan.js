import Person from '../js/person.js';

export default class LifeSpan {
  constructor (gender, continent, exercisePerWeek, smoker, lifeExpectancy) {
    this.gender = gender; 
    this.continent = continent;
    this.exercisePerWeek = exercisePerWeek;
    this.smoker = smoker;
    this.lifeExpectancy = lifeExpectancy;
  }
}