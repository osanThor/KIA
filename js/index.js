'use strict';
// 

//container
const secCon = document.querySelector('.sec-con');
const gallery = secCon.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = galleryUl.querySelectorAll('li');
const centerBtn = secCon.querySelector('.centerBtn');
const spanArrow = centerBtn.querySelectorAll('span.arrow');
const bCon = secCon.querySelector('.bCon');
const items = bCon.querySelector('.items')
const itemsUl = items.querySelector('ul')
const itemsUlLi = itemsUl.querySelectorAll('li')
const itemsUlBtn = itemsUl.querySelector('button')

const sec1Con = secCon.querySelectorAll('.sec1-con');
const secTxt = secCon.querySelectorAll('.sec1-txt')
const secA = secCon.querySelectorAll('.sec1-con>a')

const arrBg = [];
for (let i = 0; i < galleryUlLi.length; i++) {
    arrBg.push('url(img/sec-con' + i + '.jpg) no-repeat 50%/cover');
    galleryUlLi[i].style.background = arrBg[i];
};

let i = -1;

function autoGallery_fade() {
    if (i >= galleryUlLi.length - 1) i = -1;

    i++;
    galleryUlLi.forEach((el, idx) => {
        if (idx == i) {
            el.classList.add('fadeIn');
            itemsUlLi[idx].classList.add('on');
            secTxt[idx].classList.add('sec1TxtAnima');
            secA[idx].classList.add('sec1aAnima');
        } else {
            el.classList.remove('fadeIn');
            itemsUlLi[idx].classList.remove('on');
            secTxt[idx].classList.remove('sec1TxtAnima');
            secA[idx].classList.remove('sec1aAnima');
        }
    });
    if (i >= galleryUlLi.length - 1) i = -1;

};
let setIn = setInterval(autoGallery_fade, 5000);

const overOut = secCon.querySelectorAll('.overOut');
overOut.forEach(el => {
    el.addEventListener('mouseover', () => clearInterval(setIn));
    el.addEventListener('mouseout', () => setIn = setInterval(autoGallery_fade, 5000));
});

// 
itemsUlBtn.addEventListener('click', () => {
    itemsUlBtn.classList.toggle('clicked')
    let hasContains = itemsUlBtn.classList.contains('clicked');
    if (hasContains) {
        clearInterval(setIn)
    } else {
        setIn = setInterval(autoGallery_fade, 5000)
    };
});

itemsUl.addEventListener('click', () => {
    let _target = event.target;

    itemsUlLi.forEach((el, idx) => {
        if (el == _target) {
            el.classList.add('on');
            i = idx;
            galleryUlLi.forEach((el, idx) => {
                if (idx == i) {
                    el.classList.add('fadeIn');
                    secTxt[idx].classList.add('sec1TxtAnima');
                    secA[idx].classList.add('sec1aAnima');
                } else {
                    el.classList.remove('fadeIn');
                    secTxt[idx].classList.remove('sec1TxtAnima');
                    secA[idx].classList.add('sec1aAnima');
                }
            });
        } else {
            el.classList.remove('on');
        }
    });
});
centerBtn.addEventListener('click', () => {
    const _this = event.target;
    spanArrow.forEach((el, idx) => {
        if (el == _this) {
            if (el.classList.contains('arrowLeft')) {
                if (i <= 0) i = galleryUlLi.length;
                i--;
                galleryUlLi.forEach((el, idx) => {
                    if (idx == i) {
                        el.classList.add('fadeIn');
                        itemsUlLi[idx].classList.add('on');
                        secTxt[idx].classList.add('sec1TxtAnima');
                        secA[idx].classList.add('sec1aAnima');
                    } else {
                        el.classList.remove('fadeIn');
                        itemsUlLi[idx].classList.remove('on');
                        secTxt[idx].classList.remove('sec1TxtAnima');
                        secA[idx].classList.add('sec1aAnima');
                    }
                });
            } else {
                if (i >= galleryUlLi.length - 1) i = -1;
                i++;
                galleryUlLi.forEach((el, idx) => {
                    if (idx == i) {
                        el.classList.add('fadeIn');
                        itemsUlLi[idx].classList.add('on');
                        secTxt[idx].classList.add('sec1TxtAnima');
                        secA[idx].classList.add('sec1aAnima');
                    } else {
                        el.classList.remove('fadeIn');
                        itemsUlLi[idx].classList.remove('on');
                        secTxt[idx].classList.remove('sec1TxtAnima');
                        secA[idx].classList.add('sec1aAnima');
                    }
                });
            }
        };
    });
});

