'use strict';
const models = document.querySelector('.footer-models');
const modelBox = models.querySelectorAll('.model-box');
const modelBoxTitle = models.querySelectorAll('.model-box-title');
const modelBoxul = models.querySelectorAll('ul');


models.addEventListener('click', () => {
    let _this = event.target;
    console.log(_this);
    modelBoxTitle.forEach((el, idx) => {
        if (el == _this) {
            modelBoxul[idx].classList.toggle('fotterMenuToggle');
            modelBox[idx].style.margin = "0 0 " + modelBoxul[idx].offsetHeight + 'px' + " 0";
            modelBox[idx].style.padding = "0 0 1rem 0";
        } else{
            modelBoxul[idx].classList.remove('fotterMenuToggle');
            modelBox[idx].style.margin = "0 0 1rem 0";
            modelBox[idx].style.padding = "0 0 0 0";
        }
    })
});


const fCon1Right = document.querySelector('.fCon1Right');
const fCon1RightUlLi = fCon1Right.querySelectorAll('ul>li>a');
const fCon1RightUlLiAfter = fCon1RightUlLi[1].querySelector('::after');
const fCon1FamilyBox = document.querySelector('.familySub');


fCon1RightUlLi[1].addEventListener('click', () => {
    fCon1RightUlLi[1].classList.toggle('familyTogle');
    fCon1RightUlLi[1].removeAttribute('href');
    fCon1FamilyBox.classList.toggle('scrollBoxOnOff');
});