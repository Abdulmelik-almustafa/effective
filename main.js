let myButton = document.querySelector(".Button");
let myNumber = document.querySelector(".number");
let mybtn = document.querySelector('.btn');
let countNumber = 0;
let mydiv =document.querySelector('.div');
let menu = document.querySelector('#hidden');
let color = document.querySelector('#color');
let conten=document.querySelector('.countenair');
let button = document.querySelector('.mybtn');
let myspan = document.querySelector('.go');
let dark = document.querySelector('.darkMode');
let darkbg = document.querySelector('#back');
let span=document.querySelectorAll('.div span');



//show list box
mydiv.onclick =function(e){
  menu.classList.toggle('visible');
  mydiv.classList.toggle('my');
  myspan.classList.toggle('get');
}
//end list box
//make the counter zero
mybtn.onclick = function() {
  countNumber = 0;
  myNumber.innerHTML = 0;
}
//end the couner
//make couner add
myButton.onclick = function() {
  countNumber += 1;
  myNumber.innerHTML = countNumber;
  let userTarget = document.querySelector('#target');
  if (userTarget.value == countNumber) {
    window.alert('لقد وصلت لهدفك');
  }
}
//end add counter
//chng the color of tasbeh
button.onclick = function () {
  conten.style.backgroundColor=color.value;
  console.log(color.value);
}
//end chng color 
//switch to dark mode
dark.onclick=function (){
  this.classList.toggle('chngbtn');
  if (dark.classList.contains('chngbtn')) {
    dark.innerHTML='ايقاف';
  }else{
    dark.innerHTML='تشغيل';
  }
  darkbg.classList.toggle('show');
  myNumber.classList.toggle('glow');
  span.forEach(function(e){
    e.classList.toggle('chng');
  })
}
// end dark mode