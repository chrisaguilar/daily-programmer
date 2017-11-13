/*
    create a program that will ask the users name, age, and reddit username. have it tell them the information back, in the format:
    your name is (blank), you are (blank) years old, and your username is (blank)
    for extra credit, have the program log this information in a file to be accessed later.
*/

const fs = require('fs');
const { tmpdir } = require('os');
const { promisify } = require('util');

const inquirer = require('inquirer');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const open = promisify(fs.open);
const close = promisify(fs.close);

const file = `${tmpdir()}/visitors.json`;

const greeting = (n, a, u) => console.log(`Your name is ${n}, you are ${a} years old, and your username is ${u}.`);

async function main() {
    try {

        const { name } = await inquirer.prompt([{ name: 'name', message: 'Name:' }]);
    } catch (e) {
        console.error(e);
    }
}

/*
    async function main() {
        try {
            await close(await open(file, 'w'));

            const visitors = require(file);
            console.log(visitors);
            const { name } = await inquirer.prompt([{ name: 'name', message: 'Name:' }]);

            if (visitors[name]) {
                console.log("You've been here before!");
                greet(name, visitors[name].age, visitors[name].username);
            } else {
                console.log(`Hey ${name}, I don't think we've met before.`)
                const { age, username } = await inquirer.prompt([
                    { name: 'age', message: 'Age:' },
                    { name: 'username', message: 'Username:' }
                ]);
                greeting(name, age, username);
                await writeFile(file, JSON.stringify({ [name]: { age, username }, ...visitors }));
            }
        } catch (e) {
            console.error(e);
        }
    }
*/
main();
