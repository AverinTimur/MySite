function start_event(){
    const interval = setInterval(function (){
        if(event) {
            setTimeout(function () {
                title.animate({
                    top: "0",
                    "font-size": "15vh",
                }, 500, "linear");
                $("#top").animate({
                    height: "15vh",
                    zIndex: "1",
                }, 500, "linear");
                setTimeout(function () {
                    $("#menu_open_button").css("display", "inline-block");
                }, 550);
            },500);
            clearInterval(interval)
        }
    }, 100);
}

const title = $('#title');
let event = false;

if(navigator.language === 'ru') {
    $("*").css("font-family", "RuFont");
    setTimeout(function (){
        title.text('Ч');
    }, 400);
    setTimeout(function (){
        title.text('ЧА');
    }, 800);
    setTimeout(function (){
        title.text('ЧАТ');
        start_event()
    }, 1200);
}
else {
    setTimeout(function (){
        title.text('C');
    }, 400);
    setTimeout(function (){
        title.text('Ch');
    }, 800);
    setTimeout(function (){
        title.text('Chat');
    }, 1200);
    setTimeout(function (){
        title.text('Chat');
        start_event()
    }, 1600);
}