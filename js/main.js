$(function () {
  $("#modal").hide();

  $(".popup p").click(function () {
    $("#modal").show();
  });

  $(".popup a span").click(function () {
    $("#popwrap").hide();
    $("nav").css({ top: 0 });
  });

  $(".modal_content span").click(function () {
    $("#modal").css("display", "none");
  });

  $(window).scroll(function () {
    let scr = $(this).scrollTop();
    console.log(scr);
    if (scr < 300) {
      $(".shop").css({ backgroundColor: "#fff" });
    } else if (scr >= 300) {
      $(".shop").css({ backgroundColor: "#bae0e3" });
    }
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1, // item이 한 개만 나오도록 하는 것
    autoplay: true, // 가만히 있어도 실행되도록 함
    autoplayTimeout: 3000, // 시간은 1.5초 간격으로
    autoplayHoverPause: true, // 마우스 hover 했을 때 멈추게 하는 기능
  });
});
