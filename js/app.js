var navig = $("nav");

$(window).scroll(function() {

  if ($(this).scrollTop()> 220) {
    navig.addClass("nav-scrolled");
  }
  else {
    navig.removeClass("nav-scrolled");
  }
});

//:how mdd leads to ad through the dysfunction of the dmn

jQuery(function ($) {
    $(".more").hide();
    $('.show').click(function () {
        $(this).closest('.less').addClass('active');
        $(this).closest(".less").prev().stop(true).slideDown("1000");
    });
    $('.hide').click(function () {
        $(this).closest('.less').removeClass('active');
        $(this).closest(".less").prev().stop(true).slideUp("1000");
    });
});