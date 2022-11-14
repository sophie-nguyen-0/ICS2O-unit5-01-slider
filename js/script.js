// Created by: sophie
// Created on: nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit5-01-slider/sw.js", {
    scope: "/ICS2O-unit5-01-slider/",
  })
}

/**
 * this function updates slider value
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
