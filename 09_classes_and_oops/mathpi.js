const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);

const chai = {
    name: 'ginger tea',
    price: 250,
    isAvailable: true,

    isOrder: function(){
        console.log('chai nhi bni');
    }
}

// console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,
    // configurable: false
})

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}