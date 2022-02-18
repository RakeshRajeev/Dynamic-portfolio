$(document).ready(function(){
$('.slider').slick({
 arrows:false,
 dots:true,
 appendDots:'.slider-dots',
 dotsClass:'dots',
 autoplay: true,
 autoplaySpeed: 1000,
 infinite: false,
 speed: 100,
 fade: false,
 slide: 'div',
 cssEase: 'linear',
 onAfterChange: function(){
     //check the length of total items in .slide container
     //if that number is the same with the number of the last slide
     //Then pause the slider
     if( item_length == slider.slickCurrentSlide() ){
         //this should do the same thing -> slider.slickPause();
         slider.slickSetOption("autoplay",false,false)
     };
 }
});

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let tree=document.querySelector('.tree')


hamberger.addEventListener('click',function(){
  mobileNav.classList.add('open');
})

times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
})

tree.addEventListener('click',function(){
    mobileNav.classList.remove('open');
})


});

