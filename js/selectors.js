// declare your functions here...
$(document).ready(function() {
  $('p')
});

function lastImageSelector() {
  answer= $('img:last')
  return answer;
}

function ninjaBabySelector() {
  answer= $('#baby-ninja')
  return answer;
}

function divSelector() {
  answer= $('.pics')
  return answer;
}

function firstListItem() {
  $('parent-tag child-tag:first-child')
  answer= $('ul li:first-child')
}