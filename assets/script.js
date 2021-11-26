//Declare all the variables
let percentageTips
let errors = [];
const tips_button = document.querySelectorAll("#tips-wrapper > button")
const calculate_button = document.getElementById("calcul-btn")
const tip_manual_input = document.getElementById("tip-manual")
const tip_span = document.getElementById("total-tip-amount")
const total_span = document.getElementById("total-amount")
const reset_button = document.getElementById("reset-button")

//check if is a Number
let validateInput = (value) => {
    return typeof value !== 'number' || value !== Number(value) || value === undefined || value == NaN || value <= 0 ? false : true
}
//Get the Input value (Number)
let getInputValue = (id) => {
    let value = parseFloat(document.getElementById(id).value)
    if(validateInput(value) === false) {
        if(id !== 'tip-manual'){
            errors.push(id)
            return false
        }
        else{
            return 0
        }
    }else{
        return value
    }
}

//Remove selected class on tip's buttons
let removeTipClass = () => document.querySelectorAll('.tip-button').forEach((e) => e.classList.remove('tip-selected'));
//Add the class selected on the tip's button
let changeClassTips = (id) => {
    removeTipClass()
    document.getElementById(id).classList.add("tip-selected")
}
//When user click on the manuel tip input remove selected class on the tip's button
tip_manual_input.addEventListener('click', (e) => removeTipClass())


//Display the input errors
let displayErrors = (e) => {
    e.forEach((error) => {
        let label = document.querySelector('label[for='+error+']')
        label.innerHTML = "This value is incorrect"
    })
}
//Remove all the input's errors
let removeErrors = () => {
    document.querySelectorAll('.label-errors').forEach((e) => {
        errors = [];
        let label = document.getElementById(e.id).innerHTML = ''
    })
}

//get the tip's amount 
let getTipAmount = () => {
    buttons = document.getElementsByClassName('tip-selected')[0]
    tipsInput = 0
    if(buttons) {
        tipsInput = getInputValue(buttons.id)
        tipsInput === false ? percentageTips = 0 : percentageTips = tipsInput
    }else {
        tipsInput = getInputValue('tip-manual')
        tipsInput === false ? percentageTips = 0 : percentageTips = tipsInput
    }
    return percentageTips
}


//Add event listener on each tip's button to change the selected class and get their value
tips_button.forEach(
    function(currentValue, currentIndex, listObj) {
      currentValue.addEventListener('click', (e) => {
        changeClassTips(currentValue.id)
        percentageTips = getInputValue(currentValue.id)
      })
    }
);

calculate_button.addEventListener('click', () => {
    //first reset all the input's errors
    removeErrors()
    //Get the data
    let tipsAmount = getTipAmount()
    let bill = getInputValue("total-bill")
    let people = getInputValue("total-people")
    //Display any errors
    if(errors.length > 0) displayErrors(errors);
    //calcul the tips amount per person 
    totalTips = (bill / 100) * tipsAmount
    let tipPerPerson = totalTips / people
    //Calculate total per person
    let totalBillPerPerson = bill / people + tipPerPerson
    tip_span.innerHTML = "£ " + totalTips.toFixed(2)
    total_span.innerHTML = "£ " + totalBillPerPerson.toFixed(2)
})

reset_button.addEventListener('click', () => location.reload())



