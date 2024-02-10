const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__list');
let menuLinks = menu.querySelectorAll('.header__link');
let burgerClose = menu.querySelector('.burger__close')


burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__list--active');
  document.body.classList.toggle('stop-scroll');
});

burgerClose.addEventListener('click', function () {
  burger.classList.remove('burger--active');
  menu.classList.remove('header__list--active');
  document.body.classList.remove('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__list--active');
    document.body.classList.remove('stop-scroll');
  });
});

let search = document.querySelector('.header__search__btn');
let search__form = document.querySelector('.header__search__form');
let search__input = search__form.querySelector('.header__search__input');
let search__close = search__form.querySelector('.header__search__close');



search.addEventListener('click', function () {
  search__form.classList.toggle('header__search__form--active');
});

search__close.addEventListener('click', function () {
  search__form.classList.remove('header__search__form--active');
});


// Dropdown
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__toggle');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__menu');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__link');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('menu-active');
    dropDownBtn.classList.toggle('dropdown__toggle--active');
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownList.classList.remove('menu-active');
      dropDownBtn.classList.remove('dropdown__toggle--active');
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__toggle--active');
      dropDownList.classList.remove('menu-active');
    }
  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__toggle--active');
      dropDownList.classList.remove('menu-active');
    }
  });

});
//


  const formInput = document.querySelector('.header__bottom__input');

  formInput.addEventListener("focus", function () {
    formInput.classList.add('header__bottom__input--active')
    formInput.placeholder = ''
  });
  formInput.addEventListener("blur", function () {
    formInput.classList.remove('header__bottom__input--active')
    formInput.placeholder = 'Поиск по сайту';
  });

  formInput.addEventListener('click', function (e) {
    formInput.classList.add('header__bottom__input--active');
    formInput.placeholder = '';
  });
  document.addEventListener('click', function (e) {
    if (e.target !== formInput) {
      formInput.classList.remove('header__bottom__input--active');
      formInput.placeholder = 'Поиск по сайту';
    }
  });


// swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const swiper1 = new Swiper('.gallery-swiper', {
  // Optional parameters
  loop: false,


  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    350: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35
    },
    // when window width is >= 640px
    1421: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  }

});

const swiper2 = new Swiper('.events-swiper', {
  // Optional parameters
  loop: false,


  breakpoints: {
    // when window width is >= 320px
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    961: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiper3 = new Swiper('.projects-swiper', {
  // Optional parameters

  loop: false,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 50
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    // when window width is >= 480px
    770: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    // when window width is >= 640px
    1620: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 80
    }
  }
});



$(".accordion").accordion({
  active: "false",
  heightStyle: "content",
  widthStyle: "content",
  collapsible: true,
});


document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {

  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

tippy('#tooltip-one', {
  content: 'Пример современных тенденций — современная методология разработки',
  theme: 'my',
  maxWidth: 280,
  trigger: 'focus',
});

tippy('#tooltip-two', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'my',
  maxWidth: 264,
  trigger: 'focus',
});

tippy('#tooltip-three', {
  content: 'В стремлении повысить качество',
  theme: 'my',
  trigger: 'focus',
});


// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.75853046306778,37.61737764597692],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });


      var myPlacemark = new ymaps.Placemark([55.76021832140768,37.61514604807655], {}, {
        iconLayout: 'default#image',
        iconImageHref: '/img/map.png',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -20]
    });

      myMap.geoObjects.add(myPlacemark);
    }

// validation

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

new JustValidate('.feedback__form', {
  rules: {
      name: {
          required: true,
          minLength: 2,
          maxLength: 10,
          function: (name, value) => {
            const str = value;
            return ((/^([A-Za-zА-Яа-яЁё]*)$/.test(str)))
        }
      },
      tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            console.log(phone)
            return Number(phone) && phone.length === 10
        }

      }
  },

  messages: {
      name: {
          required: 'Вы не ввели имя',
          minLength: 'Используйте минимум 2 символа',
          maxLength: 'Используйте не более 10 символов',
          function: 'Недопустимый формат'
      },

      tel: {
          required: 'Вы не ввели телефон',
          function: 'Введите корректный номер'
      }
  },
});




$('.social__link').mouseup(function() { this.blur() })



$('a[href^="#"').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  return false;
});




document.addEventListener('DOMContentLoaded', function() {

  /* Записываем в переменные массив элементов-кнопок и подложку.
     Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll('.js-open-modal'),
      overlay      = document.querySelector('.js-overlay-modal'),
      closeButtons = document.querySelectorAll('.js-modal-close');


  /* Перебираем массив кнопок */
  modalButtons.forEach(function(item){

     /* Назначаем каждой кнопке обработчик клика */
     item.addEventListener('click', function(e) {

        /* Предотвращаем стандартное действие элемента. Так как кнопку разные
           люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
           Нужно подстраховаться. */
        e.preventDefault();

        /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
           и будем искать модальное окно с таким же атрибутом. */
        var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


        /* После того как нашли нужное модальное окно, добавим классы
           подложке и окну чтобы показать их. */
        modalElem.classList.add('modal_active');
     }); // end click

  }); // end foreach

  const closeModal = () => { // объявляем функцию закрытия модального окна
    const modals = document.querySelectorAll('.modal') // ищем все модальные окна
    if (!modals) return // если их нет, то прекращаем выполнение функции
    modals.forEach(el => { // если есть, то для каждого из них
      el.addEventListener('click', e => { // при клике
        if (e.target.closest('.modal__close')) { // если клик был клик на кнопке закрытия
          el.classList.remove('modal_active') // то скрываем модальное окно, удаляя активный класс
        }
        if (!e.target.closest('.modal__body')) { // если клик был за пределами контентной части модального окна, то есть на затемненную область
          el.classList.remove('modal_active') // то тоже скрываем модальное окно, удаляя активный класс
        }
      })
    })
  }
  closeModal() // вызываем функцию закрытия
});

