'use strict';
//header
const header = document.querySelector('.header');
const innerHeader = header.querySelector('.inner-header');
const nav = innerHeader.querySelector('.nav');
const topNav = nav.querySelector('.top-nav');
const leftTopNav = topNav.querySelector('.left-top-nav');
const leftTopNavUl = leftTopNav.querySelector('ul');
const leftTopNavUlLi = leftTopNavUl.querySelectorAll('li');
const sideMenu = header.querySelector('li::before');
const hLogo = topNav.querySelector('.logo');
const spanhLogo = hLogo.querySelector('span.hLogo');
const rightTopNav = topNav.querySelector('.right-top-nav');
const rightTopNavUl = rightTopNav.querySelector('ul');
const rightTopNavUlLi = rightTopNavUl.querySelectorAll('li');
const bottomNav = nav.querySelector('.bottom-nav');
const gnb = bottomNav.querySelector('.gnb');
const gnbUl = gnb.querySelector('ul');
const gnbUlLi = gnb.querySelectorAll('ul>li');

const gnbSub = gnb.querySelectorAll('ul.gnbSub');
const gnbSubLi = gnb.querySelectorAll('ul.gnbSub>li');
const gnbSub0Li = gnbSub[0].querySelectorAll('li');
const gnbSub1Li = gnbSub[1].querySelectorAll('li');
const gnbSub2Li = gnbSub[2].querySelectorAll('li');
const gnbSub3Li = gnbSub[3].querySelectorAll('li');

const spanNavCon = document.querySelector('span.nav-con');

//span
const spanNav = topNav.querySelectorAll('span');

const gnbA = gnb.querySelectorAll('a');


header.addEventListener('mouseover', () => {
    hLogo.setAttribute('src', "img/logo.png")
});
//hLogo
const hLogoSrc = hLogo.getElementsByClassName("logo");

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled == 0) {
        headerIn();
        header.addEventListener('mouseover', () => {
            headerOut();
        });
        header.addEventListener('mouseout', () => {
            headerIn();
        });

    } else {
        headerOut();
        header.addEventListener('mouseout', () => {
            headerOut();
        });
    };
});
const headerIn = key => {
    header.style.background = '#1117'
    header.classList.add('scrollTop');
    spanNav[0].style.background = "url(img/sideBar-white.png) no-repeat 50%/cover";
    spanNav[1].style.background = "url(img/globe-white.png) no-repeat 50%/cover";
    spanNav[3].style.background = "url(img/search-white.png) no-repeat 50%/cover";
    spanNav[4].style.background = "url(img/location-white.png) no-repeat 50%/cover";
    spanNav[5].style.background = "url(img/login-white.png) no-repeat 50%/cover";
    spanhLogo.style.background = "url(img/logo-white.png) no-repeat 50%/cover";
    header.style.color = "#fff"
    gnbA.forEach((el) => {
        el.style.color = '#fff'
    });
};

const headerOut = key => {
    header.style.background = '#fff'
    header.classList.remove('scrollTop');
    spanNav[0].style.background = "url(img/sideBar.png) no-repeat 50%/cover";
    spanNav[1].style.background = "url(img/globe.png) no-repeat 50%/cover";
    spanNav[3].style.background = "url(img/search.png) no-repeat 50%/cover";
    spanNav[4].style.background = "url(img/location.png) no-repeat 50%/cover";
    spanNav[5].style.background = "url(img/login.png) no-repeat 50%/cover";
    spanhLogo.style.background = "url(img/logo.png) no-repeat 50%/cover";
    header.style.color = "#000"
    gnbA.forEach((el) => {
        el.style.color = '#000'
    });
};

//ganUlLi 호버시 sub-nav 높이
//변수 선언

// const maxHeight = Math.max.apply(null, gnbSub.offsetHeight);


const subNav = innerHeader.querySelector('.sub-nav');
const subNavCon = subNav.querySelector('.sub-nav-con');

gnbUl.addEventListener('mouseover', () => {
    subNav.style.height = '300px';
    subNav.style.visibility = "visible"
    subNav.style.opacity = "1"
});
gnbUl.addEventListener('mouseout', () => {
    subNav.style.height = "0"
    subNav.style.visibility = "hidden"
});


subNavCon.addEventListener('mouseover', () => {
    subNav.style.height = '300px';
    subNav.style.visibility = "visible"
    subNav.style.opacity = "1"
    spanNavCon.classList.add('fadeIn')
});
subNavCon.addEventListener('mouseout', () => {
    subNav.style.height = "0"
    subNav.style.visibility = "hidden"
    spanNavCon.classList.remove('fadeIn');

});


//gnbSubLi 호버 시 img