(() => autoGallery_fade())();

//sec2
const sec2Con = document.querySelector('.sec2-con');
const sec2Title = sec2Con.querySelector('.sec2-title');
const sec2hOne = sec2Title.querySelector('h1');
const sec2TitBox = sec2Title.querySelector('.title-box');
const sec2TitBoxA = sec2Title.querySelector('.title-box>a');
const sec2detail = sec2Title.querySelector('.sec2-detail');
const sec2Main = sec2Con.querySelector('.sec2-main');
const sec2Left = sec2Main.querySelector('.sec2-left');
const sec2Right = sec2Main.querySelector('.sec2-right');


window.addEventListener('scroll', () => {
    const sec2Conc = document.querySelector('.sec2-con')
    const sec2Top = sec2Conc.offsetTop;
    const scrolled = window.scrollY;
    if (scrolled >= sec2Top / 6) {
        sec2hOne.style.top = '0';
        sec2hOne.style.opacity = '1';
    };
    if (scrolled >= sec2Top / 2.8) {
        sec2TitBoxA.style.left = "0"
        sec2TitBoxA.style.opacity = "1"
        sec2detail.style.right = "0"
        sec2detail.style.opacity = "1"
    };
    if (scrolled >= sec2Top / 1.9) {
        sec2Left.style.transform = "translateY(0)"
        sec2Left.style.opacity = "1"
        sec2Right.style.transform = "translateY(0)"
        sec2Right.style.opacity = "1"
    };
});
//sec3
const sec3Con = document.querySelector('.sec3-con');
const sec3Title = sec3Con.querySelector('.sec3-title');
const banner = sec3Con.querySelector('.banner');
const bannerWidth = banner.offsetWidth;
const bannerUl = banner.querySelector('ul');
const bannerUlLi = bannerUl.querySelectorAll('li');
const bannerUlLiWidth = bannerUlLi[0].offsetWidth;

const bSpanArrow = sec3Con.querySelectorAll('span.arrow');

const sec3bCon = sec3Con.querySelector('.sec3bCon');
const sec3Items = sec3bCon.querySelector('.sec3Items');
const sec3ItemsUl = sec3Items.querySelector('ul');
const sec3ItemsUlLi = sec3ItemsUl.querySelectorAll('li');
const sec3Btn = sec3ItemsUl.querySelector('button');

const topImg = sec3Con.querySelectorAll('span.topImg>img');

let currentIdx = 0;
makeClone();

function makeClone() {
    for (let k = 0; k < bannerUlLi.length; k++) {
        let cloneSlide = bannerUlLi[k].cloneNode(true);
        cloneSlide.classList.add('clone');
        bannerUl.appendChild(cloneSlide);
    }
    for (let k = bannerUlLi.length - 1; k >= 0; k--) {
        let cloneSlide = bannerUlLi[k].cloneNode(true);
        cloneSlide.classList.add('clone');
        bannerUl.prepend(cloneSlide);
    }
    updateWidth();
    setInitionalBanner();
    setTimeout(function () {
        banner.classList.add('animated');
        topImg[0].style.width = '105%'
    }, 100);
};


function updateWidth() {
    banner.style.width = "900%"
    if (matchMedia("screen and (max-width: 1024px)").matches) {
        banner.style.width = "2700%"
    }
};

const bannerUlLiAll = sec3Con.querySelectorAll('.banner>ul>li');


function setInitionalBanner() {
    // const bannerone = bannerUlLi[0].offsetWidth;
    // const bannerZero = bannerUlLi[1].offsetWidth;
    // banner.style.transform = 'translateX(' + ((-bannerZero / 100) * 3.1778 * 8) + 'px' + ')';
    let bannerMove = bannerUlLi[1].offsetLeft - bannerUlLi[0].offsetLeft;
    let bGoto = (-bannerMove * (bannerUlLi.length - 1)) + "px";
    banner.style.transform = 'translateX(' + bGoto + ')';
    if (matchMedia("screen and (max-width: 1024px)").matches) {
        // const bannerone = bannerUlLi[0].offsetWidth;
        // const bannerZero = bannerUlLi[1].offsetWidth;
        // banner.style.transform = 'translateX(' + ((-bannerZero / 100) * 3.1778 * 9.13) + 'px' + ')';
        let bannerMove = bannerUlLi[1].offsetLeft - bannerUlLi[0].offsetLeft;
        let bGoto = (-bannerMove * (bannerUlLi.length)) + "px";
        banner.style.transform = 'translateX(' + bGoto + ')';

    }
};

