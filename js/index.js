// Your code goes here

const header = document.querySelector('.main-navigation');

header.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'yellow';
    event.stopPropogation();
});

header.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'initial';
});

Array.from(document.images).forEach (function (image) {
    image.addEventListener('mouseover', (event) => {
        event.target.style.boxShadow = '5px 5px 25px pink';
    });
});

Array.from (document.images).forEach (function (image) {
    image.addEventListener ('mouseleave', (event) => {
        event.target.style.boxShadow = 'initial';
    });
});

const busImg = document.querySelector('.intro img');

busImg.addEventListener('click',function(){
  document.body.style.backgroundColor = 'coral';
});

busImg.addEventListener('dbclick', function(){
    document.body.style.backgroundColor = 'initial';
});