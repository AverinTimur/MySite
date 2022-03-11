// objects

let language = navigator.language

const skills_text = $("#skills_text");
const work_text = $("#works_text");
const left_work = $("#left_work");
const right_work = $("#right_work");
const main_work = $("#main_work");
const menu = $("#menu");
const menu_close_area = $("#menu_close_area");
const menu_open_text = $("#menu_open_text");
const chat_text = $("#chat p");
const chat = $("#chat");
const language_object = $("#language_change_button");
changing = false;

// functions

function Russian() {
    language_object.css("background-image", "url('media/img/UKFlag.png')");
    work_text.text("работы");
    skills_text.text("навыки");
    chat_text.text("ЧАТ");
    work_text.css("font-family", "RuFont");
    skills_text.css("font-family", "RuFont");
    chat_text.css("font-family", "SecondRuFont");
    language_object.attr("title", "Сменить язык");
    chat.attr("title", "Чат");
}
function English() {
    language_object.css("background-image", "url('media/img/RussianFlag.png");
    work_text.text("Works");
    skills_text.text("Skills");
    chat_text.text("Chat");
    work_text.css("font-family", "EngFont");
    skills_text.css("font-family", "EngFont");
    chat_text.css("font-family", "EngFont");
    language_object.attr("title", "Change language");
    chat.attr("title", "Chat");
}
function change_language() {
    if (language === 'ru') {
        English();
        language = 'en';
    }
    else {
        Russian();
        language = 'ru';
    }
}
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
function skill_on_hover(id) {
    $("#" + id).attr("class", "active_skill");
}
function skill_out_hover(id) {
    $("#" + id).attr("class", "skill");
}
function work_to_right() {
    if (main_work.css("animationName") !== "work_main_to_right" && !changing) {
        changing = true;
        left_work_num === works.length - 1 ? left_work_num = 0 : left_work_num++;
        main_work_num === works.length - 1 ? main_work_num = 0 : main_work_num++;
        right_work_num === works.length - 1 ? right_work_num = 0 : right_work_num++;

        main_work.css("animation-name", "work_main_to_right");
        right_work.css("animation-name", "work_left_to_right");
        setTimeout(function() {
            left_work.css("background-image", "url('" + work_list[works[left_work_num]] + "')");
            main_work.css("background-image", "url('" + work_list[works[main_work_num]] + "')");
            main_work.attr("href", work_list[works[main_work_num]]);
            right_work.css("background-image", "url('" + work_list[works[right_work_num]] + "')");
            main_work.css("animation-name", "");
            right_work.css("animation-name", "");
            changing = false;
        }, 390);
    }
}
function work_to_left() {
    if (main_work.css("animationName") !== "work_main_to_left" && !changing) {
        changing = true;
        left_work_num === 0 ? left_work_num = works.length - 1 : left_work_num--;
        main_work_num === 0 ? main_work_num = works.length - 1 : main_work_num--;
        right_work_num === 0 ? right_work_num = works.length - 1 : right_work_num--;

        left_work.css("animation-name", "work_left_to_left");
        main_work.css("animation-name", "work_main_to_left");
        setTimeout(function () {
            left_work.css("background-image", "url('" + work_list[works[left_work_num]] + "')");
            main_work.css("background-image", "url('" + work_list[works[main_work_num]] + "')");
            main_work.attr("href", work_list[works[main_work_num]]);
            right_work.css("background-image", "url('" + work_list[works[right_work_num]] + "')");
            left_work.css("animation-name", "");
            main_work.css("animation-name", "");
            changing = false;
        }, 390);
    }
}

// start

if(language === "ru") {
    Russian();
}

let work_list = Array();
let works = Array();
$.ajax({
    method : "Post",
    url: $(document).attr("URL") + "StartAJAX/",
    contentType: "json",
    headers: {"X-CSRFToken": $('[name=csrfmiddlewaretoken]').attr("value")},
    success: function(data) {
        for (const i in data) {
            works.push(i);
            work_list[i] = data[i];
        }

        left_work_num = works.length - 1;
        main_work_num = 0;

        works.length - 1 > 0 ? right_work_num = 1 : right_work_num = 0;

        left_work.css("background-image", "url('" + work_list[works[left_work_num]] + "')");
        main_work.css("background-image", "url('" + work_list[works[main_work_num]] + "')");
        main_work.attr("href", work_list[works[main_work_num]]);
        right_work.css("background-image", "url('" + work_list[works[right_work_num]] + "')");
        setInterval(function() {
            work_to_right();
        },10000);
    },
});
