function sprawdzHaslo(){
    var password = document.getElementById("haslo").value;

    if(password.length < 8){
        document.getElementById("haslo").style.backgroundColor="#AA0000";
    }
    else{
        document.getElementById("haslo").style.backgroundColor="#00AA00";
    }
}

function sprawdzLogin(){
    var login = document.getElementById("login").value;

    if(login.length < 5){
        document.getElementById("login").style.backgroundColor="#AA0000";
    }
    else{
        document.getElementById("login").style.backgroundColor="#00AA00";
    }
}

function sprawdzEmail(){
    var email = document.getElementById("email").value;
    var check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    if(!check){
        var email = document.getElementById("email").style.backgroundColor="#AA0000";
    }
    else{
        var email = document.getElementById("email").style.backgroundColor="#00AA00";
    }
}