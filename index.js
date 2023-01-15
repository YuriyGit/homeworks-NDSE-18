#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const argv = process.argv.slice(2)
const logFolder = path.join(__dirname, 'logfiles')
const logFilePath = path.join(logFolder, `${argv[0]}.json`)
let logFile = {
    parties: 1,
    win: ''
}

function guessNumber() {
    rl.question('Угадайте какое число загадано!  1 или 2  \n', userInput => {
        const randomNum = getOneOrTwo()
        if (userInput === randomNum) {
            console.log(`Вы угадали!`)
            logFile.win = logFile.win + 1
        } else {
            console.log(`Вы не угадали.`)
        }
        writeLog(logFile.win)
        rl.close()
    })
}

function creatFolder() {
    fs.mkdir(logFolder, () => {
    })
}

function getOneOrTwo() {
    const randomNum = Math.floor(Math.random() * 10) % 2
    if (randomNum === 1) {
        return '1'
    } else {
        return '2'
    }
}

function writeLog(win) {
    fs.access(logFilePath, (exists) => {
        if (exists) {
            logFile.win = Number(win)
            fs.writeFile(logFilePath, JSON.stringify(logFile), () => {
            })
        } else {
            const logData = require(logFilePath)
            logData.parties = Number(logData.parties) + 1
            logData.win = Number(logData.win) + Number(win)
            fs.writeFile(logFilePath, JSON.stringify(logData), () => {
            })
        }
    })
}

guessNumber()
creatFolder()