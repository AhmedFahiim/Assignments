let Birthday =  Date.parse("12-02-1996");

console.log(`${Math.floor( Birthday / 1000)} Seconds`);
console.log(`${Math.floor(Birthday /1000 /60)} minute`);
console.log(`${Math.floor(Birthday/1000/ 60 /60)} Hour`);
console.log(`${Math.floor(Birthday/1000 / 60 /60 /24)} Days`);
console.log(`${Math.floor(Birthday/1000 /60 /60 /24 /31)} Month`);
console.log(`${Math.floor(Birthday/1000  /60 /60 /24 /31 /12)} Year`);