(function ($) {
    "use strict";

    /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

     // Navbar Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            $(".navbar").addClass("bg-primari");
        } else {
            $(".navbar").removeClass("bg-primari");
        }
    });


    //Smoth Scroll
    $(function () {
        $('.nav-link, .smoth-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });

    /*==========================
        Hero Area Slider
    ============================*/

    $('.hero-area-slids').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        doots: false,
        autoplay: true,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeIn'

    });
    //Wow Animation
    new WOW().init();
    /*==========================
        Hero Title typer
    ============================*/
    var element = $('.typed');

    $(function () {
        element.typed({
            strings: ["Copy Writer."],
            typeSpeed: 100,
            loop: true,
            autoplay: true,
        });
    });

    /*::::::::::::::::::::::::::::::::::::
       Portfolio Section
    ::::::::::::::::::::::::::::::::::::*/

    lightbox.option({
        'imageFadeDuration': 800,
        'resizeDuration': 500,
        'wrapAround': true
    });

    $('.portfolio-area').mixItUp();


    /*::::::::::::::::::::::::::::::::::::
       Testimonial Section
    ::::::::::::::::::::::::::::::::::::*/

    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });


    /*::::::::::::::::::::::::::::::::::::
       Contact Area 
    ::::::::::::::::::::::::::::::::::::*/
    document.addEventListener("DOMContentLoaded", function() {
        var form = document.getElementById("contact-form");
        var formMessages = document.querySelector(".form-message");
      
        form.addEventListener("submit", function(event) {
          event.preventDefault();
      
          var formData = new FormData(form);
      
          fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
              "Accept": "application/json"
            }
          })
          .then(function(response) {
            if (response.ok) {
              formMessages.classList.remove("error");
              formMessages.classList.add("success");
              formMessages.textContent = "Thank you! Your message has been sent.";
              form.reset();
            } else {
              return response.json().then(function(data) {
                throw new Error(data.error || "Thank you! Your message has been sent.");
              });
            }
          })
          .catch(function(error) {
            formMessages.classList.remove("success");
            formMessages.classList.add("error");
            formMessages.textContent = error.message;
          });
        });
      });
      
    
    
    
    /*::::::::::::::::::::::::::::::::::::
    Preloader
    ::::::::::::::::::::::::::::::::::::*/
    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });

}(jQuery));
