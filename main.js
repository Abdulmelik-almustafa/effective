let myButton = document.querySelector(".Button");
let myNumber = document.querySelector(".number");
let mybtn = document.querySelector('.btn');
let countNumber = 0;
let mydiv =document.querySelector('.div');
let menu = document.querySelector('#hidden');
let color = document.querySelector('#color');
let conten = document.querySelector('.countenair');
let button = document.querySelector('.mybtn');
let myspan = document.querySelector('.go');

/**
mydiv.onclick = function() {
  menu.classList.toggle('visible');
}
**/
mydiv.onclick =function(e){
  menu.classList.toggle('visible');
  mydiv.classList.toggle('my');
  myspan.classList.toggle('get');
}
mybtn.onclick = function() {
  countNumber = 0;
  myNumber.innerHTML = 0;
}
myButton.onclick = function() {
  countNumber += 1;
  myNumber.innerHTML = countNumber;
  let userTarget = document.querySelector('#target');
  if (userTarget.value == countNumber) {
    window.alert('لقد وصلت لهدفك');
  }
}

button.onclick = function () {
  conten.style.backgroundColor=color.value;
  console.log(color.value);
}