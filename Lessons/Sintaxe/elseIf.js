// let grade = 20;

// if(grade >= 10){
// console.log("Congratulations for your graduation!")
// }else if(grade >= 7){
// console.log("Aproved on the avarage!")
// }else{
// console.log("Study more on the next time!")
// }

let sideA = 4;
let sideB = 4;
let sideC = 4;

if (sideA === sideB && sideB === sideC) {
    console.log("Este triângulo é equilátero.");
} else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    console.log("Este triângulo é isósceles.");
} else {
    console.log("Este triângulo é escaleno.");
}
