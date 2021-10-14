$(function () {
  $('.btn').each(function () {
    $(this).click(function () {
      const target = $(this).data('btn');
      const modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
    $('.hide').click(function () {
      $(this).fadeOut();
      return false;
    });
  });
});
