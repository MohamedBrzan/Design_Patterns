class ProxyClass {
  obj: object;
  constructor(obj: object) {
    this.obj = obj;
  }
  get(prop: string) {
    console.log(`fetch ${prop} property from the object => ${this.obj[prop]}`);
  }
  set(prop: string, value: any) {
    if (!this.obj[prop]) {
      this.obj[prop] = value;
      return this.obj;
    }
    this.obj[prop] = value;
    return this.obj;
  }
}

let user = {
  name: 'mohamed',
  age: 22,
};

const personalProxy = new ProxyClass(user);
personalProxy.get('name');

