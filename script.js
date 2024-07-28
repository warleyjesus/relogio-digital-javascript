const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')


function updateClock() {


const date = new Date();

const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

hoursElement.textContent =hours
minutesElement.textContent =minutes
secondsElement.textContent =seconds



console.log (hours,minutes,seconds)





}

// Atualiza o relógio imediatamente
updateClock();

// Atualiza o relógio a cada segundo (1000 milissegundos)
setInterval(updateClock, 1000);
