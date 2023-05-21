import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();
// {t('Closed')}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        mainPage_title: 'Take good care of your small pets',

        disconnect_title: 'No Internet Connection',

        News: 'News',
        Find_pet: 'Find pet',
        Our_friends: 'Our friends',
        Log_IN: 'Log IN',
        Registration: 'Registration',

        My_information: 'My information',
        Edit_photo: 'Edit photo',
        Confirm: 'Confirm',
        Log_Out: 'Log Out',
        Birthday: 'birthday',
        City: 'city',

        remove: 'remove',
        Name: 'Name',
        Date_of_Birth: 'Date of Birth',
        Breed: 'Breed',
        Comments: 'Comments',
        My_pets: 'My pets',
        Add_pet: 'Add pet',
        No_pats_yet: 'You have no own added pets yet',

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

        No_result: 'There is no result',
        Read_more: 'Read more',

        alert_register_signin:
          'Please register or sign in to be able to add pet',
        Find_your_favorite_pet: 'Find your favorite pet',
        Filter: 'Filter',
        Filters: 'Filters',
        By_age: 'By age',
        By_gender: 'By gender',
        m: 'm',
        year: 'year',
        years: 'years',
        male: 'male',
        female: 'female',
        sell: 'sell',
        lost_found: 'lost/found',
        in_good_hands: 'in good hands',
        favorites_ads: 'favorite ads',
        my_ads: 'my ads',
        alert_failed_delete: 'Failed to delete notice. Please try again later.',
        Learn_more: 'Learn more',
        alert_signin_fav: 'Please sign in to add to favorites',
        alert_failed_update: 'Failed to update notice. Please try again later.',
        for_free: 'for free',
      },
    },
    ukr: {
      translation: {
        mainPage_title: 'Подбайте про своїх домашніх улюбленців',

        disconnect_title: 'Слава ЗСУ',

        News: 'Новини',
        Find_pet: 'Знайти тваринку',
        Our_friends: 'Наші друзі',
        Log_IN: 'Увійти',
        Registration: 'Зареєструватися',

        My_information: 'Моя інформація',
        Edit_photo: 'Редагувати фото',
        Confirm: 'Підтвердити',
        Log_Out: 'Вийти',
        Birthday: 'День народження',
        City: 'Місто',

        remove: 'видалити',
        Name: 'Імʼя',
        Date_of_Birth: 'Дата народження',
        Breed: 'Порода',
        Comments: 'Коментарі',
        My_pets: 'Мої тварини',
        Add_pet: 'Додати',
        No_pats_yet: 'Ви ще не додали жодну тваринку',

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

        No_result: 'Немає результатів',
        Read_more: 'Читати більше',

        alert_register_signin:
          'Будь ласка, авторизуйтеся, щоб додати тваринку!',
        Find_your_favorite_pet: 'Знайди собі улюбленця',
        Filter: 'Фільтр',
        Filters: 'Фільтри',
        By_age: 'За віком',
        By_gender: 'За статтю',
        m: 'м',
        year: 'рік',
        years: 'роки',
        male: 'Чоловіча',
        female: 'Жіноча',
        sell: 'Продається',
        lost_found: 'Загублені/Знайдені',
        in_good_hands: 'В хороші руки',
        favorites_ads: 'Улюблені',
        my_ads: 'Мої оголошення',
        alert_failed_delete:
          'Не вдалося видалити оголошення. Будь ласка, спробуйте ще раз згодом.',
        Learn_more: 'Дивитися більше',
        alert_signin_fav: 'Будь ласка, авторизуйтеся, щоб додати до улюблених!',
        alert_failed_update:
          'Не вдалося оновити оголошення. Будь ласка, спробуйте ще раз згодом.',
        for_free: 'безкоштовно',
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
