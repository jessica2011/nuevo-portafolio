var begin = function(){
  //Menuburguer
  var menuBurguer = function(){
    var menuAll = require('./libs/menu.js');
    var menuGeneral = new menuAll;
    
    // Menú Mobile
    var btnBurguerV= document.getElementsByClassName("hamburger-menu")[0];
    var idLienzo = document.getElementById("jmr_container");
    menuGeneral.menuVertical(btnBurguerV, idLienzo);
    
    var w = window.innerWidth;
    if (w <= 768) {
      $('.optionsMenu ul li').click(function(){
        btnBurguerV.click(); 
      })
    }
    
  }

  var carousel = function(){
    $("#owl-banner").owlCarousel({
      autoWidth: false,
      center: false,
      responsiveClass: true,
      margin: 0,
      mouseDrag: false,
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      // autoplay: true,
    });
    $("#owl-comentarios").owlCarousel({
      autoWidth: false,
      center: false,
      responsiveClass: true,
      margin: 0,
      mouseDrag: false,
      loop: true,
      nav: true,
      dots: false,
      items: 1,
      // autoplay: true,
    });
    var w = window.innerWidth;
    if (w <= 992) {
      $(".inserteCarousel").addClass("owl-caption owl-carousel owl-theme");
      $(".owl-caption").owlCarousel({
        autoWidth: true,
        center: true,
        responsiveClass: true,
        margin: 0,
        mouseDrag: false,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        // autoplay: true,
      });
    }else{
      $(".inserteCarousel").removeClass("owl-caption owl-carousel owl-theme");
    }
  }

  var contador = function(){
    $('.num').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 1000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }

  var viewMore = function(){
    $( ".verMas" ).on("click",function() {
      $( this ).toggleClass( "show" );
      if( $(this).text()==="Ver más"){
        $(this).text("Ver menos");
      }else if ($(this).text()==="Ver menos"){
        $(this).text("Ver más");
      }
    })
  }

  var accordionText = function(){
    var a = $("#accordion .wrapper .heading h5");
    a.on("click",function() {
      if($(this).attr("aria-expanded")==='false'){
        a.children(".icon").removeClass('active');
        $(this).children(".icon").addClass('active');
      }else {
        $(this).children(".icon").removeClass('active');
      }
    });
  }

  var accordionImg = function(){
    var $img = $('#changeImagen-js');
    var $a = $("#accordion .wrapper .heading h5");
    $a.on("click",function() {
      var srcImg = $(this).attr('data-src');
      $('#changeImagen-js').attr('src', srcImg);
    })
  }

  menuBurguer();
  carousel();
  contador();
  viewMore();
  accordionText();
  accordionImg();

  $(window).resize(carousel);
};

$(document).ready(begin);
