bSpanArrow[0].addEventListener('click', () => moveSlide(currentIdx - 1));
bSpanArrow[1].addEventListener('click', () => moveSlide(currentIdx + 1));


function moveSlide(num) {
    banner.style.left = -num * (bannerUlLi[1].offsetLeft - bannerUlLi[0].offsetLeft) + 'px';
    currentIdx = num;
    if (currentIdx == bannerUlLi.length) {
        setTimeout(() => {
            banner.classList.remove('animated')
            banner.style.left = '0px';
            currentIdx = 0;
        }, 400);
        setTimeout(() => {
            banner.classList.add('animated')
        }, 500)
    };
    if (currentIdx == -1) {
        setTimeout(() => {
            banner.classList.remove('animated')
            banner.style.left = -(bannerUlLi[8].offsetLeft - bannerUlLi[0].offsetLeft) + "px";
            currentIdx = 8;
        }, 400);
        setTimeout(() => {
            banner.classList.add('animated')
        }, 500)
    };
    mainbannerFunc(currentIdx);
    addClassFunc(currentIdx);
};
let timer = undefined;

function autoBanner() {
    if (timer == undefined) {
        timer = setInterval(() => {
            moveSlide(currentIdx + 1);
        }, 5000);
    };
};

const bannerOverOut = sec3Con.querySelectorAll('.overOut');
bannerOverOut.forEach(el => {
    el.addEventListener('mouseover', () => clearInterval(timer));
    el.addEventListener('mouseout', () => timer = setInterval(() => moveSlide(currentIdx + 1), 5000))
});
sec3ItemsUl.addEventListener('click', () => {
    let _this = event.target;
    sec3ItemsUlLi.forEach((el3, idx) => {
        if (el3 == _this) {
            el3.classList.add('on')
            moveSlide(idx)
        } else {
            el3.classList.remove('on');
        }
    });
});
const addClassFunc = key => {
    sec3ItemsUlLi.forEach((el2, idx2) => {
        if (idx2 == key) {
            el2.classList.add('on');
        } else {
            el2.classList.remove('on');
        }
        if (key == -1) {
            sec3ItemsUlLi[8].classList.add('on');
        }
        if (key == 9) {
            sec3ItemsUlLi[0].classList.add('on');
        }
    });
}
const mainbannerFunc = key => {
    topImg.forEach((el2, idx2) => {
        if (idx2 == key) {
            el2.style.width = "110%"
        } else {
            el2.style.width = "80%"
        }
        if (key == -1) {
            topImg[8].style.width = '110%'
        }
        if (key == 9) {
            topImg[0].style.width = '110%'
        }
    });
};

(() => autoBanner())();

sec3Btn.addEventListener('click', () => {
    sec3Btn.classList.toggle('clicked')
    let hasContains = sec3Btn.classList.contains('clicked');
    if (hasContains) {
        clearInterval(timer)
    } else {
        timer = setInterval(() => moveSlide(currentIdx), 5000)
    };
});

window.addEventListener('scroll', () => {
    const sec3Conc = document.querySelector('.sec3-con');
    const sec3Top = sec3Conc.offsetTop;
    const scrolled = window.scrollY;
    if (scrolled >= sec3Top / 1.7) {
        sec3Title.style.top = '0'
        sec3Title.style.opacity = '1'
        sec3Title.style.transition = 'all .7s'
        sec3Con.style.transform = 'translateY(0)'
        sec3Con.style.opacity = '1'
        sec3Con.style.transition = 'all .8s'
    }
});


//sec4
const sec4Con = document.querySelector('.sec4-con');
const sec4Title = sec4Con.querySelector('.sec4-title');
const sec4Ev = sec4Con.querySelector('.ev6ConBox');
const sec4EvH = sec4Ev.querySelector('h2');
const sec4EvP = sec4Ev.querySelector('p');
const sec4EvA = sec4Ev.querySelector('a');
const sec4Sportage = sec4Con.querySelector('.sportageConBox');
const sec4SportageH2 = sec4Sportage.querySelector('h2');
const sec4SportageH1 = sec4Sportage.querySelector('h1');
const sec4SportageP = sec4Sportage.querySelector('p');
const sec4SportageA = sec4Sportage.querySelector('a');
const sec4SportageImg = sec4Sportage.querySelector('.con-img');
const sec4K8 = sec4Con.querySelector('.k8ConBox');
const sec4K8Con = sec4K8.querySelector('.con-box');
const sec4K8A = sec4K8.querySelector('a');


