'use strict';

window.addEventListener('DOMContentLoaded', () => {

  // Tabs

  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {                           //функция для скрытия табов, реализована через css классы
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {                              //удаление активного класса с самого таба
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {                      //функция для показа табов, задаем значение по дефолту
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {     // работаем с событием клик
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {   // делегирование событий
      tabs.forEach((item, i) => {                                   // перебираем табы
        if (target == item) {                                       // если айтем совпадает с таргетом, вызываем ф-кции
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer

  const deadline = '2022-07-16';                              // дедлайн

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());   // разница между датами в мс

    const days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {                                                 // возвращаем обьект 
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function addZero(num) {                                   // функция для добавления нуля к цифре
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {                  // функция для установки часов (универсалььная)
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {                             // функция для обовления часов
      const t = getTimeRemaining(endtime);               // присваиваем переменной обьект с временем

      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);

      if (t.total <= 0) {                               // условие для отсановки таймера
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);                        // вызов таймера !!

});