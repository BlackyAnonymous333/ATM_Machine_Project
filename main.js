#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let accountBalance = 10000;
var pinCode = 9876;
console.log(chalk.green("\n \tATM Machine Project created by >>> 'MALIK SHAHMEER' <<<\n"));
let pinCheck = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.gray("\nPlease Enter Your 4 Digit ATM Code:\n"),
    }
]);
if (pinCheck.pin === pinCode) {
    console.log(chalk.green("Your Pin is Correct, Account Login Succesfully!\n"));
    //console.log(`Your Current Account Balance is ${accountBalance}`);
    let chooseOptions = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            message: ("Select an one option:"),
            choices: ["Withdraw Cash", "Check Ammount",]
        }
    ]);
    if (chooseOptions.option === "Withdraw Cash") {
        let withdrawOptions = await inquirer.prompt([
            {
                name: "cashoptions",
                type: "list",
                choices: ["Quick Cash", "Minimum Ammount"]
            }
        ]);
        if (withdrawOptions.cashoptions === "Quick Cash") {
            let quickCashOpt = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: chalk.blue("Choose your cash ammount:"),
                    choices: [500, 1000, 2000, 5000, 10000, 20000]
                }
            ]);
            if (quickCashOpt.fastcash > accountBalance) {
                console.log(chalk.red("Sorry Not Enough Balance!"));
            }
            else {
                accountBalance -= quickCashOpt.fastcash;
                console.log(chalk.green(`\n${quickCashOpt.fastcash} Ammount withdraw successfully`));
                console.log(chalk.blue(`your Remaining Balance After Withdraw is: ${accountBalance}`));
            }
        }
        else if (withdrawOptions.cashoptions === "Minimum Ammount") {
            let withdrawAm = await inquirer.prompt([
                {
                    name: "cash",
                    type: "number",
                    message: (chalk.blue("Please enter your cash ammount for withdraw:"))
                }
            ]);
            if (withdrawAm.cash > accountBalance) {
                console.log(chalk.red("Sorry Not Enough Balance!"));
            }
            else {
                accountBalance -= withdrawAm.cash;
                console.log(chalk.green(`\n${withdrawAm.cash} Cash Withdraw Successfully`));
                console.log(chalk.blue(`Your Remaining Balance is: ${accountBalance}`));
            }
        }
    }
    else if (chooseOptions.option === "Check Ammount") {
        console.log(chalk.blue(`Your Account Balance is: ${accountBalance}`));
    }
}
else {
    console.log(chalk.red("Incorrect Pin Code!"));
}
