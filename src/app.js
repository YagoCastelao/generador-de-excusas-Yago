/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = function() {
  let pronoun = ["Una", "Uno", "El", "La"];
  let subject = ["motorista", "perro", "hermano", "gato", "tortuga", "vecino"];
  let action = ["tomó mi", "tiré mi", "me gritó", "me robó mi", "me mordió"];
  let possetion = ["tarea", "dedo del pie", "coche", "zapato"];
  let where = ["en la calle", "en mi casa", "en mi camino de entrada"];

  let proindx = Math.floor(Math.random() * pronoun.length);
  let subjtindx = Math.floor(Math.random() * subject.length);
  let actindx = Math.floor(Math.random() * action.length);
  let posindx = Math.floor(Math.random() * possetion.length);
  let wheindx = Math.floor(Math.random() * where.length);
  return (
    pronoun[proindx] +
    " " +
    subject[subjtindx] +
    " " +
    action[actindx] +
    " " +
    possetion[posindx] +
    " " +
    where[wheindx]
  );
};
