#!usr/bin/env
const readline = require('readline')
const {stdin: input, stdout: output} = require('process')

const rl = readline.createInterface({input, output})
let randomNum = Math.round(Math.random() * 100)

rl.question('Загадано число в диапазоне от 0 до 100. Угадайте его: ', (userInput) => {
    if (userInput === String(randomNum)) {
        rl.close()
    } else {
        rl.setPrompt('Не верно! Попробуйте ещё \n')
        rl.prompt();
        rl.on('line', (userInput) => {
            if (userInput === String(randomNum)) {
                rl.close()
            } else if (userInput < String(randomNum)) {
                rl.setPrompt('загаданное число больше. Введите ещё: ')
                rl.prompt()
            } else if (userInput > String(randomNum)) {
                rl.setPrompt('загаданное число меньше. Введите ещё: ')
                rl.prompt()
            }
        })
    }
})
rl.on('close', () => {
    console.log('Вы угадали!')
})








