const name = 'Mateusz'
const lastName = 'Choma'
const carPropName = 'myCar'

const obj = {
    // shorthand properties
    name,
    lastName,
    // methods
    sayHello() {
        console.log('Hello ' + this.name + ' ' + this.lastName)
    },
    // computed properties
    [carPropName]: {
        brand: 'Opel',
    },
}

console.log(obj)

obj.sayHello()