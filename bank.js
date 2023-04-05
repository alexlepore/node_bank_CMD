let fs = require("fs");

let userInput = process.argv[2];
let userInputValue = process.argv[3];

switch(userInput){
    case 'total':
    total();
    break;
    case 'deposit':
    deposit();
    break;
    case 'withdraw':
    withdraw();
    break;
    case 'lotto':
    lotto();
    break;
}

function total(){
    fs.readFile("bank.txt", "utf8", function(err, data){
        if(err){
            return console.log(err);
        }
        data = data.split(", ");
        let result = 0;

        for(let i = 0; i < data.length; i++){
            if(parseFloat(data[i])){
                result += parseFloat(data[i]);
            }
        }
        console.log("Your total is " + result.toFixed(2));
    });
}

function deposit(){
    fs.appendFile("bank.txt", ", " + userInputValue, function(err){
        if(err){
            return console.log(err);
        }
    });

    console.log("Deposited " + userInputValue + ".");
}

function withdraw() {

  fs.appendFile("bank.txt", ", -" + userInputValue, function(err) {
    if (err) {
      return console.log(err);
    }
  });

  console.log("Withdrew " + userInputValue + ".");
}

function lotto(){
    fs.appendFile('bank.txt', ', -.25', function(err){
        let randomNumber = Math.floor((Math.random() * 10) + 1);
            console.log(randomNumber);
        if(randomNumber === 1){
            fs.appendFile('bank.txt', ', 100');
            console.log("Congratulations, you've just won 100 dollars by participating in the lottery!")
        } else{
            console.log(".25 has been subtracted from your account from participating. You did not win.")
        }
    })
}