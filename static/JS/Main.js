//functions
function OpenMenu(){

    $("#Menu").css("display","inline");
    $("#Menu").animate({left: 0},300,"linear");
    $("#MenuOff").css("display","inline")
    $("#Menu-Open-Text").animate({opacity: 0},500,"linear");
    setTimeout(function (){
        $("#Menu-Open-Text").css("display","none");
    },500)
}
function CloseMenu(){
    $("#MenuOff").css("display","none");
    $("#Menu").animate({left: "-6cm"},300,"linear");
    $("#Menu-Open-Text").animate({opacity: 1},500,"linear");
    setTimeout(function (){
        $("#Menu-Open-Text").css("display","block");
        $("#Menu").css("display","none");
    },400)
}
function AnimationHover(id){
    $("#" + id).attr("class","onWork");
}
function AnimationUnHover(id){
    $("#" + id).attr("class","Work");
}
function Prodjects_ToRight(){
    if ($("#Prodject2").css("animationName") != "Prodjects_ToRight2") {
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
        $("#Prodject2").css("animation-name","Prodjects_ToRight2");
        $("#Prodject3").css("animation-name","Prodjects_ToRight3");
        setTimeout(function () {
            $("#Prodject1").css("background-image","url('" + ProdjectList[Prodject_1_Num] + "')");
            $("#Prodject2").css("background-image","url('" + ProdjectList[Prodject_2_Num] + "')");
            $("#Prodject2").attr("href",ProdjectList[Prodject_2_Num]);
            $("#Prodject3").css("background-image","url('" + ProdjectList[Prodject_3_Num] + "')");
            $("#Prodject2").css("animation-name","");
            $("#Prodject3").css("animation-name","");
        }, 390)
    }
}
function Prodjects_ToLift(){
    if ($("#Prodject2").css("animationName") != "Prodjects_ToLeft2") {
        if (Prodject_1_Num == 0){
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
        $("#Prodject1").css("animation-name","Prodjects_ToLeft1");
        $("#Prodject2").css("animation-name","Prodjects_ToLeft2");
        setTimeout(function () {
            $("#Prodject1").css("background-image","url('" + ProdjectList[Prodject_1_Num] + "')");
            $("#Prodject2").css("background-image","url('" + ProdjectList[Prodject_2_Num] + "')");
            $("#Prodject2").attr("href",ProdjectList[Prodject_2_Num]);
            $("#Prodject3").css("background-image","url('" + ProdjectList[Prodject_3_Num] + "')");
            $("#Prodject1").css("animation-name","");
            $("#Prodject2").css("animation-name","");
        }, 390)
    }
}


ProdjectList = {};
$.ajax({
    method : "Post",
    url: "http://" + $(document).attr("domain") + ":8000/firstAJAX/",
    contentType: "json",
    headers: {"X-CSRFToken": $('[name=csrfmiddlewaretoken]').attr("value")},
    success: function(data){
        for (i in data){
            ProdjectList[i] = data[i];
        }
        Prodject_1_Num = i;
        Prodject_2_Num = 0;
        if(i>0){
            Prodject_3_Num = 1;
        }
        else{
            Prodject_3_Num = 0;
        }
        $("#Prodject1").css("background-image","url('" + ProdjectList[Prodject_1_Num] + "')");
        $("#Prodject2").css("background-image","url('" + ProdjectList[Prodject_2_Num] + "')");
        $("#Prodject2").attr("href",ProdjectList[Prodject_2_Num]);
        $("#Prodject3").css("background-image","url('" + ProdjectList[Prodject_3_Num] + "')");
        setInterval(function (){Prodjects_ToRight()},10000);
    },
});