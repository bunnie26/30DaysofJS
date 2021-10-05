const color = document.querySelector(".color")
const space = document.querySelector(".space")
const blur = document.querySelector(".blur")
const inputs = document.querySelectorAll("input")

function handleUpdate(){
    console.log(this.value)
}

inputs.forEach(input =>{
    input.addEventListener('change',handleUpdate)
})