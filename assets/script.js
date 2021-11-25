//Declare all the variables
let percentageTips;


let isNumber = (number) => {
    return (typeof number !== 'number') || (number !== Number(number)) ? false : true
}

let validateInput = (value) => {
    return isNumber(value) && value != undefined && value != 0 ? true : false
}

let getInputValue = (id) => {
    let value = parseInt(document.getElementById(id).value)
    return validateInput(value) ? value : false 
}

document.getElementById("calcul-btn").addEventListener('click', () => {
    console.log(getInputValue("total-bill"))
    console.log(getInputValue("total-people"));
})


let tips_button = document.querySelectorAll("#tips-wrapper > button");
tips_button.forEach(
    function(currentValue, currentIndex, listObj) {
      currentValue.addEventListener('click', (e) => {
        percentageTips = currentValue.value
      })
    }
);

