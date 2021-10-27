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

  const target = $('#target-kawauso1');
  const target3 = $('#target-kawauso3');
  const target5 = $('#footer-img');
  setInterval(function () {
    target.addClass('active');
    target3.addClass('active');
    target5.addClass('active');
    target2.removeClass('active');
    target4.removeClass('active');
  }, 5000);

  const target2 = $('#target-kawauso2');
  const target4 = $('#target-kawauso4');
  setInterval(function () {
    target2.addClass('active');
    target4.addClass('active');
    target.removeClass('active');
    target3.removeClass('active');
    target5.removeClass('active');
  }, 7000);
});

// const target = $('#target-kawauso1');
// const el = target.offset().top;
// $(window).scroll(function () {
//   const scroll = $(this).scrollTop();
//   console.log(scroll);
//   if (scroll + 800 > el) {
//     target.addClass('active');
//   }
// });
