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