//**************************************/
//*********** Adapter Design Pattern ***/
//**************************************/
// class OldCalculation {
//   operation: (num1: number, num2: number, type: string) => number | string;
//   constructor() {
//     this.operation = (
//       num1: number,
//       num2: number,
//       type: string
//     ): number | string => {
//       switch (type) {
//         case 'add':
//           return num1 + num2;
//         case 'subtract':
//           return num1 - num2;
//         case 'multiply':
//           return num1 * num2;
//         case 'divide':
//           return num1 / num2;
//         default:
//           return 'wrong operation type';
//       }
//     };
//   }
// }
// const oldCalc = new OldCalculation();
// console.log('oldCalc', oldCalc.operation(3, 5, 'add'));
// class NewCalculation {
//   add: (num1: number, num2: number) => number;
//   subtract: (num1: number, num2: number) => number;
//   multiply: (num1: number, num2: number) => number;
//   divide: (num1: number, num2: number) => number;
//   constructor() {
//     this.add = (num1: number, num2: number): number => {
//       return num1 + num2;
//     };
//     this.subtract = (num1: number, num2: number): number => {
//       return num1 - num1;
//     };
//     this.multiply = (num1: number, num2: number): number => {
//       return num1 * num2;
//     };
//     this.divide = (num1: number, num2: number): number => {
//       return num1 / num2;
//     };
//   }
// }
// const newCalc = new NewCalculation();
// console.log('newCalc', newCalc.add(1, 4));
// class Adapter {
//   operation: (num1: number, num2: number, type: string) => number | string;
//   constructor() {
//     const newCalc = new NewCalculation();
//     this.operation = (
//       num1: number,
//       num2: number,
//       type: string
//     ): number | string => {
//       switch (type) {
//         case 'add':
//           return newCalc.add(num1, num2);
//         case 'subtract':
//           return newCalc.subtract(num1, num2);
//         case 'multiply':
//           return newCalc.multiply(num1, num2);
//         case 'divide':
//           return newCalc.divide(num1, num2);
//         default:
//           return 'wrong operation type';
//       }
//     };
//   }
// }
// const adapter = new Adapter();
// console.log('adapter', adapter.operation(6, 6, 'add'));
//**************************************/
//*********** Bridge Design Pattern ***/
//**************************************/
// class printer {
//   type: string;
//   ink: Ink;
//   constructor(type: string, ink: Ink) {
//     this.type = type;
//     this.ink = ink;
//   }
//   getType() {
//     return this.type;
//   }
//   getInk() {
//     return this.ink;
//   }
// }
// class HPPrinter extends printer {
//   constructor() {
//     super('HP', new AlcoholInk());
//   }
//   getType(): string {
//     return this.type;
//   }
//   getInk(): Ink {
//     return this.ink;
//   }
// }
// class DellPrinter extends printer {
//   constructor() {
//     super('DELL', new NoneAlcoholInk());
//   }
//   getType(): string {
//     return this.type;
//   }
//   getInk(): Ink {
//     return this.ink;
//   }
// }
// class Ink {
//   name: string;
//   price: number;
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
//   getInkName() {
//     return this.name;
//   }
//   getInkPrice() {
//     return this.price;
//   }
// }
// class AlcoholInk extends Ink {
//   constructor() {
//     super('alcohol ink', 300);
//   }
// }
// class NoneAlcoholInk extends Ink {
//   constructor() {
//     super('None Alcohol Ink', 6000);
//   }
// }
// const hp = new HPPrinter();
// console.log(hp.getInk());
// const dell = new DellPrinter();
// console.log(dell.getInk())
//**************************************/
//*********** Composite Design Pattern ***/
//**************************************/
// class Component {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
//   execute() {
//     return 'execute something from component';
//   }
// }
// class Leaf {
//   name: string;
//   component: Component;
//   constructor(name: string, component: Component) {
//     this.name = name;
//     this.component = component;
//   }
//   getName() {
//     return this.name;
//   }
//   execute(): string {
//     return 'this method from Leaf class';
//   }
// }
// class Composite {
//   name: string;
//   private children: Component[] | Composite[];
//   constructor(name: string, children: Component[] | Composite[]) {
//     this.name = name;
//     this.children = children;
//   }
//   add(item) {
//     this.children.push(item);
//     return true;
//   }
//   remove(item) {
//     const index = this.children.indexOf(item);
//     index >= 0 ? this.children.splice(index, 1) : 'this component not found';
//   }
//   getName() {
//     return this.name;
//   }
//   display() {
//     return this.children.map((child: { name: any }) => child.name);
//   }
// }
// const component1 = new Component('Component1');
// const leaf1 = new Leaf('leaf1', component1);
// console.log(leaf1.execute());
// const component2 = new Component('Component2');
// const leaf2 = new Leaf('leaf2', component2);
// console.log(leaf2.execute());
// const component3 = new Component('Component3');
// const leaf3 = new Leaf('leaf3', component3);
// console.log(leaf3.execute());
// const composite1 = new Composite('Composite1', [component1]);
// const composite2 = new Composite('Composite2', [component2, component3]);
// console.log(composite1.display());
// console.log(composite1.add(component3));
// console.log(composite1.display());
// console.group('====================================');
// console.log(composite2.display());
// console.log(composite2.add(component3));
// console.log(composite2.display());
//**************************************/
//*********** Decorator Design Pattern ***/
//**************************************/
// class MackBook {
//   model: string;
//   isBan: string;
//   price: number;
//   constructor(model: string, isBan: string, price: number) {
//     this.model = model;
//     this.isBan = isBan;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   getModel() {
//     return this.model;
//   }
//   getBan() {
//     return this.isBan;
//   }
// }
// function Memory(mb: MackBook) {
//   mb.price += 40;
// }
// function Color(mb: MackBook) {
//   mb.price += 33;
// }
// const mb = new MackBook('APPLE', 'AB23', 50);
// console.log(mb);
// Memory(mb);
// console.log(mb);
// Color(mb);
// console.log(mb);
//**************************************/
//*********** Facade Design Pattern ***/
//**************************************/
// class VideoFacade {
//   private screen: DisplayScreen;
//   private audio: AudioPlayer;
//   private subtitle: Subtitle;
//   open: () => void;
//   constructor(screen: DisplayScreen, audio: AudioPlayer, subtitle: Subtitle) {
//     this.screen = screen;
//     this.audio = audio;
//     this.subtitle = subtitle;
//     this.open = () => {
//       return `${this.screen.display()} and ${this.audio.playAudio()} and ${this.subtitle.show()}`;
//     };
//   }
// }
// class AudioPlayer {
//   playAudio = (): string => {
//     return 'audio is active now';
//   };
// }
// class DisplayScreen {
//   display = (): string => {
//     return 'screen is active now';
//   };
// }
// class Subtitle {
//   show = (): string => {
//     return 'subtitle is active now';
//   };
// }
// const video = new VideoFacade(
//   new DisplayScreen(),
//   new AudioPlayer(),
//   new Subtitle()
// );
// console.log(video.open());
//**************************************/
//*********** Flyweight Design Pattern ***/
//**************************************/
var FlyweightDP = /** @class */ (function () {
    function FlyweightDP(sharedData) {
        this.sharedData = sharedData;
    }
    FlyweightDP.prototype.operation = function (uniqueData) {
        console.log("Intrinsic Property: ".concat(this.sharedData, ", Extrinsic Property: ").concat(uniqueData));
    };
    return FlyweightDP;
}());
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory() {
        this.data = {};
    }
    FlyweightFactory.prototype.getData = function (sharedData) {
        if (!this.data[sharedData]) {
            this.data[sharedData] = new FlyweightDP(sharedData);
        }
        return this.data[sharedData];
    };
    FlyweightFactory.prototype.getFlyweightsCount = function () {
        return Object.keys(this.data).length;
    };
    return FlyweightFactory;
}());
var factory = new FlyweightFactory();
var flyweight1 = factory.getData('A');
flyweight1.operation('1');
var flyweight2 = factory.getData('B');
flyweight2.operation('2');
var flyweight3 = factory.getData('A');
flyweight3.operation('3');
console.log("Number of flyweights created: ".concat(factory.getFlyweightsCount()));
//**************************************/
//*********** Proxy Design Pattern ***/
//**************************************/
var person = {
    name: 'John Doe',
    age: 42,
    nationality: 'American',
};
var personProxy = new Proxy(person, {
    get: function (obj, prop) {
        return Reflect.get(obj, prop);
    },
    set: function (obj, prop, value) {
        return Reflect.set(obj, prop, value);
    },
});
