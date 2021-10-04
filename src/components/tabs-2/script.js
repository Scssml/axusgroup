import * as $ from 'jquery';
import '@com/tabs-2/style.scss';

$('.tabs-2__item').on('click', (e) => {
  let btn = $(e.target);

  if (!btn.hasClass('tabs-2__item')) {
    btn = btn.parents('.tabs-2__item');
  }

  const tabsId = btn.data('tabs-id');
  const tab = btn.data('tab');

  btn.parent('.tabs-2').find('.tabs-2__item--active').removeClass('tabs-2__item--active');
  btn.addClass('tabs-2__item--active');

  $('#' + tabsId + ' [data-tab].d-block').removeClass('d-block').addClass('d-none');
  $('#' + tabsId + ' [data-tab="' + tab + '"]').addClass('d-block').removeClass('d-none');
});
