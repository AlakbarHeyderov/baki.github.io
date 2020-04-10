let value;
const todolist = document.querySelector(".serhler");
const todo = document.querySelector(".serhler:nth-child(2)");
const yenilikler = document.querySelector(".yenilikler.hbirler");

value = todolist;
value = todo;
value =yenilikler;

value = todolist.childNodes[2].textContent = "Deyisdirildi";


console.log(value);