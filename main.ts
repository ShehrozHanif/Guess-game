#! /usr/bin/env node 

// Guess Game
// You need to guess a Secret number which is between 1 to 10;

import inquirer from "inquirer"
const user = await inquirer.prompt({
    name:"num",
    type:"number",
    message:"If you want to try your Luck than Enter the Guessing number \n Make Sure the number is between 1 to 6:"
});

let storeNumber:number= Math.floor(Math.random()*6)+1

// let me tell you why we do this
// Math.floor() convert the value to the lower Side
// Math.Random() Every time when it console it show a different value which is less than 1
// so when we Multiply with 10 so then value in round figure
// adding 1 it come in the value above zero but it comes is point 
// So we use Math.floor for convert the value to lower side

if(user.num == storeNumber){
    console.log("Bingo! Correct answer")
}else{
    console.log("Bad luck! Wrong number try again")
};

export{};