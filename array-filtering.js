numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let x = numbers.filter(function evenNumbers(number){
if (number % 2 === 0){
return number
}
})
console.log(x)
