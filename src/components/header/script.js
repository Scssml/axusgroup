import '@com/header/style.scss';
import * as $ from 'jquery';

$(() => {
  $(window).on('scroll', (e) => {
    const item = $(e.target);

    if (item.scrollTop() > 88) {
      $('.header__content').addClass('header__content--fixed');
    } else {
      $('.header__content--fixed').removeClass('header__content--fixed');
    }
  });
});
