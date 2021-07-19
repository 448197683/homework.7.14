const span = document.querySelector("span")
console.log(span)
const weeks = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Souday'
];

function xx() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth()+1;
  const day = time.getDate();
  const week = time.getDay();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
}

function init(){
  xx();
  setInterval(xx, 1000);
}
init();

//`${hours<10?`0${hours}`:`${hours}`}`:`${minutes}`:`${seconds}`