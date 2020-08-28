// const item1 = document.querySelector(".leido1")
// const item2 = document.querySelector(".leido2")
// const item3 = document.querySelector(".leido3")
// const item4 = document.querySelector(".leido4")
// const item5 = document.querySelector(".leido5")
// const item6 = document.querySelector(".leido6")
// const item7 = document.querySelector(".leido7")
// const item8 = document.querySelector(".leido8")
// const item9 = document.querySelector(".leido9")
// const item10 = document.querySelector(".leido10")

// item1.onclick = () => {
//     item1.classList.add("gris")
//     item1.classList.remove("bold")
// }

// item2.onclick = () => {
//     item2.classList.add("gris")
//     item2.classList.remove("bold")
// }

// item3.onclick = () => {
//     item3.classList.add("gris")
//     item3.classList.remove("bold")
// }

// item4.onclick = () => {
//     item4.classList.add("gris")
//     item4.classList.remove("bold")
// }

// item5.onclick = () => {
//     item5.classList.add("gris")
//     item5.classList.remove("bold")
// }

// item6.onclick = () => {
//     item6.classList.add("gris")
//     item6.classList.remove("bold")
// }

// item7.onclick = () => {
//     item7.classList.add("gris")
//     item7.classList.remove("bold")
// }

// item8.onclick = () => {
//     item8.classList.add("gris")
//     item8.classList.remove("bold")
// }

// item9.onclick = () => {
//     item9.classList.add("gris")
//     item9.classList.remove("bold")
// }

// item10.onclick = () => {
//     item10.classList.add("gris")
//     item10.classList.remove("bold")
// }

const listaDesordenada = document.getElementsByTagName('li');

for (let item of listaDesordenada) {
    item.onclick = () => {
        item.classList.add("gris")
        item.classList.remove("bold")
    }
       
}