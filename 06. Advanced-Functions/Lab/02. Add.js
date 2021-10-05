function add(n) {
    
    return function num(num) {
        return num + n;
    }
}

let add5 = add(5);
console.log(add5(2));
console.log(add5(3));