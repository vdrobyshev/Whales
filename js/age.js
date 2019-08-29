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

document.write(message);