import * as $ from 'jquery';
import '@com/accordion/style.scss';

$('.accordion__name').on('click', (e) => {
  const item = $(e.target).parent('.accordion__item');

  item.find('.accordion__name').toggleClass('accordion__name--active');
  item.find('.accordion__text').toggleClass('accordion__text--active');
});
