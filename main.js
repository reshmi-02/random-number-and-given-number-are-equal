let guessnumber=parseInt(prompt("Enter the guess number"));

let random=Math.floor(Math.random()*11);
console.log(random);
document.write(`given number : ${guessnumber}<br><br>random number : ${random}<br><br>`)
if(guessnumber==random){
  document.write("Good work")
}
else{
  document.write("Not matched")
}