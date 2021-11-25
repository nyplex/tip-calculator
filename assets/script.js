//Declare all the variables
let percentageTips
let errors = [];
const tips_button = document.querySelectorAll("#tips-wrapper > button")
const calculate_button = document.getElementById("calcul-btn")
const tip_manual_input = document.getElementById("tip-manual")

let isNumber = (number) => (typeof number !== 'number') || (number !== Number(number)) ? false : true

let validateInput = (value) => isNumber(value) && value != undefined && value != 0 ? true : false

let getInputValue = (id) => {
    let value = parseInt(document.getElementById(id).value)
    if(validateInput(value) === false) errors.push(id)
    else return true
}

let removeTipClass = () => document.querySelectorAll('.tip-button').forEach((e) => e.classList.remove('tip-selected'));

let changeClassTips = (id) => {
    removeTipClass()
    document.getElementById(id).classList.add("tip-selected")
}

let getTipNumber = (id) => getInputValue(id)

let displayErrors = (e) => {
    e.forEach((error) => {
        let label = document.querySelector('label[for='+error+']')
        label.style.color = 'red'
        label.innerHTML = "Something wrong"
    })
}

tip_manual_input.addEventListener('click', (e) => removeTipClass())

tips_button.forEach(
    function(currentValue, currentIndex, listObj) {
      currentValue.addEventListener('click', (e) => {
        changeClassTips(currentValue.id)
        percentageTips = getTipNumber(currentValue.id)
      })
    }
);

calculate_button.addEventListener('click', () => {
    let bill = getInputValue("total-bill")
    let people = getInputValue("total-people")
    if(errors.length > 0) displayErrors(errors);
})





