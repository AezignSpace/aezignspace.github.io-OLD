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

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault()
    var target = $(this.hash).get(0)
    var pos = target.getBoundingClientRect().top
    var menuheight = $("header").height()
    var goto = pos - menuheight
    console.log(target, pos, menuheight, goto)
    window.scrollBy({
      top: goto,
      left: 0,
      behavior: 'smooth'
    })
  })
})
