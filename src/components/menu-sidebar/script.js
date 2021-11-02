import * as $ from 'jquery';
import '@com/menu-sidebar/style.scss';

$('.menu-sidebar__link').on('click', (e) => {
  const id = $(e.target).attr('href');
  const headerHeight = 57;
  const top = $(id)[0].getBoundingClientRect().top;

  $('.sidebar__btn-close').trigger('click');

  // $('html, body').stop().animate({
  //   scrollTop: top - headerHeight,
  // }, {
  //   duration: 300,
  //   easing: 'linear',
  // });

  window.scrollBy({
    top: top - headerHeight,
    behavior: 'smooth',
  });

  return false;
});
