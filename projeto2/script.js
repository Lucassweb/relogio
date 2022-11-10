//selecionando os elementos
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() { //função para atualizar relogio
    let now = new Date();//data
    let hour = now.getHours() //hora
    let minute = now.getMinutes()//minuto
    let second = now.getSeconds()//segundos

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90; 
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;    
}

function fixZero(time) {
    if(time < 10) {
        return '0'+time;
    }else {
        return time;
    }
}

setInterval(updateClock, 1000); //de 1 segundo ele executara a função updateClock
updateClock();