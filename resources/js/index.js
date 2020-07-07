$(document).ready(function() {
  $("#menubtn").click(function() {
    if ($("header nav div").is(".open")) {
      $("#menubtn span").text("Menu")
    } else {
      $("#menubtn span").text("Close")
    }
    $("header nav div").toggleClass("open")
  })
  $("header nav div a").click(function() {
    $("#menubtn span").text("Menu")
    $("header nav div").removeClass("open")
  })
})
