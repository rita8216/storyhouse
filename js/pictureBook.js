// document.querySelector('.animal').addEventListener('animationend',function(){
//     this.classList.removeClass('move');
// }
// document.querySelector('.animal').classList.addClass('move');



// //獲取dom節點
// var animal = document.querySelector('.animal');
// //頁面載入時，給它執行一次
// animal.classList.add('move');
// //監聽動畫是否結束
// animal.addEventListener('animationend',function(){
//  //動畫結束，移除動畫的樣式類
//  animal.classList.remove('move');
//  //延時1秒，再將動畫加入
//  setTimeout(function(){
//     animal.classList.add('move');
//  },2000)
// })


// var wheel=0;
// function MouseWheel (e) {
//   e = e || window.event;
//   if(e.wheelDelta <= 0 || e.detail > 0){
//     click+=1;


//     // $(".tree2,.otter,.earthworm").addClass("move");
//     //         $('.page2').addClass('show');
//   }else{

// // click-=1;

//   }
//   alert(['scrolled ', (( e.wheelDelta <= 0 || e.detail > 0) ? 'down' : 'up')].join(''));
// }
// // hook event listener on window object
// if ('onmousewheel' in window) {
//   window.onmousewheel = MouseWheel;
// } else if ('onmousewheel' in document) {
//   document.onmousewheel = MouseWheel;
// } else if ('addEventListener' in window) {
//   window.addEventListener("mousewheel", MouseWheel, false);
//   window.addEventListener("DOMMouseScroll", MouseWheel, false);
// }


// function page1Ani(){

//     if(($(".page1").offset().top) == 0)
//     {
//         $(".animal,.tree1,.badGuy").addClass("move");
//         $('.page1').addClass('show');
//     }
//     else if(($(".page2").offset().top) == 0){

//         $(".tree2,.otter,.earthworm").addClass("move");
//         $('.page2').addClass('show');

//     }
//     else
//     {
//         $(".animal,.tree1,.badGuy").removeClass("move");
//         $('.page1').removeClass('show');

//         $(".tree2,.otter,.earthworm").removeClass("move");
//                 $('.page2').removeClass('show');

//     }
//     setTimeout(page1Ani,3000);
//  };
// setTimeout(page1Ani,300);


// page1Ani();


// $(window).scroll(function(){
//     window.onmousemove(function(){
//     if(($(".page2").offset().top) == 0)
//     {
//         $(".tree2,.otter,.earthworm").addClass("move");
//         $('.page2').addClass('show');
//     }
//     else
//     {
//         $(".tree2,.otter,.earthworm").removeClass("move");
//         $('.page2').removeClass('show');

//     }
//   });
// function page2Ani(){


//  };
// setTimeout(page2Ani,300);




// $(window).scroll(function(){

//   if (($(".page2").offset().top) == 0) {
//     $(".tree2,.otter,.earthworm").addClass("move");
//     $('.page2').addClass('show');
// }
// else {
//     $(".tree2,.otter,.earthworm").removeClass("move");
//     $('.page2').removeClass('show');

// }
// });

$(document).on('click','a',function(event){

  storyWheel2();
});


var mousewheel = (/Firefox/i.test(navigator.userAgent)) ?
"DOMMouseScroll" : "mousewheel";

window.addEventListener(mousewheel,
        function (e) {
            if (e.wheelDelta > 0 || e.detail < 0) {
                //滑輪往前
              storyWheel2();

            } else {
                //滑輪往後

              storyWheel2();
            }
        }, false);

// function storyWheel(){
//     if(click == 1){
//         // p1
//         $(".animal,.tree1,.badGuy,.p1-p").addClass("move");
//         $('.page1').addClass('show');
//         // p2
//         $(".tree2,.otter,.earthworm,.p2-p").removeClass("move");
//         $('.page2').removeClass('show');

//     }else if(click == 2){
//         // p2
//         $(".tree2,.otter,.earthworm,.p2-p").addClass("move");
//         $('.page2').addClass('show');
//         // p1
//         $(".animal,.tree1,.badGuy,.p1-p").removeClass("move");
//         $('.page1').removeClass('show');
//     }

// }



function storyWheel2(){

  if($('body').hasClass('viewing-page-1')){

   // p1
   $(".animal,.tree1,.badGuy,.p1-p,.p1").addClass("move");
   $('.story1').addClass('show');
   // p2
   $(".tree2,.otter,.earthworm,.p2-p,.streetlight,.p2").removeClass("move");
   $('.story2').removeClass('show');

}else if($('body').hasClass('viewing-page-2')){

          // p2
          $(".tree2,.otter,.earthworm,.p2-p,.streetlight,.p2").addClass("move");
          $('.story2').addClass('show');
          // p1
          $(".animal,.tree1,.badGuy,.p1-p,.p1").removeClass("move");
          $('.story1').removeClass('show');
}
}



// window.onmousewheel = function () {
//   if (($(".page2").offset().top) == 0) {
//       $(".tree2,.otter,.earthworm").addClass("move");
//       $('.page2').addClass('show');
//   }
//   else {
//       $(".tree2,.otter,.earthworm").removeClass("move");
//       $('.page2').removeClass('show');

//   }
// };


// target.addEventListener('mousewheel', function () {

// }, { passive: false });




//開頭動畫
setTimeout(hidePage, 500);
  function hidePage() {
      $('.main').hide();
  }
setTimeout(hideAnimation, 6000);
    function hideAnimation() {
      $('.showArea').fadeOut(2000);
      $('.main').show();
    }
