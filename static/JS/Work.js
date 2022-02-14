function ConnectOn(){
    $('#Connect').css('display', 'flex');
    $('#Connect').animate({opacity:1},250,'linear')
}
function ConnectOff(){
    $('#Connect').animate({opacity:0},250,'linear')
    setTimeout(function (){$('#Connect').css('display', 'none');},500)
}
function NumberOn(){
    $('#Number').css('display', 'flex');
    $('#Number-Div').animate({opacity:1},250,'linear')
}
function NumberOff(){
    $('#Number-Div').animate({opacity:0},250,'linear')
    setTimeout(function (){$('#Number').css('display', 'none');},500)
}
if(navigator.language == "ru"){
    $("#About-Buy").text("КУПИТЬ");
    $("#About-Buy").css("left","5%")
    $("#About-Buy").css("font-family",'Oswald-SemiBold')
    $("#About-Buy").css("font-weight","700")
}