$(function() {
      //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ハンバーガーメニュー
  $('.hamburger').on('click', function() {
    hamburger();
  });

  //メニューのリンクをクリックした時
  $('#navi a').on('click', function() {
    hamburger();
  });

  //Inview(画面が表示されたタイミングで処理を実行)
  $('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass('slide-left');
    }
  });

  $('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-rightクラスを追加
      $(this).stop().addClass('slide-right');
    }
  });

  //受験生吹き出し
  $('.inview-balloon').on('inview', function(evnet, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('balloon');
    }
  });
});

//ハンバーガーメニュークリック時の関数
function hamburger() {
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {
    $('#navi').addClass('active');
  } else {
    $('#navi').removeClass('active');
  }
}