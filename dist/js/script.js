/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('DOMContentLoaded', () => {
  // Tabs
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    //функция для скрытия табов, реализована через css классы
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      //удаление активного класса с самого таба
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    //функция для показа табов, задаем значение по дефолту
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', event => {
    // работаем с событием клик
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      // делегирование событий
      tabs.forEach((item, i) => {
        // перебираем табы
        if (target == item) {
          // если айтем совпадает с таргетом, вызываем ф-кции
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }); // Timer

  const deadline = '2022-07-16'; // дедлайн

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds; // обьявляем переменные для использования в условии

    const t = Date.parse(endtime) - Date.parse(new Date()); // разница между датами в мс

    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor(t / (1000 * 60 * 60) % 24);
      minutes = Math.floor(t / 1000 / 60 % 60);
      seconds = Math.floor(t / 1000 % 60);
    }

    return {
      // возвращаем обьект 
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function addZero(num) {
    // функция для добавления нуля к цифре
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    // функция для установки часов (универсалььная)
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      // функция для обновления часов
      const t = getTimeRemaining(endtime); // присваиваем переменной обьект с временем

      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);

      if (t.total <= 0) {
        // условие для отсановки таймера
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline); // вызов таймера !!
  // modal

  const modal = document.querySelector('.modal'),
        modalTriggers = document.querySelectorAll('[data-modal]'),
        modalClose = document.querySelector('[data-close]');

  function openModal() {
    //DRY
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; // отменяем скролл страницы

    clearInterval(modalOpenTimeout);
  }

  function closeModal() {
    // DRY 
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // восстанавливаем дефолтный скролл
  }

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', openModal);
  });
  modalClose.addEventListener('click', closeModal); // закрытие окна по клику на кнопку закрытия

  modal.addEventListener('click', e => {
    // закрытие диалогового окна по клику по подложке
    if (e.target === modal) {
      // строго если кликаем по подложке
      closeModal();
    }
  });
  document.addEventListener('keydown', e => {
    // закрытие окна по нажатию клавиши Esc
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      // только если заданная клавиша и окно открыто
      closeModal();
    }
  }); // const modalOpenTimeout = setTimeout(openModal, 10000);      // переменная с таймером запуска модалки (для отмен)

  function openModalByScroll() {
    // функция для дальнейшей отмены собитыя
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
      removeEventListener('scroll', openModalByScroll); // отмена события после выполнения условия
    }
  }

  window.addEventListener('scroll', openModalByScroll); // открытие модального окна по достижению конца стр.
  // создание карточек с помощью классов

  class MenuCard {
    constructor(src, alt, title, descr, price, parent) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parent); // parent уже будет ДОМ элементом

      this.course = 35;
      this.changeToUAH(); // вызов метода
    }

    changeToUAH() {
      // метод для конвертации
      this.price = this.course * this.price;
    }

    render() {
      // метод рендер для создания карточки
      const element = document.createElement('div'); // создаем новый элемент и помещаем в него структуру

      element.innerHTML = `                           
        <div class="menu__item">
          <img src=${this.src} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
        </div>
      `;
      this.parent.append(element); // пушим элемент в родителя
    }

  }

  new MenuCard( // создание класса без переменной позволяет воспользоватсья им всего один раз
  'img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высокимкачеством!', 9, '.menu .container').render(); // метод класса, можно вызывать в таком формате

  new MenuCard('img/tabs/elite.jpg', 'elite', 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 19, '.menu .container').render();
  new MenuCard('img/tabs/post.jpg', 'post', 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 15, '.menu .container').render();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map