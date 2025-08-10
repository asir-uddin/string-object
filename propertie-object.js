

const person = {
    name: 'Asir uddin',
    age: 25,
    profession: 'Student',
    salary: 25000,
    married: true,
    'fav place': ['kuakata', 'bandorban', 'coxbazar']
}
console.log(person)

// dot notation using properties object access
// console.log(person.salary)
const income = person.salary;
console.log(income)

//bracket notation using properties object access
console.log(person['profession'])
const prob = person['age'];
console.log(prob)

console.log(person['fav place'])


