function calculate(a, b, operator){
    if(operator === '+'){
        return a + b
    } else if(operator === '-'){
        return a - b
    } else if(operator === '/'){
        return a / b
    }
};

const obj = {
    a: 7,
    b: 8,
    operator:'+',
}
const arr = [obj.a, obj.b, obj.operator];

const result = calculate.apply(obj, arr)

console.log(result)