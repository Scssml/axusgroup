import '@com/banner/style.scss';
import * as $ from 'jquery';

$('.banner__text').on('click', 'a[href^="#"]', (e) => {
  const headerHeight = 57;
  const item = $(e.target);
  const href = item.attr('href');

  if ($(href).length > 0) {
    const top = $(href)[0].getBoundingClientRect().top;

    window.scrollBy({
      top: top - headerHeight,
      behavior: 'smooth',
    });

    return false;
  }

  return true;
});
