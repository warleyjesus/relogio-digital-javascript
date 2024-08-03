const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')
const back = [
    "https://www.ikebanaflores.com.br/blog/wp-content/uploads/2019/06/bairros-de-belo-horizonte-conheca-historias-e-por-que-visitar-cada-um.jpeg",
   " https://soubh.uai.com.br/uploads/post/image/13270/main_EAFO.jpg"
]

let currentIndex = 0;


function updateBackground (){
 
const body = document.getElementById('body')
body.style.backgroundImage = `url(${back[currentIndex]})`;
currentIndex = (currentIndex +1) % back.length



}


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
updateBackground()
// Atualiza o relógio a cada segundo (1000 milissegundos)
setInterval(updateClock, 1000);
setInterval(updateBackground, 10000);

fidfkjdshgffdghjogfihjfdhgbn
