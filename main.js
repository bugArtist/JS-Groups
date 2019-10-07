$(function() {

var students = [
  { id: 1, name: "Ethan" , group: "A" },
  { id: 2, name: "Nabil" , group: "A" },
  { id: 3, name: "Lorris" , group: "A" },
  { id: 4, name: "Grégoire" , group: "B" },
  { id: 5, name: "Jean-François" , group: "B" },
  { id: 6, name: "Kai" , group: "B" },
  { id: 7, name: "Melissa" , group: "C" },
  { id: 8, name: "Saëlle" , group: "C" },
  { id: 9, name: "Awa" , group: "C" },
  { id: 10, name: "Nafissatou" , group: "C" },
  { id: 11, name: "Essi" , group: "C" },
  { id: 12, name: "Youssef" , group: "C" }
];

var groupA = students.filter( function (a) { return a.group == "A"});
var groupB = students.filter( function (a) { return a.group == "B"});
var groupC = students.filter( function (a) { return a.group == "C"});

function sortGroups() {
  shuffle(groupA);
  shuffle(groupB);
  shuffle(groupC);

  var i = 0;
  var result = [];

  while ( i < 3 ) {
    result[i] = [];
    result[i].push(groupA[i])
    result[i].push(groupB[i])
    result[i].push(groupC[i])
    result[i].push(groupC[i + 3]);
    i++;
  }
  return result;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

$('.button').click(getResult);

function getResult () {
  $('.results').show();
  $('.button').text('Shuffle Again');
  var workingGroups = sortGroups();

  var j = 0;

  while (j < 3) {
    var str = '.item-result.' + j;
    var divs = $(str);

    for (var k = 0; k < divs.length; k++) {
      $(divs[k]).text(workingGroups[j][k].name)
    }

    j++;

  }
  
}








});