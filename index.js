#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//startup messages
console.log(chalk.blueBright("\t\t*** Welcome to my Word Counter ***\n"));
console.log(chalk.yellowBright("\t<< Enter a Sentence to know number of Words and alphabets are there >>\n"));
async function WordCounter() {
    const answer = await inquirer.prompt([
        {
            message: "Enter a Sentence:",
            type: "input",
            name: "sentence",
        },
    ]);
    // save user's input in a variable named words
    const words = answer.sentence;
    //save counted words in a variable named wordCount
    const wordCount = countWords(words);
    //save counted alphabets in a variable named countLetters
    const letterCount = countLetters(words);
    //print counted words and alphabets
    console.log(chalk.green(`There are ${wordCount} words in your sentence`));
    console.log(chalk.green(`There are ${letterCount} alphabets in your sentence`));
    //function to trim whitespaces from sentence
    function countWords(words) {
        return words
            .trim()
            .split(/\s+/)
            .filter((words) => words.length > 0).length;
    }
    //function to trim white spaces and count all alphabets including small and large Alphabets.
    function countLetters(words) {
        return words.replace(/[^a-zA-Z]/g, "").length;
    }
    //prompt to get user's choice on playing again or not
    let option = await inquirer.prompt([
        {
            name: "continue",
            type: "confirm",
            message: "Do you want to continue?",
        },
    ]);
    //condition to continue or end program
    if (option.continue) {
        WordCounter();
    }
    else {
        console.log(chalk.yellowBright("Goodbye"));
    }
}
//caling main function
WordCounter();
