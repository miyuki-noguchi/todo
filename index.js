$(function () {
  // mv
  setTimeout(function () {
    $('.mv-txt').fadeIn(1000);
  }, 2000);

  // modal
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

const target = $('#target-kawauso1');
const el = target.offset().top;
console.log(el);
$(window).scroll(function () {
  const scroll = $(this).scrollTop();
  console.log(scroll);
  if (scroll + 800 > el) {
    target.addClass('active');
  }
});
