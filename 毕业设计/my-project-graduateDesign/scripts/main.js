// 用户部分
// 登录与注册
var loginButton = document.querySelector('.loginButton');
var registerButton = document.querySelector('.registerButton');
var login = document.querySelector('.login');
var register = document.querySelector('.register');
var login_background = document.querySelector('.login_background');
var register_background = document.querySelector('.register_background');
var login_close = document.querySelectorAll('.login_close');
var login_returnRegister = document.querySelector('.login_returnRegister');
var register_returnLogin = document.querySelector('.register_returnLogin');
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
login_personMessage_password_close.onclick = function() {
    if (login_personMessage_password.type == 'password') {
        login_personMessage_password.type = 'text';
        login_personMessage_password_close.style.background = 'url(../image/眼睛.png)';
    } else {
        login_personMessage_password.type = 'password';
        login_personMessage_password_close.style.background = 'url(../image/闭眼睛.png)';
    }
}
register_personMessage_password_close1.onclick = function() {
    if (register_personMessage_password1.type == 'password') {
        register_personMessage_password1.type = 'text';
        register_personMessage_password_close1.style.background = 'url(../image/眼睛.png)';
    } else {
        register_personMessage_password1.type = 'password';
        register_personMessage_password_close1.style.background = 'url(../image/闭眼睛.png)';
    }
}
register_personMessage_password_close2.onclick = function() {
    if (register_personMessage_password2.type == 'password') {
        register_personMessage_password2.type = 'text';
        register_personMessage_password_close2.style.background = 'url(../image/眼睛.png)';
    } else {
        register_personMessage_password2.type = 'password';
        register_personMessage_password_close2.style.background = 'url(../image/闭眼睛.png)';
    }
}