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
    if (scr > 0) {
      $("body").css({ backgroundColor: "rgb(229, 236, 197)" });
      $(".gnb").css({ backgroundColor: "rgb(229, 236, 197)" });
    }
  });
});
