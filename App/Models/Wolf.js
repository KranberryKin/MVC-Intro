export class Wolf {

  isHungry = getRandomBoolean();
  isInjured = false;
  isDead = false;
  constructor(name) {
    this.name = name
  };


  getRandomBoolean() {
    let x = Math.floor((Math.random() * 10) % 2);
    switch (x) {
      case 0:
        return false;
      case 1:
        return true;
    };
  };

}