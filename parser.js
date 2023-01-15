#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const parsePath = path.join(__dirname, 'logfiles');

fs.readdir(parsePath, (folderContents) => {
    let numberOfParties = 0
    let gamesWon = 0
    let winRate = 0
    for (let i = 0; i < folderContents.length; i++) {
        const fileContents = fs.readFileSync(path.join(parsePath, folderContents[i]), 'utf-8')
        numberOfParties = numberOfParties + JSON.parse(fileContents).parties
        gamesWon = gamesWon + JSON.parse(fileContents).win
        winRate = Math.round((gamesWon * 100) / numberOfParties)
    }
    console.log(`Партий сыграно: ${numberOfParties}`)
    console.log(`Партий выйграно: ${gamesWon}`)
    console.log(`Процент побед: ${winRate}%`)
})