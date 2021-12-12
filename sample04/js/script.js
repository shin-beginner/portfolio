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

    $('#js-page-top').on('click', function() {
        $('html, body').animate( {
            'scrollTop': 0 }, 500);
    });

  $('#top-logo').on('click', function() {
    $('html, body').animate( {
      'scrollTop': 0}, 500);
  });

  $('#nav_toggle').on('click', function() {
    $('#nav_toggle, .gnav').toggleClass('show');
  });
});