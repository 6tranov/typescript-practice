const message: string = 'hello world';
console.log(message);

class Person {
    name: string = '';
    id: number = 0;

    greeting(): string {
        return `Hello, my name is ${this.name}`;
    }
}

const person = new Person();
console.log(person.greeting());