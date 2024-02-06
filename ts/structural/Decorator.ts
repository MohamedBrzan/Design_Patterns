class MackBook {
  cost: number;
  constructor(cost: number) {
    this.cost = cost;
  }
  getCost(): number {
    return this.cost;
  }
}

function Memory(mb: MackBook) {
  mb.cost = 77 + mb.getCost();
}

function Keyboard(mb: MackBook) {
  mb.cost = 66 + mb.getCost();
}

function Engraving(mb: MackBook) {
  mb.cost = 101 + mb.getCost();
}

const mb = new MackBook(300);
Memory(mb);
Keyboard(mb);
Engraving(mb);

console.log(mb.getCost())
