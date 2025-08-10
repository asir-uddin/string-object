const subject = 'chemistry';
const book = 'Chemistry';

console.log(subject.toUpperCase());
console.log(book.toLowerCase());

// if(subject === book){
//     console.log('I am read the book prperly');
// }else{
//     console.log('My preparetion is not good');
// }
if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am read the book prperly');
}else{
    console.log('My preparetion is not good');
}


const drinks = 'Water';
const liquid = ' Water   ';

if(drinks.trim === liquid.trim){
    console.log('You give me a water bottol');
}else{
    console.log('I will give you');
}

