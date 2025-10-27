const display = document.getElementById("display");

function addToDisplay(input){
    if(display.value == "0"){
        display.value = "";
    }
    if(input == "."){
        if([...display.value].includes(".")){
            display.value = display.value;
        }
        else{
            display.value += input;
        }
    }
    else{
        display.value += input;
    }
}

function allClear(){

    display.value = "0";
}

function clearOne(){
    if(display.value.length == 1){
        display.value = "0";
    }
    else{

        let disValue = [...display.value];
        disValue.pop();
        display.value = disValue.join("");
    }
}

function calculate(){
    display.value = eval(display.value);
}