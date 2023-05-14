// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  const integer = parseFloat(document.getElementById("highestInteger").value)
  let output = 0

  for (let counter = 1; counter <= integer; counter++) {
    output += counter
  }

  document.getElementById("output").innerHTML = "The sum is: " + output
}
