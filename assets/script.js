//Declare all the variables
let percentageTips
let errors = [];
const tips_button = document.querySelectorAll("#tips-wrapper > button")
const calculate_button = document.getElementById("calcul-btn")
const tip_manual_input = document.getElementById("tip-manual")




//check if is a Number
let isNumber = (number) => (typeof number !== 'number') || (number !== Number(number)) ? false : true
//Validate an input 
let validateInput = (value) => isNumber(value) && value != undefined && value != 0 ? true : false
//Get the Input value (Number)
let getInputValue = (id) => {
    let value = parseInt(document.getElementById(id).value)
    if(validateInput(value) === false) errors.push(id)
    else return true
}




//Remove selected class on tip's buttons
let removeTipClass = () => document.querySelectorAll('.tip-button').forEach((e) => e.classList.remove('tip-selected'));
//Add the class selected on the tip's button
let changeClassTips = (id) => {
    removeTipClass()
    document.getElementById(id).classList.add("tip-selected")
}
//get the tip value (from button)
let getTipNumber = (id) => getInputValue(id)
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




//Add event listener on each tip's button to change the selected class and get their value
tips_button.forEach(
    function(currentValue, currentIndex, listObj) {
      currentValue.addEventListener('click', (e) => {
        changeClassTips(currentValue.id)
        percentageTips = getTipNumber(currentValue.id)
      })
    }
);




calculate_button.addEventListener('click', () => {
    //first reset all the input's errors
    removeErrors()
    let bill = getInputValue("total-bill")
    let people = getInputValue("total-people")
    if(errors.length > 0) displayErrors(errors);
})





