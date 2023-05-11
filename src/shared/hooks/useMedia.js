import { useState, useEffect } from 'react';

export const useMedia = (queries, values, defaultValue) => {
  // Определяем состояние
  const [value, setValue] = useState(defaultValue);

  // Используем useEffect для подписки на изменения размера окна
  useEffect(() => {
    // Создаем новый объект MediaQueryList, который отслеживает все переданные в queries запросы
    const mediaQueryLists = queries.map(q => window.matchMedia(q));

    // Функция для обновления значения состояния при изменении размера окна
    const updateValue = () => {
      // Находим первый соответствующий запрос и устанавливаем значение состояния соответствующим значением
      const index = mediaQueryLists.findIndex(mql => mql.matches);
      setValue(index === -1 ? defaultValue : values[index]);
    };

    // Вызываем updateValue при первом рендере компонента
    updateValue();

    // Подписываемся на событие изменения размера окна и вызываем updateValue при каждом изменении
    const listener = () => updateValue();
    mediaQueryLists.forEach(mql => mql.addListener(listener));

    // Отписываемся от событий при размонтировании компонента
    return () => mediaQueryLists.forEach(mql => mql.removeListener(listener));
  }, [defaultValue, queries, values]);

  return value;
}


/**Этот хук принимает три аргумента:

queries - массив строк с медиа-запросами, которые нужно отслеживать;
values - массив значений, которые соответствуют каждому медиа-запросу;
defaultValue - значение по умолчанию, которое будет возвращаться, если ни 
один из медиа-запросов не будет соответствовать текущему размеру окна. */