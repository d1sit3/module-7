const arr = [1, 2, 2, 3, 3, 1, 3, 5, 0];

const result = arr.reduce((acc, item) => {
    if (acc.includes(arr)) {
        return acc;
    }
    return [...acc, item];
  }, []);
  
console.log(result);