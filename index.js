#!/usr/bin/env node
const http = require('http')
const argv = process.argv.slice(2)
const myApiKey = process.env.API_KEY

const url = `http://api.weatherstack.com/current?access_key=${myApiKey}&query=${argv}`
http.get(url, (res) => {
    if (res.statusCode !== 200) {
        console.log(`Status Code ${res.statusCode}`)
    }
    let data = ''
    res.setEncoding('utf-8')
    res.on('data', (chunk) => data += chunk)
    res.on('end', () => {
        let parseData = JSON.parse(data)
        const currentTemp = parseData.current.temperature
        console.log(`Current temperature in ${argv}: ${currentTemp}℃ `)
    })

})


