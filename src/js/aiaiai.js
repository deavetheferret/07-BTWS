$(function () {
  var cursor;
  // $("#cmd").click(function () {
  $("input").focus();
  cursor = window.setInterval(function () {
    if ($("#cursor").css("visibility") === "visible") {
      $("#cursor").css({
        visibility: "hidden",
      });
    } else {
      $("#cursor").css({
        visibility: "visible",
      });
    }
  }, 500);

  $("input").focus();

  $("input").keyup(function () {
    $("#cmd span").text($(this).val());
  });

  $("input").blur(function () {
    clearInterval(cursor);
    $("#cursor").css({
      visibility: "visible",
    });
  });

  $("input").keydown(function (e) {
    if (e.keyCode == 13) {
      clearInterval(cursor);

      $("#cursor").css({
        visibility: "visible",
      });

      $("#response").text("> Ouch too early!");

      setTimeout(function () {
        $("#response").text("");
      }, 3000);
    }
  });
});
