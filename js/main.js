var i = 0;
function formValidate() {
    len = document.forms[0].length - 1;
    ele = document.forms[0].elements;
    console.log(ele);
    for (var i = 0; i < len; i++){
        if(ele[i].value == ""){
            document.getElementById("paragraph").innerHTML = "Please fill in the " + document.getElementById(ele[i].id).name.replace("contact", "") + " area.";
            return false;
        } else {
            document.getElementById("paragraph").innerHTML = "";
        }
    }
    checkPhone();
    checkEmail();
}
function checkPhone(){
    if(!/\d[0-9]/.test(ele[1].value)){
        document.getElementById("paragraph").innerHTML = "Use numbers 0-9 to fill in the Phone area.";
        return false;
    }
    if (ele[1].value.length < 10 || ele[1].value.length > 10) {
        document.getElementById("paragraph").innerHTML = "Please use only 10 numbers within in the Phone area.";
        return false;
    }
}
function checkEmail(){
    if(!/@/.test(ele[2].value)){
        document.getElementById("paragraph").innerHTML = "Make sure to use an @ symbol in the email area.";
        return false;
    }
    if(!/com/.test(ele[2].value)){
        document.getElementById("paragraph").innerHTML = "Make sure to add a .com to the end of the address in the email area.";
        return false;
    }
}
function menuExpand(){
    if((i % 2) == 0){
       document.getElementById("me").getElementsByTagName("nav")[0].style.display = "contents";
        document.getElementById("me").getElementsByTagName("button")[0].style.top = "5px";
        i++;
        return false;
    } else{
        document.getElementById("me").getElementsByTagName("nav")[0].style.display = "none";
        document.getElementById("me").getElementsByTagName("button")[0].style.top = "60px";
        i++;
        return false;
    }
}