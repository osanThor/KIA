'use strict';

const joinCheckForm = document.querySelector('form#joinCheckForm');
const CheckTit = joinCheckForm.querySelectorAll('.chechTitle');
const CheckBoxes = joinCheckForm.querySelectorAll('input[type=checkbox]');
const joinCheckBtn = joinCheckForm.querySelector('#joinCheckedBtn')



const joinOkForm = document.querySelector('form#joinOkForm');
const userIdMain=joinOkForm.querySelector('#userIdMain');
const userPwMain=joinOkForm.querySelector('#userPwMain');
const userPwCheck=joinOkForm.querySelector('#userPwCheck');
const userName=joinOkForm.querySelector('#userNameMain');
const userBday=joinOkForm.querySelector('.userBday');
const botGen = joinOkForm.querySelector('.bottom-input.gender');
const labelGen = joinOkForm.querySelectorAll('.labelGen');
const gender = joinOkForm.querySelectorAll('input.gender');
const adress = joinOkForm.querySelectorAll('#adress');
const phone = joinOkForm.querySelectorAll('.userPhone');
const backBtn=joinOkForm.querySelector('#backBtn');
const joinOkBtn=joinOkForm.querySelector('#joinOkBtn');



joinCheckBtn.addEventListener('click',joinCheckFunc);

function checkSelectAll(){
    const check=document.querySelectorAll('.check');
    const checked=document.querySelectorAll('.check:checked');
    const selectAll=document.querySelector('#selectAll');

    if(check.length === checked.length){
        selectAll.checked=true;
    }else{
        selectAll.checked=false;
    }

};
function selctAll(selectAll) {
    CheckBoxes.forEach((el) => {
        el.checked = selectAll.checked;
    })
};


function joinCheckFunc(e){
    const selectAll=document.querySelector('#selectAll');
    if(!selectAll.checked){
        alert('전체 동의를 해주셔야합니다')
        return false;
    }else{
        joinCheckForm.style.display="none";
        joinOkForm.style.display="flex"
    }
};


backBtn.addEventListener('click',()=>{
    joinCheckForm.style.display="flex";
    joinOkForm.style.display="none"
});

joinOkBtn.addEventListener('click',joinOkFunc);

botGen.addEventListener('click',()=>{
    let _this=event.target;
    labelGen.forEach((el,idx)=>{
        if(el==_this){
            el.classList.add('genderChecked');
            gender[idx].checked=true;
        }else{
            el.classList.remove('genderChecked');
        }
    });
});

const joinIdSpan = joinOkForm.querySelectorAll('span')
function joinOkFunc(e){
    let email = userIdMain.value;
    let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    
    if (userIdMain.value == "" || userIdMain.value.length <= 0 ) {
        alert('아이디를 입력하세요.')
        joinIdSpan[1].style.display="inline"
        joinIdSpan[0].style.display="none"
        userIdMain.focus();
        return false;
    }
    if(exptext.test(email)==false){
        alert("이메일 형식이 올바르지 않습니다.");
        joinIdSpan[1].style.display="inline"
        joinIdSpan[0].style.display="none"
        userIdMain.focus();
        return false;
    }else{
        joinIdSpan[0].style.display="inline"
        joinIdSpan[1].style.display="none"
    }

    if (userPwMain.value == '' || userPwMain.value.length <= 0) {
        alert('비밀번호를 입력하세요.');
        userPwMain.focus();
        return false;
    }
    if (userPwMain.value !== userPwCheck.value ) {
        alert('입력하신 비밀번호와 다릅니다.');
        userPwCheck.focus();
        return false;
    }
    if(userName.value == "" || userName.value.length <=0){
        alert('이름을 입력하세요');
        userName.focus();
        return false;
    }
    if (userBday[0].value == "") {
        alert('생년월일을 입력해 주세요')
        userBday[0].focus();
        return false
    }
    if (userBday[1].value == "") {
        alert('생년월일을 입력해 주세요')
        userBday[1].focus();
        return false
    }
    if (userBday[2].value == "") {
        alert('생년월일을 입력해 주세요')
        userBday[2].focus();
        return false
    }
    if(adress.value == "" || adress.value.length <=0){
        alert('지역을 입력하세요');
        adress.focus();
        return false;
    }
    if (phone[0].value == "") {
        alert('전화번호 다시 선택')
        phone[0].focus();
        return false
    }
    if (phone[1].value == "" || phone[1].value.length <= 0) {
        alert('전화번호를 3~4자리 채워주세요')
        phone[1].focus();
        return false
    }
    if (phone[1].value.length < 3 || phone[1].value.length > 4) {
        alert('전화번호를 3~4자리 채워주세요')
        phone[1].focus();
        phone[1].value = "";
        return false
    }
    if (phone[2].value == "" || phone[2].value.length <= 0) {
        alert('전화번호를 3~4자리 채워주세요')
        phone[2].focus();
        return false
    }
    if (phone[2].value.length < 3 || phone[2].value.length > 4) {
        alert('전화번호를 3~4자리 채워주세요')
        phone[2].focus();
        phone[2].value = ""
        return false
    }
    alert('회원가입 완료');
    joinOkForm.submit();
};