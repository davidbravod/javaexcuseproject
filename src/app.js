/* eslint-disable */
import "bootstrap";
import "./style.css";
/*
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
*/

window.onload = function() {
  //write your code here

  let theDog = ["The dog ", "My grandma ", "His turtle ", "My bird "];
  let ate = ["ate ", "peed ", "crushed ", "broke "];
  let myHomework = ["my homework ", "the keys ", "the car "];
  let whenIfinished = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let who = theDog[Math.round(Math.random() * (theDog.length - 1))];
  let action = ate[Math.round(Math.random() * (ate.length - 1))];
  let what = myHomework[Math.round(Math.random() * (myHomework.length - 1))];
  let when =
    whenIfinished[Math.round(Math.random() * (whenIfinished.length - 1))];

  let excuses = document.querySelector("#excuse");
  excuses.innerHTML = who + action + what + when;
};

console.log();
