class Component {
  print() {
    throw new Error('override this method');
  }

  sizeFunc() {
    throw new Error('override this method');
  }
}

class FileClass extends Component {
  name: string;
  size: number;
  location: string;
  constructor(name: string, size: number, location: string) {
    super();
    this.name = name;
    this.size = size;
    this.location = location;
  }

  sizeFunc(): number {
    return this.size;
  }
}

class FolderClass extends Component {
  name: string;
  files: FileClass[];
  constructor(name: string) {
    super();
    this.name = name;
    this.files = [];
  }

  add(file) {
    this.files.push(file);
  }

  delete(file) {
    const index = this.files.indexOf(file);
    index > -1 && this.files.splice(index, 1);
  }

  print(): void {
    this.files.forEach((file: { name: any }) => `this.is ${file.name} file`);
  }
}

const file = new FileClass('document.txt', 10, 'c:/private/data');
const folder = new FolderClass('myData');
folder.add(file);
console.log(folder);

const root = new FolderClass('root');

root.add(folder);

console.log('file system structure');
console.log(root);
