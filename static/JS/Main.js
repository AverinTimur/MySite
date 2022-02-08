//functions
function OpenMenu(){
    document.getElementById("Menu").style.display = "inline";
    document.getElementById("Menu").style.animationName = "MenuOpenAnimation";
    document.getElementById("MenuOff").style.display = "inline";
    document.getElementById("Menu-Open-Text").style.animationName = "Opacity0";
    setTimeout(function (){

        document.getElementById("Menu-Open-Text").style.display = "none";
    },500)
}
function CloseMenu(){

    document.getElementById("MenuOff").style.display = "none";
    document.getElementById("Menu").style.animationName = "MenuCloseAnimation";
    document.getElementById("Menu-Open-Text").style.animationName = "Opacity1";
    setTimeout(function (){
        document.getElementById("Menu-Open-Text").style.display = "block";
        document.getElementById("Menu").style.display = "none";
    },400)
}
function AnimationHover(id){
    document.getElementById(id).className = "onWork";
}
function AnimationUnHover(id){
    document.getElementById(id).className = "Work";
}
function Prodjects_ToRight(){
    if (document.getElementById("Prodject2").style.animationName != "Prodjects_ToRight2") {
        if (Prodject_1_Num == i) {
            Prodject_1_Num = 0;
        } else {
            Prodject_1_Num++;
        }
        if (Prodject_2_Num == i) {
            Prodject_2_Num = 0;
        } else {
            Prodject_2_Num++;
        }
        if (Prodject_3_Num == i) {
            Prodject_3_Num = 0;
        } else {
            Prodject_3_Num++;
        }
        document.getElementById("Prodject2").style.animationName = "Prodjects_ToRight2";
        document.getElementById("Prodject3").style.animationName = "Prodjects_ToRight3";
        setTimeout(function () {
            document.getElementById("Prodject1").style.backgroundImage = "url('" + ProdjectList[Prodject_1_Num] + "')";
            document.getElementById("Prodject2").style.backgroundImage = "url('" + ProdjectList[Prodject_2_Num] + "')";
            document.getElementById("Prodject2").href = ProdjectList[Prodject_2_Num];
            document.getElementById("Prodject3").style.backgroundImage = "url('" + ProdjectList[Prodject_3_Num] + "')";
            document.getElementById("Prodject2").style.animationName = "";
            document.getElementById("Prodject3").style.animationName = "";
        }, 390)
    }
}
function Prodjects_ToLift(){
    if (document.getElementById("Prodject2").style.animationName != "Prodjects_ToLeft2") {
        if (Prodject_1_Num == 0) {
            Prodject_1_Num = i;
        } else {
            Prodject_1_Num--;
        }
        if (Prodject_2_Num == 0) {
            Prodject_2_Num = i;
        } else {
            Prodject_2_Num--;
        }
        if (Prodject_3_Num == 0) {
            Prodject_3_Num = i;
        } else {
            Prodject_3_Num--;
        }
        document.getElementById("Prodject1").style.animationName = "Prodjects_ToLeft1";
        document.getElementById("Prodject2").style.animationName = "Prodjects_ToLeft2";
        setTimeout(function () {
            document.getElementById("Prodject1").style.backgroundImage = "url('" + ProdjectList[Prodject_1_Num] + "')";
            document.getElementById("Prodject2").style.backgroundImage = "url('" + ProdjectList[Prodject_2_Num] + "')";
            document.getElementById("Prodject2").href = ProdjectList[Prodject_2_Num];
            document.getElementById("Prodject3").style.backgroundImage = "url('" + ProdjectList[Prodject_3_Num] + "')";
            document.getElementById("Prodject1").style.animationName = "";
            document.getElementById("Prodject2").style.animationName = "";
        }, 390)
    }
}




//FirstAjax
var i
var ProdjectList = {};
var ajax = new XMLHttpRequest();
ajax.open("POST","http://" + document.domain + ":8000/firstAJAX/");
ajax.responseType = 'json';
ajax.setRequestHeader("X-CSRFToken",document.querySelector('[name=csrfmiddlewaretoken]').value)
ajax.send();
ajax.onreadystatechange = function(){
    for (i in ajax.response){
        ProdjectList[i] = ajax.response[i];
    }
    Prodject_1_Num = i;
    Prodject_2_Num = 0;
    if(i>0){
        Prodject_3_Num = 1;
    }
    else{
        Prodject_3_Num = 0;
    }
    document.getElementById("Prodject1").style.backgroundImage = "url('" + ProdjectList[Prodject_1_Num] + "')";
    document.getElementById("Prodject2").style.backgroundImage = "url('" + ProdjectList[Prodject_2_Num] + "')";
    document.getElementById("Prodject2").href = ProdjectList[Prodject_2_Num];
    document.getElementById("Prodject3").style.backgroundImage = "url('" + ProdjectList[Prodject_3_Num] + "')";
    setInterval(function (){Prodjects_ToRight()},10000);
}