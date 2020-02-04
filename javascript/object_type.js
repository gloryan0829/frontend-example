const doggy = {
    name : '멍멍이',
    sound : '멍멍',
    age : 3
}

console.log('Object > entries',Object.entries(doggy))

console.log('Object > keys',Object.keys(doggy))

console.log('Object > values',Object.values(doggy))

for (let key in doggy) {
    console.log(`${key} : ${doggy[key]}`)
}