import * as $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import '@com/slider-2/style.scss';

global.$ = $;
global.jQuery = $;

$('.slider-2').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    992: {
      items: 2,
    },
  },
});
