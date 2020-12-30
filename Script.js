let search = document.querySelector(".search");
let bar = document.querySelector(".bar");


search.addEventListener("click", () => {
    bar.classList.add('visible')
});

// html
/* <div class="item"></div> */

//css
// .item {
//     position   : relative;
//     width      : 200px;
//     height     : 200px;
//     background : gold;
//     color      : #000;
// }

// js
// var my_timer;
// $(".item").hover(
//     function () {
//         var $this = $(this);
//         $this.text('Mouse-Over');
//         clearTimeout(my_timer);
//         $this.stop().fadeTo(250, 1);
//     }, 
//     function () {
//         var $this = $(this);
//         $this.text('Mouse-Out');
//         my_timer = setTimeout(function () {
//             $this.fadeTo(250, 0);
//         }, 500);
//     }                       
// );
 