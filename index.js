import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "firstnumber" },
    { message: "Enter second Number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"]
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondnumber);
}
else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondnumber);
}
else {
    console.log("Please select valid operator");
}
