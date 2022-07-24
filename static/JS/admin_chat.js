// objects

const language = navigator.language;

const menu = $("#menu");
const menu_close_area = $("#menu_close_area");
const message = $("#messages");

// WebSocket

const socket = new WebSocket("ws://" + document.location.host + "/ws/chat/admin");

socket.onmessage = function(event) {
    if(JSON.parse(event['data'])['admin']){
        message.html(message.html() + "<p class='message_admin new' style='opacity: 0;'>" + JSON.parse(event['data'])["message"] + "</p>");
    }
    else{
        message.html(message.html() + "<p class='message new' style='opacity: 0;'>" + JSON.parse(event['data'])["message"] + "</p>");
    }
    $(".new").animate({opacity: "1"}, 1500, "linear");
    message.scrollTop(message.prop("scrollHeight"));
};


// functions

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
function open_chat(element) {
    $("#cookie").attr("cookie", element.value);
    $.ajax({
        url: $(document).attr("URL") + "/user",
        method: "POST",
        headers: {"X-CSRFToken": $('[name=csrfmiddlewaretoken]').attr("value")},
        data: {'cookie': element.value},
        success: function(data) {

            for(let i in data) {
                if(data[i]['admin']){
                    message.html(message.html() + "<p class='message_admin'>" + data[i]['text'] + "</p>");
                }
                else {
                    message.html(message.html() + "<p class='message'>" + data[i]['text'] + "</p>");
                }
            }
            message.scrollTop(message.prop("scrollHeight"));
            $("#chats").css("display", "none");
        },
    });
    $("h2").text($(element).text());
    $("h1").animate({top: "-15vh"}, 800, "linear")
    $("h2").animate({top: "0"}, 800, "linear")
}
function open_chats_menu() {
    $("#cookie").attr("cookie", "")
    $('#chats').css("display", "inline-block")
    $("h1").animate({top: "0"}, 500, "linear")
    $("h2").animate({top: "15vh"}, 500, "linear")
    setTimeout(function () {
        $("h2").text("");
    }, 800)
}
function web_socket() {
    socket.send(JSON.stringify({"text": $("#text").val(), "cookie": $("#cookie").attr("cookie")}));
    $('#text').val('');
}
