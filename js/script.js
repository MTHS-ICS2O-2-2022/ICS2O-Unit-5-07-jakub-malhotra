// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  let text = ""
  let counter = 0
  const multiplier = parseInt(document.getElementById("multiplier").value)
  const multiplicand = parseInt(document.getElementById("multiplicand").value)


  while (counter <= multiplier) {
    text = text + multiplicand + " x " + counter + " = " + counter * multiplicand + "<br>"
    counter = counter + 1
  }
  document.getElementById("answer").innerHTML = text
}
