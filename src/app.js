/* eslint-disable */
import "bootstrap";
import "./style.css";
/*
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
*/

window.onload = function() {
  //write your code here

  var TheDog = ["The dog ", "My grandma ", "His turtle ", "My bird "];
  var ate = ["ate ", "peed ", "crushed ", "broke "];
  var myHomework = ["my homework ", "the keys ", "the car "];
  var whenIfinished = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var who = TheDog[Math.round(Math.random() * (TheDog.length - 1))];
  var action = ate[Math.round(Math.random() * (ate.length - 1))];
  var what = myHomework[Math.round(Math.random() * (myHomework.length - 1))];
  var when =
    whenIfinished[Math.round(Math.random() * (whenIfinished.length - 1))];

  document.getElementById("excuse").innerHTML = who + action + what + when;
};

console.log();
