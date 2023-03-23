//2.4.1 Intro To Arrays

//create
let students = ['Adam','Brad','casey','David'];
let values = [1,2,3,4];

//accessing itens in an array
console.log(students);
console.log(students [0]) //beginning item has index 0
console.log(students [1]);
console.log(students [2]);
console.log(students [3]);
console.log(students [4]); //error, as there is no 5th person

//formatting item in array
console.log('Student:'+ students[0]);
console.log(`Student 2: ${students[1]}`);

//changing an item
student[1] = 'stephanie';

// push adds to the end
students.push('Eve');
console.log(students);
students.push('fred', 'Georgia')
console.log(students);

//pop removes the last item
students.pop();
console.log(students);

//shifts removes the beginning item
students.shift();
console.log(students);

//unshift adds am item to thge beginning
students.unshift('zeke');
console.log(students);
students.unshift('Yvonne', 'Xavier');
console.log(students),

//length of array = #items in it
numStudents = students.length;
console.log(numStudents);

//how to access the Last item
let Laststudent = students[students.length - 1];
console.log(Laststudent);

//sloice up a piece of original array
let fruit = ['apple', 'banana', 'orange', 'lemon', 'grape'];
let citrus = fruits.slice(2,4);
//1st number (2) is the starting index. Include it.
//2nd number (4) if the stop before index. exclude it.
console.log(citrus)