"use strict";
(function () {
  // Part 1: Setting up the window load event listener to call init when page is loaded
  // 1.1. Write the event listener (one statement)
  window.addEventListener("load", () => {
    init();
  });
  // Part 2: Finish assigning event listeners for main interactive page elements (two buttons for now)
  function init() {
    // (Given) When [#answer-btn] is clicked, call [showAnswer]
    id("answer-btn").addEventListener("click", showAnswer);
    id("start-btn").addEventListener("click", fillJar);
    // 2.1. When #start-btn is clicked, fillJar should be called.
  }

  // Part 3: Show the number of green in the hidden paragraph under the jar!
  // Hint: Use querySelectorAll, textContent, and classList.add with the provided .hidden class (implemented in CSS)
  function showAnswer() {
    let length = qsa(".green").length;
    let pElement = document.getElementById("number-of-green-skittles-text");
    pElement.classList.remove("hidden");
    let numberOfGreenSkittleText = document.getElementById("count");
    numberOfGreenSkittleText.innerHTML = length;

    // 3.1. Write the statement to get all green skittles
    // 3.2. Update textContent of #count to include length of green skittles collection from 1.
    // 3.3. Show p tag.
  }

  // Part 4: Planning out the populating of skittles in the jar (we'd eventually like
  //         to fill the jar automatically when the page is loaded!).
  function fillJar() {
    console.log("filljar");
    var skittle = document.createElement("div");
    skittle.classList.add("skittle", getRandomColor());
    var element = document.getElementById("jar");
    element.appendChild(skittle);
    // Create and add one "test" skittle (a div element with the classes ".skittle" and ".green")
    // 4.1. (no code) What function do we use to create a new DOM element?

    // 4.2. (no code) What function do we use to add two classes?

    // 4.3. (no code) What function ddo we use to append one DOM element as a "child" to a parent DOM element?
  }

  // Part 5: Get a random color for a skittle (we'll add more colors soon!)
  function getRandomColor() {
    let COLORS = ["red", "green", "blue"];
    Math.floor(Math.random() * 3);
    // 5.1. Get a random integer number using length of
    // COLORS. Hint: Use Math.random() to get a number between [0, 1).

    // 5.2 Return a string at the random index of COLORS
    return COLORS[Math.floor(Math.random() * 3)];
  }

  /* ----- Provided Shorthand Functions ------- */
  // Note: These are the three provided helper
  // functions shown in lecture/section. You may
  // use these in your own JS, but these are the
  // only functions you are allowed to use in
  // your own work as an exception to the course
  // Academic Conduct policy. These are also useful
  // examples of JSDoc comments!
  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id (null if none).
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query (empty if none).
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector string.
   * @returns {object} first element matching the selector in the DOM tree (null if none)
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})();
