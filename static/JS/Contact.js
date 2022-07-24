// objects

const language = navigator.language;

const menu = $("#menu");
const menu_close_area = $("#menu_close_area");
const name = $('#name');
const submit = $('#submit');
const main_page_text = $("#main_page_link p");
const main_page = $("#main_page_link");
const message = $("#messages");
const cookie = $("#cookie").attr("cookie");

let is_del = false;

/* WebSocket */

const socket = new WebSocket("ws://" + document.location.host + "/ws/chat/room");

socket.onmessage = function(event) {
    if(JSON.parse(event['data'])["admin"]){
        message.html(message.html() + "<p class='message_admin new' style='opacity: 0;'>" + JSON.parse(event['data'])["message"] + "</p>");
    }
    else{
        message.html(message.html() + "<p class='message new' style='opacity: 0;'>" + JSON.parse(event['data'])["message"] + "</p>");
    }
    $(".new").animate({opacity: "1"}, 1500, "linear");
    message.scrollTop(message.prop("scrollHeight"));
};

// functions

function del_text() {
    if (!is_del) {
        $('#name').val('');
        is_del = true;
    }
}
function open_menu() {
    menu.css("display", "inline");
    menu.animate({left: 0}, 300, "linear");
    setTimeout(function() {
        menu_close_area.css("display", "inline");
    },300);
}
function close_menu() {
    menu_close_area.css("display", "none");
    menu.animate({left: "-6cm"}, 300, "linear");
    setTimeout(function() {
        menu.css("display", "none");
    },300);
}
function write_text() {
    const object = $('#name');
    if(object.val() === '') {
        is_del = false;
        if(language === 'ru') {
            object.val('Име');
        }
        else{
            object.val('Name');
        }
    }
}
function web_socket() {
    socket.send(JSON.stringify({"text": $("#text").val(), "name": $("#name").val(),"cookie": cookie, "admin": false}));
    $('#text').val('')
}

if(language === "ru") {
    main_page_text.css("font-family", "EngFont");
    main_page.attr("title", "Главная страница");
    name.val("Имя");
    submit.val("ОТПРАВИТЬ");
    submit.css("font-family", "RuFont");
}

message.scrollTop(message.prop("scrollHeight"));

event = true;

