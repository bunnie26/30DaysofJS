document.addEventListener('keydown',(e)=>{
    const audio = document.querySelector(`audio[id="${e.keyCode}"]`) 
    if(!audio){
        return
    }
    audio.currentTime = 0;
    audio.play()
    const drum = document.querySelector(`.drum[id="${e.keyCode}"]`);
    drum.classList.add("active");
    drum.classList.remove("active");
    drum.classList.toggle("active");
})

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove("active")
}


const drums = document.querySelectorAll(".drum");
drums.forEach(drum=>{
    drum.addEventListener("transitionend",removeTransition)
})