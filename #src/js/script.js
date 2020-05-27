"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".btn-block");
  const text = document.querySelector(".text__show-text");
  //функція для додавання/видалення класу
  const toggleClass = (selector, element = text) => {
    element.classList.toggle(selector);
  };
  //функція для видалення класу
  const removeClass = (selector, element = text) => {
    element.classList.remove(selector);
  };
  //функція для додавання класу
  const addClass = (selector, element = text) => {
    element.classList.add(selector);
  };
  //перебираєм батька кнопок(отримуємо доступ до дітей)
  btns.forEach((item) => {
    item.addEventListener("click", e => {
      const target = e.target;
      //перевіряємо клас і виконуємо певну дію над текстом
      // натиснута кнопка "Жирний текст"(тоглим css class)
      if (target.classList.contains("fa-bold")) { 
        toggleClass("boldText"); 
        // натиснута кнопка "Курсив"(тоглим css class)
      } else if (target.classList.contains("fa-italic")) { 
        toggleClass("italicText");
        // натиснута кнопка "Підкреслиний текст"(тоглим css class)
      } else if (target.classList.contains("fa-underline")) { 
        toggleClass("underlineText");
        removeClass("line-throughText");
        // натиснута кнопка "Закреслений текст"(тоглим css class)
      } else if (target.classList.contains("fa-strikethrough")) { 
        toggleClass("line-throughText");
        removeClass("underlineTex");
        // натиснута кнопка "Вирівняти по лівому краю текст"(додаєм/видаляєм відповідні css class-и)
      } else if (target.classList.contains("fa-align-left")) { 
        addClass("align-left");
        removeClass("align-center");
        removeClass("align-right");
        // натиснута кнопка "Вирівняти по центру текст"(додаєм/видаляєм відповідні css class-и)
      } else if (target.classList.contains("fa-align-center")) {
        addClass("align-center");
        removeClass("align-left");
        removeClass("align-right");
        // натиснута кнопка "Вирівняти по правому краю текст"(додаєм/видаляєм відповідні css class-и)
      } else if (target.classList.contains("fa-align-right")) {
        addClass("align-right");
        removeClass("align-center");
        removeClass("align-left");
      }
    });
  });
    // міняєм розмір або назву щрифта 
  const link = document.querySelectorAll("a");
  // перебираємо всі посилання(отримуємо доступ до кожного посилання окремо)
  link.forEach( item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const fontSize = e.target.textContent; // записуємо в змінну текст ссилки
      const fontFamily = e.target.textContent;
      text.style.fontSize = text.style.fontSize === fontSize ? "" : fontSize;
      text.style.fontFamily = text.style.fontFamily === fontFamily ? "" : fontFamily;
    });
  });










});
