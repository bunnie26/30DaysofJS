const color = document.querySelector(".color")
const space = document.querySelector(".space")
const blur = document.querySelector(".blur")
const inputs = document.querySelectorAll("input")
const root = document.querySelector(":root")

// function handleUpdate(){
//     console.log(this.value);
// }

// inputs.forEach(input =>{
//     input.addEventListener('change',()=>{
//         console.log(input.value);
//     })
// })

color.addEventListener('input',()=>{
    root.style.setProperty('--base',color.value)
})
space.addEventListener('input',()=>{
    root.style.setProperty('--spacig',space.value+'px')
})
blur.addEventListener('input',()=>{
    root.style.setProperty('--blur',blur.value+'px')
})