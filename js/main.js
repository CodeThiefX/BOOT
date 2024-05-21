$(document).ready(function () {
  page = 1;
  $("#page-1").show();
  $("#page-2").hide();
  $("#page-3").hide();
  $("#page-4").hide();
  $("#page-5").hide();

  $("#2-to-1").click(function () {
    page = 1;
    $("#page-1").show();
    $("#page-2").hide();
    $("#page-3").hide();
    $("#page-4").hide();
    $("#page-5").hide();
  });

  $("#1-to-2").click(function () {
    page = 2;
    $("#page-1").hide();
    $("#page-2").show();
    $("#page-3").hide();
    $("#page-4").hide();
    $("#page-5").hide();
  });

  $("#2-to-3").click(function () {
    page = 3;
    $("#page-1").hide();
    $("#page-2").hide();
    $("#page-3").show();
    $("#page-4").hide();
    $("#page-5").hide();
  });

  $("#3-to-2").click(function () {
    page = 2;
    $("#page-1").hide();
    $("#page-2").show();
    $("#page-3").hide();
    $("#page-4").hide();
    $("#page-5").hide();
  });

  $("#3-to-4").click(function () {
    page = 4;
    $("#page-1").hide();
    $("#page-2").hide();
    $("#page-3").hide();
    $("#page-4").show();
    $("#page-5").hide();
  });

  $("#4-to-3").click(function () {
    page = 3;
    $("#page-1").hide();
    $("#page-2").hide();
    $("#page-3").show();
    $("#page-4").hide();
    $("#page-5").hide();
  });

  $("#4-to-5").click(function () {
    page = 5;
    $("#page-1").hide();
    $("#page-2").hide();
    $("#page-3").hide();
    $("#page-4").hide();
    $("#page-5").show();
  });

  $("#5-to-4").click(function () {
    page = 4;
    $("#page-1").hide();
    $("#page-2").hide();
    $("#page-3").hide();
    $("#page-4").show();
    $("#page-5").hide();
  });
});
