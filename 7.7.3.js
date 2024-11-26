const users = [
    {user1: 'Ivan', age: 22},
    {user2: 'Pavel', age: 18},
    {user3: 'Vangog', age: 19}
]

const userAbove = users.filter(user => user.age >= 18)

const userOnlyName = userAbove.map(user => user.name)


console.log(userAbove);
console.log(userOnlyName);