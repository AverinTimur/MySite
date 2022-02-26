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
function LanguageChange(){
    if ($("#LanguageBottom").css("background-image") == 'url("' + new URL($(document).attr("URL")).protocol + '//' + new URL($(document).attr("URL")).host + '/media/img/RussianFlag.png")'){
        $("#LanguageBottom").css("background-image","url('/media/img/UKFlag.png')");
        $("#En").css("display","none");
        $("#Ru").css("display","block");
        $("#LanguageBottom").attr("title","Сменить язык");
    }else if ($("#LanguageBottom").css("background-image") == 'url("' + new URL($(document).attr("URL")).protocol + '//' + new URL($(document).attr("URL")).host + '/media/img/UKFlag.png")'){
        $("#LanguageBottom").css("background-image","url('/media/img/RussianFlag.png");
        $("#Ru").css("display","none");
        $("#En").css("display","block");
        $("#LanguageBottom").attr("title","Change language");
    }
}


if(navigator.language == "ru"){
    $("#LanguageBottom").css("background-image","url('/media/img/UKFlag.png')");
    $("#En").css("display","none");
    $("#LanguageBottom").attr("title","Сменить язык");
}
else{
    $("#Ru").css("display","none");
}