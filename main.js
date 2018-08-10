/**
 *Declaring variables containing methods for easier use
 *@params selectFirstCatName {method} - selects empty div
 *@params selectSecondCatName {method} - selects empty div
 */

let selectFirstCatName = document.querySelector('#catName');
let selectSecondCatName = document.querySelector('#secondCatName');

/**
 * Collecting names of the cats
 * @params catOne {string} - collect the first cat name
 * @params catTwo {string} - collect the second cat name
 */

let catOne = prompt('How do you want to name the first cat?')
if (catOne != null){
  selectFirstCatName.innerHTML = "Prrrr, I am " + catOne + " !"
}
let catTwo = prompt('Please give a proper name to a second one?')
if (catTwo != null){
  selectSecondCatName.innerHTML = "Meow, I am " + catTwo + " !"
}

/**
 * Creating onclick events for number incrementation of the cat clicks
 * @params clickOne {Number} - starting value of the clicks
 * @params incrementOne() {Number} - Incrementation of the clicks
 * @params clickTwo {Number} - starting value of the clicks
 * @params incrementTwo() {Number} - Incrementation of the clicks
 */
let clickOne = 0;
let incrementOne = function () {
  document.querySelector('#clicker1').innerHTML = clickOne++;
}
incrementOne();

let clickTwo = 0;
let incrementTwo = function () {
  document.querySelector('#clicker2').innerHTML = clickTwo++;
}
incrementTwo();
