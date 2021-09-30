import * as $ from 'jquery';
import '@com/tabs/style.scss';

$('.tabs__item').on('click', (e) => {
  const btn = $(e.target);
  const tabsId = btn.data('tabs-id');
  const tab = btn.data('tab');

  btn.parent('.tabs').find('.tabs__item--active').removeClass('tabs__item--active');
  btn.addClass('tabs__item--active');

  $('#' + tabsId + ' [data-tab].d-block').removeClass('d-block').addClass('d-none');
  $('#' + tabsId + ' [data-tab="' + tab + '"]').addClass('d-block').removeClass('d-none');
});
