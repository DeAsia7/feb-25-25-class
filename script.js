/*const readline = require(`readline`);

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})
rl.question("What is your name?", (username) => {

    console.log(`Hello, ${username}!`);
    rl.close();
});
*/

// exercise 1 - Age verification
/*
const readline = require(`readline`);
const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl2.question("What is your name?", (username) => {
    console.log(`Hey, ${username}!`);
    rl2.question("What is your age?", (age) => {
        console.log(`You are ${age} years old.`);
        if (age < 21) {
            console.log("You are not allowed in the club. You are too young.");
        } else {
            console.log("You are allowed to enter the club. have fun!");
        }
        rl2.close();
    });
});
*/
//exercise 2 favorite color

const readline = require(`readline`);
const rl3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl3.question("What is your name?", (username) => {
console.log(`Hey, ${username}!`);
rl3.question("What is your top 3 favorite colors?", (colors) => {
console.log(`Hey ${username}!, Your top 3 favorite colors are ${colors}.`);

        rl3.close();
});
});


//exercise 3
//guessing game. you will ask the user for a number between 1 and 10. user get 3 tries. let user know how many attempots they have left and if their guess is correct or not. user run out of attempts prints you lose .