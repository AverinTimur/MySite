// objects

const language = navigator.language;

const menu = $("#menu");
const menu_close_area = $("#menu_close_area");
const title = $('#title')
const contact = $('#contact')
const name = $('#name')

let del_list = new Map();

// functions

function del_text(obj) {
    if (!del_list[obj]) {
        $('#' + obj).val('');
        del_list[obj] = true;
    }
}
function open_menu() {
    menu.css("display","inline");
    menu.animate({left: 0},300,"linear");
    setTimeout(function() {
        menu_close_area.css("display","inline");
    },300);
}
function close_menu() {
    menu_close_area.css("display","none");
    menu.animate({left: "-6cm"},300,"linear");
    setTimeout(function() {
        menu.css("display","none");
    },300);
}
function write_text(obj) {
    const object = $('#' + obj);
    if(object.val() === '') {
        del_list[obj] = false;
        if(language === 'ru') {
            switch(obj) {
                case 'name':
                    object.val('Име');
                    break;
                case 'contact':
                    $('#' + obj).val('Контакты(email, telegram, сайт)');
                    break;
            }
        }
        else{
            switch(obj) {
                case 'name':
                    object.val('Name');
                    break;
                case 'contact':
                    object.val('Contact(email, telegram, website)');
                    break;
            }
        }
    }
}
if(language === 'ru') {
    title.text('ЧАТ');
    title.css("font-family","Oswald-SemiBold");
    name.val("Имя");
    contact.val("Контакты(email, telegram, сайт)");
    title.val("ОТПРАВИТЬ");
    title.css("font-family","Oswald-SemiBold");
}
