$(function() {
  $('#js-page-top').on('click', function() {
    $('html, body').animate( {
        'scrollTop': 0 }, 500);
  });
});