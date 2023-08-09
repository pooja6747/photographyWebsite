 //When the user scrolls down 20px from the top of the document, slide down the navbar
 window.onscroll = function () { scrollFunction() };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("mainNav").classList.remove('bg-t');

         document.getElementById("mainNav").classList.add('bg-b');
     } else {
         document.getElementById("mainNav").classList.remove('bg-b');

         document.getElementById("mainNav").classList.add('bg-t');
     }
 }