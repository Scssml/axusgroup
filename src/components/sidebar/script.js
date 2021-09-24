import * as $ from 'jquery';
import '@com/sidebar/style.scss';

$('.sidebar').on('click', '.sidebar__btn-close, .sidebar__overlay--active', () => {
  $('.sidebar').removeClass('sidebar--active');
  $('.sidebar__content').removeClass('sidebar__content--active');
  $('.sidebar__overlay').removeClass('sidebar__overlay--active');
});
