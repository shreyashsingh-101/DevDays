let screen = document.querySelector('input');
let buttons = document.querySelectorAll('button');

let result = "";

buttons.forEach(button => {
    button.addEventListener('click', e =>{
        if(button.innerHTML == 'AC'){
            result = "";
            screen.value = "";
           
        }
        else if(button.innerHTML == '='){
            screen.value = eval(result);
            result = screen.value;

        }
        else{
            result += button.innerHTML;
            screen.value = result; 
        }
        
    })
})