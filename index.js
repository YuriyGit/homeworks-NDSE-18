#!/usr/bin/env node
const argv = process.argv.slice(2)

const yearFlags = ['--year', '-y']
const monthFlags = ['--month', '-m']
const dateFlags = ['--date', '-d']

const isYear = argv[1] === yearFlags[0] || argv[1] === yearFlags[1]
const isMonth = argv[1] === monthFlags[0] || argv[1] === monthFlags[1]
const isDate = argv[1] === dateFlags[0] || argv[1] === dateFlags[1]
const increment = +argv[2]
const operation = argv[0]

if (operation === 'current') {
    showDate(argv)
} else if (argv[0] === 'add') {
    if (isYear) {
        addYear(increment)
    } else if (isMonth) {
        addMonth(increment)
    } else if (isDate) {
        addDay(increment)
    }
} else if (argv[0] === 'sub') {
    if (isYear) {
        subYear(increment)
    } else if (isMonth) {
        subMon(increment)
    } else if (isDate) {
        subDay(increment)
    }
}

function showDate(argv) {
    const current = argv.length === 1
    if (current) {
        console.log(new Date())
    } else if (isYear) {
        console.log(new Date().getFullYear())
    } else if (isMonth) {
        console.log(new Date().getMonth() + 1)
    } else if (isDate) {
        console.log(new Date().getDate())
    }
}

//////add/////

function addYear(add) {
    const d = new Date()
    d.setFullYear(d.getFullYear() + add)
    console.log(d)
}

function addDay(add) {
    const d = new Date()
    d.setDate(d.getDate() + add)
    console.log(d)
}

function addMonth(add) {
    const d = new Date()
    d.setMonth(d.getMonth() + add)
    console.log(d)
}

//////sub/////
function subYear(sub) {
    const d = new Date()
    d.setFullYear(d.getFullYear() - sub)
    console.log(d)
}

function subMon(sub) {
    const d = new Date()
    d.setMonth(d.getMonth() - sub)
    console.log(d)
}

function subDay(sub) {
    const d = new Date()
    d.setDate(d.getDate() - sub)
    console.log(d)
}
