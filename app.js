let refresh = document.querySelector("#refresh");
let resetBtn = document.querySelector("#resetBtn");
let calcBtn = document.querySelector("#calcBtn");
let result = document.querySelector("#result");
let textBox = document.querySelector("#textBox");

let age;
let myTimer;
let myRemainingWeeks;
let myRemainingYears

calcBtn.addEventListener('click', function () {
    age = textBox.value.trim();

    if (age == ""){
        let alert1 = document.querySelector("#alert1");
        alert1.classList.add('active');
       let myTimer = setInterval (function () {
        alert1.classList.remove("active");
        

        }, 3000);
        
    } else if (isNaN(age) ==    true) {
        let alert2 = document.querySelector("#alert2");
        alert2.classList.add("active");
        textBox.value = "";
        let myTimer = setInterval (function () {
            alert2.classList.remove("active");
    
            }, 3000);
    } else {
        let answer = document.querySelector("#answer");
        answer.classList.add("active");
        
        let myRemainingYears = 90 - age;
        let myRemainingWeeks = myRemainingYears * 52;

        result.innerHTML = seperateNumbersInComma(myRemainingWeeks);

        textBox.value = "";
        
        
    }
    clearInterval (myTimer);

});

function seperateNumbersInComma(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

resetBtn.addEventListener('click', function () {
    refresh.click();
})