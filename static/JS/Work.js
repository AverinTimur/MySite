// objects

let language = navigator.language;

const menu = $("#menu");
const menu_close_area = $("#menu_close_area");
const menu_open_text = $("#menu_open_text");
const language_object = $("#language_change_button");
const en = $("#En");
const ru = $("#Ru");

// functions

function open_menu() {
    menu.css("display", "inline");
    menu.animate({left: 0}, 300, "linear");
    menu_close_area.css("display", "inline");
    menu_open_text.animate({opacity: 0}, 300, "linear");
    setTimeout(function() {
        menu_open_text.css("display", "none");
    },300);
}
function close_menu() {
    menu_close_area.css("display", "none");
    menu.animate({left: "-6cm"}, 300, "linear");
    menu_open_text.animate({opacity: 1}, 300, "linear");
    setTimeout(function() {
        menu_open_text.css("display", "block");
        menu.css("display", "none");
    },300)
}
function Russian() {
    language_object.css("background-image", "url('/media/img/UKFlag.png')");
    en.css("display", "none");
    ru.css("display", "block");
    language_object.attr("title", "Сменить язык");
}
function English() {
    language_object.css("background-image","url('/media/img/RussianFlag.png");
    ru.css("display", "none");
    en.css("display", "block");
    language_object.attr("title", "Change language");
}
function change_language() {
    if (language !== "ru") {
        Russian();
        language = "ru";
    }else {
        English();
        language = "en";
    }
}

// start

language === "ru" ? Russian() : ru.css("display", "none");

setTimeout(function () {
    $("h1").animate({
        top: "0",
    }, 500, "linear");
    $("#top").animate({
        height: "13vw",
        zIndex: "1",
    }, 500, "linear");
    setTimeout(function () {
        $("#menu_open_button").css("display", "inline-block");
        $(".main").css("margin-top", "8vw");
        $("#top").css("position", "relative");
    }, 550);
},1000);
