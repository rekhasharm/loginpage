var Username = "";
var Password = "";
function login() {
    reset();
    
    if(document.getElementById("username").value==""){
        /*document.getElementById("username").placeholder= "Username Required";*/
        document.getElementById("hint1").style.display= "block";
        return;
    }
    else if(document.getElementById("password").value==""){
       /*document.getElementById("password").placeholder= "Password Required";*/
       document.getElementById("hint2").style.display= "block";
        return;
    }
    else{
    Username = document.getElementById("username").value;
    Password = document.getElementById("password").value;
    }

    if(Username.trim()==Password.trim()){
        alert("Welcome to the Page");
    } else{
        alert("You have entered wrong credentials");
    }
    
}
function reset(){
    Username = document.getElementById("username").value;
    Password = document.getElementById("password").value;
    if(Username != ""){
        document.getElementById("hint1").style.display= "none";
    }
    if(Password != ""){
        document.getElementById("hint2").style.display= "none";
    }
}
