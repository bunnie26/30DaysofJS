const second = document.querySelector(".second");
const miniute = document.querySelector(".miniute");
const hour = document.querySelector(".hour");
function setDate(){
    var D = new Date();
    var S = D.getSeconds();
    var M = D.getMinutes();
    var H = D.getHours();
    console.log(H,M,S);
    const secondDegrees = ((S / 60)* 360)+90;
    const miniuteDegrees = (((M / 60) * 360) + 90);
    const hourDegrees = (((H / 12) * 360) + 90 );
    second.style.transform = `rotate(${secondDegrees}deg)`
    miniute.style.transform = `rotate(${miniuteDegrees}deg)`
    hour.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate,1000);