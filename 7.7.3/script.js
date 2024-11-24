let users = [
    {User1: "Ivan", age:22},
    {User2: "Pavel", age:18},
    {User3: "VanGOG", age:19},
]

const userAbove = users.filter(user => user.age >= 18)

const userOnlyName = userAbove.map(user => user.name)


console.log(userAbove);

console.log(userOnlyName);