// Your code goes here
const header = document.querySelector('.main-navigation');

header.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'yellow';
    //event.stopPropogation();
});

header.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'initial';
    console.log('let see')
    // console showed this
});

//added this section
header.addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    console.log('click somwhere else')
  });
//till here but no response on console
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

busImg.addEventListener('dblclick', function(){
    document.body.style.backgroundColor = 'initial';
});