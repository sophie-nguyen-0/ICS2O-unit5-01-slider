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

const randomNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6 into variable "randomNumber"

/**
 * this function updates slider value
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  if (valueFromSlider == randomNumber) {
    document.getElementById("answer").innerHTML =
      "you got it! Great job! Bet you can't do it twice though!"
  }

  if (valueFromSlider != randomNumber) {
    document.getElementById("answer").innerHTML = "HA,HA! You thought... lol"
  }
}
