let screen = document.getElementById('screen'); //input tag
buttons = document.querySelectorAll('button');//select all buttons

let screenValue = '';
for (value of buttons) {
    value.addEventListener('click', (e) => {       //creating arrow function 
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue); 
        }
        else {
            screenValue += buttonText;      //adding button text to screen value
            screen.value = screenValue;        //screenValue is variable and screen.value is its value

        }

    })
}

