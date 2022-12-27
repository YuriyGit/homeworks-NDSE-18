#!/usr/bin/env node
const argv = process.argv.slice(2)

const yearFlag = ['--year', '-y']
const monthFlag = ['--month', '-m']
const dateFlag = ['--date', '-d']

const year = argv[1] === yearFlag[0] || argv[1] === yearFlag[1]
const month = argv[1] === monthFlag[0] || argv[1] === monthFlag[1]
const date = argv[1] === dateFlag[0] || argv[1] === dateFlag[1]
const num = +argv[2]

if (argv[0] === 'current') {
    showDate(argv)
} else if (argv[0] === 'add') {
    if (year) {
        addYear(num)
    } else if (month) {
        addMon(num)
    } else if (date) {
        addDay(num)
    }
} else if (argv[0] === 'sub') {
    if (year) {
        subYear(num)
    } else if (month) {
        subMon(num)
    } else if (date) {
        subDay(num)
    }
}

function showDate(argv) {
    const current = argv.length === 1
    if (current) {
        console.log(new Date())
    } else if (year) {
        console.log(new Date().getFullYear())
    } else if (month) {
        console.log(new Date().getMonth() + 1)
    } else if (date) {
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

function addMon(add) {
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