// 一、头部 用户部分
// 登录与注册
var loginButton = document.querySelector('.loginButton');
var registerButton = document.querySelector('.registerButton');
var login = document.querySelector('.login');
var register = document.querySelector('.register');
var login_background = document.querySelector('.login_background');
var register_background = document.querySelector('.register_background');
var login_close = document.querySelectorAll('.login_close');
var login_returnRegister = document.querySelector('.login_returnRegister_a');
var register_returnLogin = document.querySelector('.register_returnLogin_a');
var login_personMessage_password_close = document.querySelector('.login_personMessage_password_close');
var login_personMessage_password = document.querySelector('.login_personMessage_password');
var register_personMessage_password_close1 = document.querySelector('.register_personMessage_password_close1');
var register_personMessage_password1 = document.querySelector('.register_personMessage_password1');
var register_personMessage_password_close2 = document.querySelector('.register_personMessage_password_close2');
var register_personMessage_password2 = document.querySelector('.register_personMessage_password2');
loginButton.onclick = function() {
    login_background.style.display = 'block';
    login.style.display = 'block';
    register.style.display = 'none';

}
registerButton.onclick = function() {
    login_background.style.display = 'block';
    login.style.display = 'none';
    register.style.display = 'block';
}
login_close[0].onclick = function() {
    login_background.style.display = 'none';
}
login_close[1].onclick = function() {
    login_background.style.display = 'none';
}
login_returnRegister.onclick = function() {
    login.style.display = 'none';
    register.style.display = 'block';
}
register_returnLogin.onclick = function() {
    login.style.display = 'block';
    register.style.display = 'none';
}

function Eyeclose(password, eyeclose) {
    return function() {
        console.log("sss")
        if (password.type == 'password') {
            password.type = 'text';
            eyeclose.style.background = 'url(../image/眼睛.png)';
        } else {
            password.type = 'password';
            eyeclose.style.background = 'url(../image/闭眼睛.png)';
        }
    }
}
login_personMessage_password_close.onclick = Eyeclose(login_personMessage_password, login_personMessage_password_close);
register_personMessage_password_close1.onclick = Eyeclose(register_personMessage_password1, register_personMessage_password_close1);
register_personMessage_password_close2.onclick = Eyeclose(register_personMessage_password2, register_personMessage_password_close2);


// 二、中间部分 内容栏的切换
var middle_content = document.querySelector(".middle_content")
var middle_content_nav = document.querySelector(".middle_content_nav")
var middle_content_nav_list = middle_content_nav.querySelectorAll('a');
var middle_content_itemBox = middle_content.querySelectorAll('.middle_content_itemBox');
for (var i = 0; i < middle_content_nav_list.length; i++) {
    middle_content_nav_list[i].setAttribute('data_index', i);
    middle_content_nav_list[i].onclick = function() {
        // 清除其他类
        for (var j = 0; j < middle_content_nav_list.length; j++) {
            middle_content_nav_list[j].className = 'middle_content_nav_ele';
        }
        this.className = 'middle_content_nav_current';
        var index = this.getAttribute('data_index');
        // 隐藏其他盒子
        for (var i = 0; i < middle_content_itemBox.length; i++) {
            middle_content_itemBox[i].style.display = 'none';
        }
        middle_content_itemBox[index].style.display = 'block';
    };
}