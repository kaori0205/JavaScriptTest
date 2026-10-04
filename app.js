let promptStr = prompt('数字を入力してください');
let number = 5;
alert(number);
function FizzBuzz(Richard) {
    console.log(Richard);
    let Kaori;
    if(Richard % 15 === 0){
        Kaori = prompt('un autre chiffre svp');
        console.log(Kaori);
        if(Kaori % 2 === 0){
          alert('Kaori est pair');
        } else{
          alert('Kaori est impair');
        }
    } 
    else if(Richard % 3 === 0){
        alert('Fizz');
    } 
    else if(Richard % 5 === 0){
        alert('Buzz');
    } 
    else {
        alert(Richard);
    }
    console.log(Kaori);
}
FizzBuzz(3);
FizzBuzz(number);
FizzBuzz(promptStr);