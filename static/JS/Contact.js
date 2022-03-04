let dellist = new Map();
function DelText(obj) {
    if (!dellist[obj]) {
        $('#' + obj).val('');
        dellist[obj] = true;
    }
}
function OpenMenu(){
    $("#Menu").css("display","inline");
    $("#Menu").animate({left: 0},300,"linear");
    setTimeout(function (){
        $("#MenuOff").css("display","inline");
    },300)
}
function CloseMenu(){
    $("#MenuOff").css("display","none");
    $("#Menu").animate({left: "-6cm"},300,"linear");
    setTimeout(function (){
        $("#Menu").css("display","none");
    },300)
}
function TextWrite(obj){
    if($('#' + obj).val() == ''){
        dellist[obj] = false;
        if(navigator.language == 'ru'){
            switch(obj){
                case 'Name':
                    $('#' + obj).val('Име');
                    break;
                case 'Contact':
                    $('#' + obj).val('Контакты(email, telegram, сайт)');
                    break;
            }
        }
        else{
            switch(obj){
                case 'Name':
                    $('#' + obj).val('Name');
                    break;
                case 'Contact':
                    $('#' + obj).val('Contact(email, telegram, website)');
                    break;
            }
        }
    }
}
if(navigator.language == 'ru'){
    $('#Title').text('ЧАТ')
    $('#Title').css("font-family","Oswald-SemiBold")
    $('#Name').val("Имя")
    $('#Contact').val("Контакты")
    $('#Submit').val("ОТПРАВИТЬ")
    $('#Submit').css("font-family","Oswald-SemiBold")
}