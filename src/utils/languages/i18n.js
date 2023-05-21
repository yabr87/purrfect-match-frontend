import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();
// {t('Closed')}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Login_title: 'Login',
        Email: 'Email',
        Password: 'Password',
        Dont_have_an_account: "Don't have an account",
        Register: 'Register',
        Log_IN: 'Log IN',
        Registration: 'Registration',
        Registration_title: 'Registration',
        Confirm_password: 'Confirm password',
        Already_have_an_account: 'Already have an account',

        Congrats: 'Congrats',
        registration_is_successful: 'Your registration is successful',
        Go_to_profile: 'Go to profile',

        mainPage_title: 'Take good care of your small pets',

        disconnect_title: 'No Internet Connection',

        News: 'News',
        Find_pet: 'Find pet',
        Our_friends: 'Our friends',

        My_information: 'My information',
        Edit_photo: 'Edit photo',
        Confirm: 'Confirm',
        Log_Out: 'Log Out',
        Birthday: 'Birthday',
        Сity: 'city',

        remove: 'remove',
        Name: 'Name',
        Date_of_Birth: 'Date of birth',
        Breed: 'Breed',
        Comments: 'Comments',
        My_pets: 'My pets',
        Add_pet: 'Add pet',
        No_pats_yet: 'You have no own added pets yet',

        Closed: 'Closed',
        Time: 'Time',
        Adress: 'Adress',
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
        alert_pet_removed:'removed',
        for_free: 'for free',
        Price: 'Price',
        Place: 'Place',
        The_sex: 'The sex',
        Add_to: 'Add to',
        Contact: 'Contact',

        Already_leaving: 'Already_leaving',
        Cancel: 'Cancel',
        Yes: 'Yes',
        alert_LogOut_success: 'Log out successfull',

        Delete_adverstiment: 'Delete adverstiment',
        Are_you_sure_to_delete: 'Are you sure you want to delete',
        You_cant_undo_this_action: 'You can`t undo this action',

        Edit_your_pet: 'Edit your pet',
        Raise_your_ad_only_for: 'Raise your ad only for',
        Add_payment_to_raise: 'Add payment to raise your ad',
        Just_scroll_your_value: 'Just scroll your value',
        Title_of_ad: 'Title of ad',
        Name_of_pet: 'Name of pet',
        Location: 'Location',
        Type_your_new_price: 'Type your new price',
        Update: 'Update',
        Type_a_comment: 'Type a comment',
        Type_name_of_pet: 'Type the name of the pet',
        Type_the_breed: 'Type the breed',
        Type_location: 'Type location',
        Type_title: 'Type title of publication',
        Raise_your_ad: 'Raise your ad',
        alert_Pet_edited_successfully: 'Pet edited successfully',
        alert_Failed_to_edit_pet: 'Failed to edit pet',

        Choose_option: 'Choose option',
        Personal_details: 'Personal details',
        More_info: 'More info',

        is_your_pet: 'your pet',
        is_sell: 'sell',
        is_lost_found: 'lost/found',
        is_in_good_hands: 'in good hands',

        Back: 'Back',
        Next: 'Next',
        Done: 'Done',
        Add_only_pet: 'Add pet',
        Add_lost_pet: 'Add lost pet',
        Add_pet_for_sale: 'Add pet for sale',
        Add_my_pet: 'Add my pet',

        Title_of_add: 'Title of add',
        Name_Pet: 'Name Pet',
        Type_title_of_publication: 'Type title of publication',
        Type_breed: 'Type breed',
        Type_name_of_the_pet: 'Type name of the pet',
        Please_fill_all_the_fields: 'Please fill all the fields',
        The_Sex: 'The Sex',
        Add_photo: 'Add photo',
        Drag_the_scroll_to_raise_your_ad: 'Drag the scroll to raise your ad',
        Type_of_price: 'Type of price',
        Type_your_location: 'Type your location',

        //404
        Ooops: 'Ooops',
        This_page_not_found: 'This page not found',
        To_main_page: 'To main page',

        Search:'Search',
      },
    },
    ukr: {
      translation: {
        Login_title: 'Авторизація',
        Email: 'Пошта',
        Password: 'Пароль',
        Dont_have_an_account: 'Ще не маєте акаунта',
        Register: 'Зареєструватися',
        Registration_title: 'Реєстрація',

        Log_IN: 'Увійти',
        Registration: 'Зареєструватися',
        Confirm_password: 'Підтвердіть пароль',
        Already_have_an_account: 'Вже маєте акаунт',

        Congrats: 'Вітаємо',
        registration_is_successful: 'Ви успішно зареєструвалися',
        Go_to_profile: 'Перейти в профіль',

        mainPage_title: 'Подбайте про своїх домашніх улюбленців',

        disconnect_title: 'Слава ЗСУ',

        News: 'Новини',
        Find_pet: 'Знайти тваринку',
        Our_friends: 'Наші друзі',

        My_information: 'Моя інформація',
        Edit_photo: 'Редагувати фото',
        Confirm: 'Підтвердити',
        Log_Out: 'Вийти',
        Birthday: 'День народження',
        Сity: 'місто',

        remove: 'видалити',
        Name: 'Імʼя',
        Date_of_Birth: 'Дата народження',
        Breed: 'Порода',
        Comments: 'Коментарі',
        My_pets: 'Мої тварини',
        Add_pet: 'Додати тваринку',
        No_pats_yet: 'Ви ще не додали жодну тваринку',

        Closed: 'Зачинено',
        Time: 'Часи роботи',
        Adress: 'Адреса',
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
          alert_pet_removed:'видалено',
          for_free: 'безкоштовно',
        Price: 'Ціна',
        Place: 'Місце',
        The_sex: 'Стать',
        Add_to: 'Додати',
        Contact: 'Звʼязатися',

        Already_leaving: 'Вже йдете',
        alert_LogOut_success: 'Вихід успішний',
        Cancel: 'Відмінити',
        Yes: 'Так',

        Delete_adverstiment: 'Видалити оголошення',
        Are_you_sure_to_delete: 'Ви впевнені, що хочете видалити',
        You_cant_undo_this_action: 'Ви не зможете відмінити цю дію',

        Edit_your_pet: 'Редагуйте тваринку',
        Raise_your_ad_only_for: 'Підвищіть ваше оголошення всього за',
        Add_payment_to_raise: 'Додайте оплату, щоб підвищити оголошення',
        Just_scroll_your_value: 'Просто прокрутіть значення',
        Title_of_ad: 'Заголовок оголошення',
        Name_of_pet: 'Імʼя тваринки',
        Location: 'Локація',
        Type_your_new_price: 'Вкажіть нову ціну',
        Update: 'Оновити',
        Type_a_comment: 'Напишіть коментар',
        Type_name_of_pet: 'Напишіть імʼя тваринки',
        Type_the_breed: 'Вкажіть породу',
        Type_location: 'Вкажіть локацію',
        Type_title: 'Напишіть заголовок',
        Raise_your_ad: 'Підвищіть ваше оголошення',
        alert_Pet_edited_successfully: 'Тваринка відредагована успішно',
        alert_Failed_to_edit_pet: 'Не вдалося редагувати тваринку',

        Choose_option: 'Виберіть опцію',
        Personal_details: 'Деталі',
        More_info: 'Більше інфо',

        is_your_pet: 'ваша тваринка',
        is_sell: 'продається',
        is_lost_found: 'загублена/знайдена',
        is_in_good_hands: 'в хороші руки',

        Back: 'Назад',
        Next: 'Далі',
        Done: 'Готово',
        Add_only_pet: 'Додати',
        Add_lost_pet: 'Додати загублену тваринку',
        Add_pet_for_sale: 'Додати тваринку на продаж',
        Add_my_pet: 'Додати мою тваринку',

        Title_of_add: 'Заголовок оголошення',
        Name_Pet: 'Імʼя тваринки',
        Type_title_of_publication: 'Напишіть заголовок',
        Type_breed: 'Вкажіть породу',
        Type_name_of_the_pet: 'Напишіть імʼя тваринки',
        Please_fill_all_the_fields: 'Будь ласка, заповніть всі поля',
        The_Sex: 'Стать',
        Add_photo: 'Додати фото',
        Drag_the_scroll_to_raise_your_ad:
          'Перетягніть прокрутку, щоб підвищити оголошення',
        Type_of_price: 'Вкажіть ціну',
        Type_your_location: 'Вкажіть локацію',

        //404
        Ooops: 'Ууупс',
        This_page_not_found: 'Ця сторінка не знайдена',
        To_main_page: 'На головну',

        Search:'Шукати',
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
