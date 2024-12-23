const display = document.getElementById("display");


function appendToDisplay(input){
            display.value += input;

}
const result = document.getElementById("result");
function appendToDisplay(result){
    display.value += result;}

function clearDisplay(){
    display.value = "";
    result.innerHTML = "0";

}
function calaculate(){
    try{
    result.innerHTML = eval(display.value)
}
     catch(error){
        display.value="Error";

     }

     
}
function deletetToDisplay(){
    newDisplay=display.value;
    display.value=newDisplay.substring(0,newDisplay.length-1);
}
