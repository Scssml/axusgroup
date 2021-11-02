import '@com/steps/style.scss';
import * as $ from 'jquery';

const flexHeightFix = () => {
  if ($(window).width() > 1199) {
    $('.steps .steps__line').css('height', '4px');

    let maxHeight = 0;

    $('.steps .block-icon-dark').each((index, val) => {
      const item = $(val);

      item.css('height', 'auto');

      const paddingItem = item.outerHeight() - item.height();
      const heightItem = item.height() - paddingItem;

      maxHeight += (heightItem > maxHeight) ? heightItem : 0;
    });

    $('.steps .block-icon-dark').height(maxHeight);
  } else {
    $('.steps .block-icon-dark').css('height', 'auto');

    $('.steps .steps__line').each((index, val) => {
      const item = $(val);

      item.css('height', 'auto');

      let heightItem = item.next('.block-icon-dark').outerHeight();
      heightItem += (item.hasClass('steps__line--last')) ? -20 : 20;
      item.height(heightItem);
    });
  }
};

$(() => {
  setTimeout(() => {
    flexHeightFix();
  }, 300);
});

$(window).on('resize', flexHeightFix);