window.addEventListener('scroll', () => {
    const sec4Conc = document.querySelector('.sec4-con');
    const sec4Top = sec4Conc.offsetTop;
    const scrolled = window.scrollY;
    if (scrolled >= sec4Top / 1.36) {
        sec4Title.style.transform = 'translateY(0)';
        sec4Title.style.opacity = '1';
        sec4Title.style.transition = 'all .5s';
    };
    if (scrolled >= sec4Top / 1.16) {
        sec4EvH.style.top = '0';
        sec4EvH.style.opacity = '1';
        sec4EvH.style.transition = 'all .8s';
        sec4EvP.style.top = '10%';
        sec4EvP.style.opacity = '1';
        sec4EvP.style.transition = 'all 2s';
    };
    if (scrolled >= sec4Top / 1.1) {
        sec4EvA.style.bottom = '0';
        sec4EvA.style.opacity = '1';
        sec4EvA.style.transition = 'all 1.8s';
    };
    if (scrolled >= sec4Top * 1.02) {
        sec4SportageH2.style.left = '30%';
        sec4SportageH2.style.opacity = '1';
        sec4SportageH2.style.transition = 'all 0.8s';
        sec4SportageH2.style.transform = 'translateX(-50%)';
        sec4SportageH1.style.left = '30%';
        sec4SportageH1.style.opacity = '1';
        sec4SportageH1.style.transition = 'all 1.8s';
        sec4SportageH1.style.transform = 'translateX(-50%)';
        sec4SportageP.style.left = '30%';
        sec4SportageP.style.opacity = '1';
        sec4SportageP.style.transition = 'all 2.3s';
        sec4SportageP.style.transform = 'translateX(-50%)';
        sec4SportageA.style.left = '30%'
        sec4SportageA.style.opacity = '1'
        sec4SportageA.style.transition = 'all 1.8s'
        sec4SportageA.style.transform = 'translateX(-50%)'
        sec4SportageImg.style.right = '3%';
        sec4SportageImg.style.opacity = '1';
        sec4SportageImg.style.transition = 'all 2.3s';
        if (matchMedia("screen and (max-width: 1024px)").matches) {
            sec4SportageH2.style.left = '50%';
            sec4SportageH2.style.opacity = '1';
            sec4SportageH2.style.transition = 'all 0.8s';
            sec4SportageH2.style.transform = 'translateX(-50%)';
            sec4SportageH1.style.left = '50%';
            sec4SportageH1.style.opacity = '1';
            sec4SportageH1.style.transition = 'all 1.8s';
            sec4SportageH1.style.transform = 'translateX(-50%)';
            sec4SportageP.style.left = '50%';
            sec4SportageP.style.opacity = '1';
            sec4SportageP.style.transition = 'all 2.3s';
            sec4SportageP.style.transform = 'translateX(-50%)';
            sec4SportageImg.style.right = '3%';
            sec4SportageImg.style.opacity = '1';
            sec4SportageImg.style.transition = 'all 2.3s';
            sec4SportageA.style.left = '50%'
            sec4SportageA.style.opacity = '1'
            sec4SportageA.style.transition = 'all 1.8s'
            sec4SportageA.style.transform = 'translateX(-50%)'
            sec4SportageImg.style.right = '10%';
            sec4SportageImg.style.opacity = '1';
            sec4SportageImg.style.transition = 'all 2.3s';
            // sec4SportageImg.style.transform = 'translateX(50%)'

        }
    };

    if (scrolled >= sec4Top * 1.325) {
        sec4K8Con.style.right = "16%";
        sec4K8Con.style.opacity = "1";
        sec4K8Con.style.transition = "all 1.5s";
        sec4K8A.style.right = "0";
        sec4K8A.style.opacity = "1";
        sec4K8A.style.transition = "all 2.7s";
    };
});

//sec5
const sec5Con = document.querySelector('.sec5-con');
const sec5ConLeft = document.querySelector('.sec5Left');
const pointLine = document.querySelector('.pointLine');
const sec5Conright = document.querySelector('.sec5Right');
const sec5Gallery = sec5Conright.querySelector('.sec5gallery');
const sec5GalleryUl = sec5Gallery.querySelector('ul');
const sec5GalleryUlLi = sec5GalleryUl.querySelectorAll('li');
const sec5Timer = sec5Conright.querySelector('.timer');
const sec5Since = sec5Timer.querySelector('ul.sinceYear');
const sec5SinceLi = sec5Since.querySelectorAll('li');
const sec5To = sec5Timer.querySelector('ul.toYear');
const sec5ToLi = sec5To.querySelectorAll('li');

