let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

//start with B
const bNames = names.filter((name) => name[0] === "B");
console.log(bNames);

//length of name
const nameLength = names.map((x) => x.length);
console.log(nameLength);

//average string length
const totalLength = names.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
const averageLength = totalLength / names.length;
console.log(averageLength);