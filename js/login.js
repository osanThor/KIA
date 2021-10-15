'use strict';
const loginOkForm=document.querySelector('form#loginOkForm');
const userIdMain=loginOkForm.querySelector('#userIdMain');
const userPwMain=loginOkForm.querySelector('#userPwMain');
const loginOkBtn=loginOkForm.querySelector('#loginOkBtn');

loginOkBtn.addEventListener('click',mainLoginFunc);

function mainLoginFunc(e){
    let email = userIdMain.value;
    let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
            

    if (userIdMain.value == "") {
        alert('아이디를 입력하세요')
        userIdMain.focus();
        return false;
    }
    if(exptext.test(email)==false){
        alert("이메일 형식이 올바르지 않습니다.");
        userIdMain.focus();
        return false;
    }

    if (userPwMain.value == '' || userPwMain.value.length <= 0) {
        alert('비밀번호를 입력하세요');
        userPw.focus();
        return false;
    }


    alert('로그인 실행');
    loginOkForm.submit();
}