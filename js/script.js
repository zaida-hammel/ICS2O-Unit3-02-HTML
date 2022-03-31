// Created by: Zaida Hammel
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('length-of-pyramid').value)
  const width = parseInt(document.getElementById('width-of-pyramid').value)
  const height = parseInt(document.getElementById('height-of-pyramid').value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById('volume').innerHTML = 'The volume is: ' + volume + ' mm³'
}
