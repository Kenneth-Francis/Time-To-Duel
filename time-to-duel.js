class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}


class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
    console.log(`${this.name} is put into play.`, '\n', this, '\n');
  }

  attack(target) {
    if (target instanceof Unit) {
      console.log(`${this.name} attacks ${target.name}!`);
      target.res -= this.power;
      target.res <= 0 ?
        console.log(`${target.name} succumbs to their wounds! Remove from play.`) :
        console.log(target, '\n');

    } else {
        throw new Error("Target must be a unit!");
    }
  }
}

class Effect extends Card{
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }

  play(target) {
    if (target instanceof Unit) {
      console.log(`${this.name} is played on ${target.name}: ${this.text}!`);
      this.stat === "resilience" ?
        target.res += this.magnitude : target.power += this.magnitude;
        console.log(target, '\n');

    } else {
        throw new Error("Target must be a unit!");
    }
  }
}

// Make an instance of Red Belt Ninja
const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);

// Make an instance of Hard Algorithm and play it on Red Belt Ninja
const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);
effect1.play(unit1);

// Make and instance of Black Belt Ninja
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4)

// Make an instance of Unhandled Promise Rejection and play it on Red Belt Ninja
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
effect2.play(unit1);

// Make an instance of Pair Programming and play it on Red Belt Ninja
const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2)
effect3.play(unit1)

// Red Belt Ninja uses the attack method on Black Belt Ninja
unit1.attack(unit2);
