const collage ={
    name:'vns',
    class:['11', '12'],
    events:['science fair', 'bijoy dibos', 'pitha utsob'],
    unique:{
        color:'blue',
        result:{
            GPA: 5,
            merit: 'top'
        }
    }   
}
// console.log(collage.unique.result.merit);
collage.unique.result.merit = 'top top top';
console.log(collage.unique.result.merit);
collage.events[1]= '21 a february';
console.log(collage.events[1]);