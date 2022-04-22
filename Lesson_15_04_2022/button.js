"use strict";

(function () {
  window.addEventListener("load", init);

  function init() {
    let button = document.querySelector(".btn1");
    let button2 = document.querySelector(".btn2");
    button.addEventListener("click", click);
    button2.addEventListener("click", click2);
  }

  /**
   * @param {object} e Event -- Event details
   */
  function click(e) {
    toggleButtons();
  }
  function click2(e) {
    toggleButtons();
  }
  const toggleButtons = () => {
    let firstSection =
      document.getElementsByTagName("main")[0].firstElementChild;
    let lastSection = document.getElementsByTagName("main")[0].lastElementChild;
    let firstButton = firstSection.firstElementChild;
    let secondButton = lastSection.firstElementChild;
    firstSection.appendChild(secondButton);
    lastSection.appendChild(firstButton);
  };

  /** ---- Helper Functions  ---- */

  function gen(tagName) {
    return document.createElement(tagName);
  }

  function id(idName) {
    return document.getElementById(idName);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();
