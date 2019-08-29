
function agreeToProceed(){


if (confirm("You agree to be a part of the solution")) {
    
    alert("Excellent. Please proceed");
  } else {
    
    alert("Too bad. Maybe you'll change your mind later");
  }

}



function changeColor() { 


    var colors = prompt("Please enter a color.");
    
    var x = document.getElementById("demo");
    
    x.style.color = colors;     

                
}


function getAge(){

    var age = prompt("How old are you?");
    var message;
    if (age > 60){
    message="Never Give Up Never Surrender!";
    }else if (age > 40){
        message="You Are Only Limited by Your Imagination"
    }else if (age >20){
        message="It Always Works When You Know What You Doing"
    } else {
        message="Perfection Doesn't Have Limits"
    }
    return message;
}


function countWhales(){
    var quantity=prompt ("How many whales would you like to save today?");
    
    var whales= '';
    var whale;


    
    quantity=Number(quantity);

    while (isNaN (quantity)){
        quantity=prompt("How many whales would you like to save today?");
        quantity=Number( quantity );
    }

    whale ='<img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Orca-matthew-gates-r.svg">';

    for (var i=0; i<quantity;i++){
        whales= whales + whale;
    }

    return whales;
}

