import ymaps from 'ymaps';
import '@com/contacts/style.scss';

const options = {
  url: 'https://api-maps.yandex.ru/2.1/',
  apiKey: '655db21d-3295-4afb-a223-64c14c5f7373',
  lang: 'ru_RU',
};

ymaps.load(`${options.url}?apikey=${options.apiKey}&lang=${options.lang}`).then(maps => {
  const map = new maps.Map('map', {
    center: [53.186938, 50.192028],
    zoom: 14,
    controls: [],
  });

  map.geoObjects.add(new maps.Placemark([53.186938, 50.192028], {}, {
    preset: 'islands#dotIcon',
    iconColor: '#E42313',
  }));
});
