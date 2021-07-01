const navbar = document.getElementById('navbar');
   let scrolled = false;

   window.onscroll = function () {
      if (window.pageYOffset > 500) {
         navbar.classList.remove('top')
         if (!scrolled) {
            navbar.style.transform = "translateY(-70px)";
         }
         setTimeout(function () {
            navbar.style.transform = "translateY(0)";
            scrolled = true;
         }, 250);
      } else {
         navbar.classList.add('top');
         scrolled = false;
      }
   }

   // Smooth Scrolling
   $('#navbar a').on('click', function (e) {
      if (this.hash !== '') {
         e.preventDefault();

         const hash = this.hash;

         $('html, body').animate(
            {
               scrollTop: $(hash).offset().top - 50,
            },
            900
         );
      }
   });

// Tawk.to Chat box Script
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/60dd436c65b7290ac638d1d9/1f9g4uo63';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();