const spanArr = [];
for (let no = 0; no < gnbSubLi.length; no++) {
    spanArr.push('url(img/header-' + no + '.webp) no-repeat 50%/cover');
    gnbSubLi[no].style.background = spanArr[no];
};
let no = -1;
gnbSub[0].addEventListener('mouseover', () => {
    let _this = event.target;
    gnbSub0Li.forEach((el, idx) => {
        if (el == _this.parentNode) {
            spanNavCon.classList.add('fadeIn')
            no = -1;
            no++;
            spanNavCon.style.background = el.style.background;
        }
    })
});
gnbSub[0].addEventListener('mouseout', () => {
    let _this = event.target;
    gnbSub0Li.forEach((el, idx) => {
        if (el == _this.parentNode) {
            spanNavCon.classList.remove('fadeIn')
        }
    })
});
gnbSub[1].addEventListener('mouseover', () => {
    let _this = event.target;
    gnbSub1Li.forEach((el, idx) => {
        if (el == _this.parentNode) {
            spanNavCon.classList.add('fadeIn')
            no = 4;
            no++;
            spanNavCon.style.background = el.style.background;
        }
    })
});
gnbSub[1].addEventListener('mouseout', () => {
    let _this = event.target;
    gnbSub1Li.forEach((el, idx) => {
        if (el == _this.parentNode) {
            spanNavCon.classList.remove('fadeIn')
        }
    })
});
gnbSub[2].addEventListener('mouseover', () => {
    let _this = event.target;
    gnbSub2Li.forEach((el, idx) => {
        if (el == _this.parentNode) {
            spanNavCon.classList.add('fadeIn')
            no = 15;
            no++;
            spanNavCon.style.background = el.style.background;
        }
    })
});
gnbSub[2].addEventListener('mouseout', () => {
    let _this = event.target;
    gnbSub2Li.forEach((el, idx) => {
        if (el == _this.parentNode) {
            spanNavCon.classList.remove('fadeIn')
        }
    })
});
gnbSub[3].addEventListener('mouseover', () => {
    let _this = event.target;
    gnbSub3Li.forEach((el, idx) => {
        if (el == _this.parentNode) {
            spanNavCon.classList.add('fadeIn')
            no = -1;
            no++;
            spanNavCon.style.background = el.style.background;
        }
    })
});
gnbSub[3].addEventListener('mouseout', () => {
    let _this = event.target;
    gnbSub3Li.forEach((el, idx) => {
        if (el == _this.parentNode) {
            spanNavCon.classList.remove('fadeIn')
        }
    })
});

//menu

const menuCon = document.querySelector('.menu-con');

const sideBar = document.querySelector('li.sideBar');

const closeBtn = document.querySelector('.close');

sideBar.addEventListener('click', () => {
    menuCon.style.left = '0'
    menuCon.style.visibility = 'visible'
    menuCon.style.opacity = '1'
    menuCon.style.transition = 'all 0.5s'
    header.style.display = 'none';
});
closeBtn.addEventListener('click', () => {
    menuCon.style.left = '-100%';
    menuCon.style.visibility = 'hidden';
    menuCon.style.opacity = '0';
    header.style.display = 'block';
});

//search

const search = document.querySelector('span.search');
const windowSearch = innerHeader.querySelector('.windowSearch');
const searchCon = windowSearch.querySelector('.searchCon');
const searchClose = searchCon.querySelector('span.searchClose');
const searchBox = searchCon.querySelector('form#searchBox');
const searchOkBtn = searchBox.querySelector('#searchOkBtn');

search.addEventListener('click', () => {
    windowSearch.style.display = 'block';

})
searchClose.addEventListener('click', () => {
    windowSearch.style.display = 'none';
});

searchOkBtn.addEventListener('click', () => {
    alert('검색된 내용이 없습니다.');
    searchBox.focus();
    return false;
});

//windowLogin

const spanLogin = document.querySelector('span.login');
const windowLogin = document.querySelector('.windowLogin');
const loginCon = windowLogin.querySelector('.loginCon');

spanLogin.addEventListener('mouseover', () => {
    windowLogin.style.right = "0";
});
spanLogin.addEventListener('click', () => {
    windowLogin.style.right = "-100%";
});

windowLogin.addEventListener('mouseover', () => {
    windowLogin.style.right = "0";
});
windowLogin.addEventListener('mouseout', () => {
    windowLogin.style.right = "-100%";
});
//마우스 휠 감지 header 표현

window.addEventListener('mousewheel', () => {
    const hei = window.innerHeight;
    const deltaY = event.deltaY;
    const scrolled = window.scrollY;

    if (scrolled > hei) {
        header.style.top = "-100%";
        header.style.transition = "all .5s";
        if (deltaY > 0) {
            header.style.top = "-100%";
        } else {
            header.style.top = "0";
        }
    } else {
        header.style.top = "0";
    }
});



//login

const loginForm = document.querySelector('form#loginForm');
const emailId = loginForm.querySelector('#userId');
const userPw = loginForm.querySelector('#userPw');
const loginBtn =  loginForm.querySelector('#loginBtn');

loginBtn.addEventListener('click',loginFunc);

function loginFunc(event){
    let email = emailId.value;
    let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
            
    if (emailId.value == "") {
        alert('아이디를 입력하세요')
        userId.focus();
        return false;
    }
    if(exptext.test(email)==false){
        alert("이메일 형식이 올바르지 않습니다.");
        emailId.focus();
        return false;
    }

    if (userPw.value == '' || userPw.value.length <= 0) {
        alert('비밀번호를 입력하세요');
        userPw.focus();
        return false;
    }
    alert('로그인 실행');

    loginForm.submit();
};