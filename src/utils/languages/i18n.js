import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        mainPage_title:'Take good care of your small pets',

        Our_friends: 'Our friends',
        Closed: 'Closed',
        Time: 'Time',
        Adress: 'Adress',
        Email: 'Email',
        Phone: 'Phone',
        day_and_night: 'day and night',
        on_the_website: 'on the website',
        MN: 'MN',
        TU: 'TU',
        WE: 'WE',
        TH: 'TH',
        FR: 'FR',
        SA: 'SA',
        SU: 'SU',

        News: 'News',
        No_result: 'There is no result',
        Read_more: 'Read more',
      },
    },
    ukr: {
      translation: {
        mainPage_title:'Подбайте про своїх домашніх улюбленців',

        Our_friends: 'Наші друзі',
        Closed: 'Зачинено',
        Time: 'Часи роботи',
        Adress: 'Адреса',
        Email: 'Пошта',
        Phone: 'Телефон',
        day_and_night: 'вдень та вночі',
        on_the_website: 'на сайті',
        MN: 'ПН',
        TU: 'ВТ',
        WE: 'СР',
        TH: 'ЧТ',
        FR: 'ПТ',
        SA: 'СБ',
        SU: 'НД',

        News: 'Новини',
        No_result: 'Немає результатів',
        Read_more: 'Читати більше',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
