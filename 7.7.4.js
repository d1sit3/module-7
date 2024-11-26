const john = {
  firstName: 'John',
  secondName: 'Smith',
};

function setFullName(name) {
  this.fullName = name;
}

const setJohnFullName = setFullName.bind(john);
setJohnFullName('John Smith');

console.log(john.fullName);