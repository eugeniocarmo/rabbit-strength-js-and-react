export default class Rabbit {
  constructor(energy) {
    this.energy = energy;
  }

  declareStrengh() {
    if (this.energy >= 51) {
      return "I'm a young Rabbit";
    } else {
      return "I'm an old Rabbit";
    }
  }
}
