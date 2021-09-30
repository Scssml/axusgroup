import * as $ from 'jquery';
import '@com/btn-menu/style.scss';

$('.btn-menu').on('click', (e) => {
  $(e.target).toggleClass('btn-menu--active');
  $('.sidebar').toggleClass('sidebar--active');
  $('.sidebar__content').toggleClass('sidebar__content--active');
  $('.sidebar__overlay').toggleClass('sidebar__overlay--active');
});
