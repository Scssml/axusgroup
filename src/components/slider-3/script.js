import * as $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import '@com/slider-3/style.scss';

global.$ = $;
global.jQuery = $;

$('.slider-3').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  items: 1,
});
