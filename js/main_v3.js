

$(document).ready(function () {

//initial header change background when opened

$(".navbar").on("show.bs.collapse", function(e) {
  console.log("open")
  $(".navbar-dark").css("background-color", "rgb(0, 181, 32)");
});

$(".navbar").on("hide.bs.collapse", function(e) {
  console.log("close")
  $(".navbar-dark").css("background-color", "transparent");
});



// Header scroll class
  $(window).scroll(function () {
    var logoHomeinitialSrc = "img/rootkit-logo.jpeg";
    var logoHomescrollSrc = "img/rootkit-logo.jpeg";

    if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('header-scrolled');
      $('.logo').addClass('header-scrolled');
      $(".homepage .logo").attr("src", logoHomescrollSrc);
      $(".logos .logo").attr("src", logoHomescrollSrc);
      $('.navbar-toggler-icon').addClass('header-scrolled');
    } else {
      $('.navbar').removeClass('header-scrolled');
      $('.logo').removeClass('header-scrolled');
      $(".homepage .logo").attr("src", logoHomeinitialSrc);
      $(".logos .logo").attr("src", logoHomeinitialSrc);
      $('.navbar-toggler-icon').removeClass('header-scrolled');
    }
  });
  
  //stop video when modal close
  $("#videomodal").on('hidden.bs.modal', function (e) {
	$("#videomodal iframe").attr("src", $("#videomodal iframe").attr("src"));
});

$("#nethereum-1").on('hidden.bs.modal', function (e) {
	$("#nethereum-1 iframe").attr("src", $("#nethereum-1 iframe").attr("src"));
});

$("#nethereum-2").on('hidden.bs.modal', function (e) {
	$("#nethereum-2 iframe").attr("src", $("#nethereum-2 iframe").attr("src"));
});

$("#nethereum-3").on('hidden.bs.modal', function (e) {
	$("#nethereum-3 iframe").attr("src", $("#nethereum-3 iframe").attr("src"));
});

$("#nethereum-4").on('hidden.bs.modal', function (e) {
	$("#nethereum-4 iframe").attr("src", $("#nethereum-4 iframe").attr("src"));
});


  
});







$('a[href^="#"]').on('click', function(event) {


    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-100
        }, 1000);
    }

});






