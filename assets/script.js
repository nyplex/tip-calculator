let totalBill = 0;
let tipPercentage;
let numberofPoeple;
let tipPerPerson;
let totalPerPerson;
let tipValue = 5;

const billInput = document.getElementById("total-bill")

const tip_5 = document.getElementById("tip-5")
const tip_10 = document.getElementById("tip-10")
const tip_12 = document.getElementById("tip-12")
const tip_15 = document.getElementById("tip-15")
const tip_20 = document.getElementById("tip-20")

const tipArray = [
    tip_5, tip_10, tip_12, tip_15, tip_20
]

const tip_manual = document.getElementById("tip-manual")

const peopleInput = document.getElementById("total-people")

const tipAmountSpan = document.getElementById("total-tip-amount")
const totalAmountSpan = document.getElementById("total-amount")

const resetButton = document.getElementById("reset-button")


let validateInput = (value) => {
    return typeof value === 'number' ? "true" : "false"
}

let isNumber = (number) => {
    return (typeof number !== 'number') || (number !== Number(number)) ? false : true
}

console.log(isNumber(10.3));