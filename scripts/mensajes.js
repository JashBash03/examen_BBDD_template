const fs = require("fs");

function getAll() {
  const mensajes = require("../db/mensajes.json"); //esto funciona!
  return mensajes;
}

function add(mensaje, autor) {
  const mensajes = getAll();
  mensajes.push({ mensaje });
  fs.writeFileSync("./db/mensajes.json", JSON.stringify(mensajes, null, 2));
}

function reset() {
  fs.writeFileSync("./db/mensajes.json", "[]");
}

function createList() {
  const lista = getAll();
  let html = ""
  lista.forEach((item)=>{
    html +=  `<p>${item.mensaje}</p>`
  })
  return html
}

module.exports = {
  getAll,
  add,
  reset,
  createList
};