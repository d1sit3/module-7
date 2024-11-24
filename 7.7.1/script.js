const person = {
    name: 'Pablo',
    age: '23'
}

function printInfo(){
    console.log('Name: ' + this.name + ', ' +  'Age: ' + this.age);
}
printInfo.call(person)