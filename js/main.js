var len = document.forms[0].length - 1;
var ele = document.forms[0].elements;

function formValidate() {
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