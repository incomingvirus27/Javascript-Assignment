var a = prompt("please enter your name");
if(a.toUpperCase() == "ALICE"){
    document.write("Good day " +a);
}
else if(a.toUpperCase() == "BOB"){
    document.write("Good day " +a);
}
else if(a == ""){
    document.write("You did not enter your name.");
}
else{
    document.write("Good day");
}