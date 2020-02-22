function* getNumbers(start = 0, end = 100, step = 2) {
    for (let i = start; i < end; i+= step) {
        console.log('step 1')
        yield i
    }
}


const it = getNumbers(0, 100, 2 );
let result = it.next();
console.log('result ', result);

result = it.next();
console.log('result ', result);


result = it.next();
console.log('result ', result);


result = it.next();
console.log('result ', result);


for (let value of getNumbers(0, 10, 2 )) {
    console.log('value ', value)
}