const pointLineFuncTop = window.pageYOffset + pointLine.getBoundingClientRect().top;
const pointLineFuncBot = window.pageYOffset + pointLine.getBoundingClientRect().bottom;
const sec5ConBot = window.pageYOffset + sec5Con.getBoundingClientRect().bottom;

let t = 0;

function pointLineFunc() {
    t++;
    pointLine.style.transform = "-" + t + "%";
    pointLine.style.transition = "all 1s";
};
let pointSetIn = setInterval(pointLineFunc, 5000);

pointLineFunc();

let h = -1;

function autoGallery() {
    if (h >= sec5GalleryUlLi.length - 1) h = -1;
    h++;
    let gab = sec5GalleryUlLi[1].offsetTop - sec5GalleryUlLi[0].offsetTop;
    let goto = (-gab * h) + 'px';
    sec5Gallery.style.top = goto;
    sec5Gallery.style.transition = 'all 3s';
    sec5AnimeFUnc(h);
    timerFunc(h);
    if (h >= sec5GalleryUlLi.length - 1) h = -1;
};
let sec5SetIn = setInterval(autoGallery, 4000);
const sec5AnimeFUnc = key => {
    sec5GalleryUlLi.forEach((el5, idx5) => {
        if (idx5 == key) {
            el5.classList.add('sec5Anime');
            el5.style.transition = 'all 1s';
        } else {
            el5.classList.remove('sec5Anime');
        }
    })
};
const timerFunc = key => {
    sec5GalleryUlLi.forEach((el) => {
        sec5Since.style.transition = "all 1s"
        sec5To.style.transition = "all 1s"
        if (key == 0) {
            sec5Since.style.top = "-" + sec5SinceLi[0].offsetTop + "px";
            sec5To.style.top = "-" + sec5ToLi[20].offsetTop + "px";
        }
        if (key == 1) {
            sec5Since.style.top = "-" + sec5SinceLi[20].offsetTop + "px";
            sec5To.style.top = "-" + sec5ToLi[42].offsetTop + "px";
        }
        if (key == 2) {
            sec5Since.style.top = "-" + sec5SinceLi[42].offsetTop + "px";
            sec5To.style.top = "-" + sec5ToLi[50].offsetTop + "px";
        }
        if (key == 3) {
            sec5Since.style.top = "-" + sec5SinceLi[50].offsetTop + "px";
            sec5To.style.top = "-" + sec5ToLi[77].offsetTop + "px";
        }
        if (key == 4) {
            sec5Since.style.top = "-" + sec5SinceLi[77].offsetTop + "px";
            sec5To.style.top = "-" + sec5ToLi[78].offsetTop + "px";
        }
    })
};

(() => autoGallery())();

//sec6

const sec6Con = document.querySelector('.sec6-con');
const sec6Tit = sec6Con.querySelector('.sec6-title');
const sec6UlLi = sec6Con.querySelectorAll('ul>li');

sec6Con.offsetTop

window.addEventListener('scroll', () => {
    const sec6Conc = document.querySelector('.sec6-con');
    const sec6Top = sec6Conc.offsetTop;
    const scrolled = window.scrollY;
    if (scrolled >= sec6Top / 1.18) {
        sec6Tit.style.transform = "translateY(0)";
        sec6Tit.style.opacity = "1";
        sec6Tit.style.transition = "all .8s";
        sec6UlLi[0].style.transform = "translateY(0)";
        sec6UlLi[0].style.opacity = "1";
        sec6UlLi[0].style.transition = "all 1s";
        sec6UlLi[1].style.transform = "translateY(0)";
        sec6UlLi[1].style.opacity = "1";
        sec6UlLi[1].style.transition = "all 1.5s";
        sec6UlLi[2].style.transform = "translateY(0)";
        sec6UlLi[2].style.opacity = "1";
        sec6UlLi[2].style.transition = "all 2s";
        sec6UlLi[3].style.transform = "translateY(0)";
        sec6UlLi[3].style.opacity = "1";
        sec6UlLi[3].style.transition = "all 2.5s";
        // sec6UlLi.forEach((el6,idx6)=>{
        //     el6.style.transform='translateY(0)';
        //     el6.style.opacity='1';
        // })

    }

});