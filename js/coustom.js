$(document).ready(function () {
  $(".serch_btn").click(function () {
    $(".search_field ").slideToggle("300");
  });
});
// ================Scroll=============
$("#patnar").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#mypatner").offset().top,
    },
    "slow"
  );
});
// ====================Accordion================
$(function () {
  $(".accordion-content:not(:first-of-type)").css("display", "none");
  $(".js-accordion-title:first-of-type").addClass("open");

  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });
});

$(document).ready(function () {
  $(".dropdown_toggle").click(function () {
    $(".dropdown ").slideToggle("300");
  });
});

// ==================Drop down=============

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $(".nav_black ").css("background", "#021D3A");
    } else {
      $(".nav_black ").css("background", "");
    }
  });
});

// ==========Nav scroll===============
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// =================Swiper-js==========
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
// ==============Testimonila===============
var swiper = new Swiper(".testSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ==============Search-toggle============
