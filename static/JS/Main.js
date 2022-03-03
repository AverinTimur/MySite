//functions
function Russian(){
    $("#LanguageBottom").css("background-image","url('media/img/UKFlag.png')");
    $("#Main-Text-Prodjects").text("работы");
    $("#Main-Text-Works").text("навыки");
    $("#Chat p").text("ЧАТ");
    $("#Main-Text-Prodjects").css("font-family","Oswald-SemiBold")
    $("#Main-Text-Works").css("font-family","Oswald-SemiBold")
    $("#Chat p").css("font-family","Oswald-SemiBold")
    $("#LanguageBottom").attr("title","Сменить язык")
}
function English(){
    $("#LanguageBottom").css("background-image","url('media/img/RussianFlag.png");
    $("#Main-Text-Prodjects").text("Works");
    $("#Main-Text-Works").text("Skills");
    $("#Chat p").text("Chat");
    $("#Main-Text-Prodjects").css("font-family","MomcakeBold-WyonA")
    $("#Main-Text-Works").css("font-family","MomcakeBold-WyonA")
    $("#Chat p").css("font-family","MomcakeBold-WyonA")
    $("#LanguageBottom").attr("title","Change language")
}
function LanguageChange(){
    if ($("#LanguageBottom").css("background-image") == 'url("' +$(document).attr("URL") + 'media/img/RussianFlag.png")'){
        Russian()
    }else if ($("#LanguageBottom").css("background-image") == 'url("' +$(document).attr("URL") + 'media/img/UKFlag.png")'){
        English()
    }
}
function OpenMenu(){
    $("#Menu").css("display","inline");
    $("#Menu").animate({left: 0},300,"linear");
    $("#MenuOff").css("display","inline")
    $("#Menu-Open-Text").animate({opacity: 0},300,"linear");
    setTimeout(function (){
        $("#Menu-Open-Text").css("display","none");
    },300)
}
function CloseMenu(){
    $("#MenuOff").css("display","none");
    $("#Menu").animate({left: "-6cm"},300,"linear");
    $("#Menu-Open-Text").animate({opacity: 1},300,"linear");
    setTimeout(function (){
        $("#Menu-Open-Text").css("display","block");
        $("#Menu").css("display","none");
    },300)
}
function AnimationHover(id){
    $("#" + id).attr("class","onWork");
}
function AnimationUnHover(id){
    $("#" + id).attr("class","Work");
}
function Prodjects_ToRight(){
    if ($("#Prodject2").css("animationName") != "Prodjects_ToRight2") {
        if (Prodject_1_Num == Prodjects.length - 1) {
            Prodject_1_Num = 0;
        } else {
            Prodject_1_Num++;
        }
        if (Prodject_2_Num == Prodjects.length - 1) {
            Prodject_2_Num = 0;
        } else {
            Prodject_2_Num++;
        }
        if (Prodject_3_Num == Prodjects.length - 1) {
            Prodject_3_Num = 0;
        } else {
            Prodject_3_Num++;
        }
        $("#Prodject2").css("animation-name","Prodjects_ToRight2");
        $("#Prodject3").css("animation-name","Prodjects_ToRight3");
        setTimeout(function () {
            $("#Prodject1").css("background-image","url('" + ProdjectList[Prodjects[Prodject_1_Num]] + "')");
            $("#Prodject2").css("background-image","url('" + ProdjectList[Prodjects[Prodject_2_Num]] + "')");
            $("#Prodject2").attr("href",ProdjectList[Prodjects[Prodject_2_Num]]);
            $("#Prodject3").css("background-image","url('" + ProdjectList[Prodjects[Prodject_3_Num]] + "')");
            $("#Prodject2").css("animation-name","");
            $("#Prodject3").css("animation-name","");
        }, 390)
    }
}
function Prodjects_ToLift(){
    if ($("#Prodject2").css("animationName") != "Prodjects_ToLeft2") {
        if (Prodject_1_Num == 0){
            Prodject_1_Num = Prodjects.length - 1;
        } else {
            Prodject_1_Num--;
        }
        if (Prodject_2_Num == 0) {
            Prodject_2_Num = Prodjects.length - 1;
        } else {
            Prodject_2_Num--;
        }
        if (Prodject_3_Num == 0) {
            Prodject_3_Num = Prodjects.length - 1;
        } else {
            Prodject_3_Num--;
        }
        $("#Prodject1").css("animation-name","Prodjects_ToLeft1");
        $("#Prodject2").css("animation-name","Prodjects_ToLeft2");
        setTimeout(function () {
            $("#Prodject1").css("background-image","url('" + ProdjectList[Prodjects[Prodject_1_Num]] + "')");
            $("#Prodject2").css("background-image","url('" + ProdjectList[Prodjects[Prodject_2_Num]] + "')");
            $("#Prodject2").attr("href",ProdjectList[Prodjects[Prodject_2_Num]]);
            $("#Prodject3").css("background-image","url('" + ProdjectList[Prodjects[Prodject_3_Num]] + "')");
            $("#Prodject1").css("animation-name","");
            $("#Prodject2").css("animation-name","");
        }, 390)
    }
}

//start
if(navigator.language == "ru"){
    Russian()
}
ProdjectList = {};
Prodjects = Array();
$.ajax({
    method : "Post",
    url: $(document).attr("URL") + "firstAJAX/",
    contentType: "json",
    headers: {"X-CSRFToken": $('[name=csrfmiddlewaretoken]').attr("value")},
    success: function(data){
        for (const i in data){
            Prodjects.push(i)
            ProdjectList[i] = data[i];
        }
        Prodject_1_Num = Prodjects.length - 1;
        Prodject_2_Num = 0;
        if(Prodjects.length - 1>0){
            Prodject_3_Num = 1;
        }
        else{
            Prodject_3_Num = 0;
        }
        $("#Prodject1").css("background-image","url('" + ProdjectList[Prodjects[Prodject_1_Num]] + "')");
        $("#Prodject2").css("background-image","url('" + ProdjectList[Prodjects[Prodject_2_Num]] + "')");
        $("#Prodject2").attr("href",ProdjectList[Prodjects[Prodject_2_Num]]);
        $("#Prodject3").css("background-image","url('" + ProdjectList[Prodjects[Prodject_3_Num]] + "')");
        setInterval(function (){Prodjects_ToRight()},10000);
    },
});