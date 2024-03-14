console.log('funguju!');

const zadanaUrovenHTML = Number(Math.round(prompt("Zadej úrovni svých dovední v HTML na škále od 0 - 100")))
console.log(zadanaUrovenHTML)

const HTMLHodnota = document.getElementById('skill1') // - najdu konkrétní element dle ID
const HTMLValue = document.querySelector('#skill__value') //tady chci najít element pod ID
const HTMLtext = HTMLValue.textContent
HTMLValue.textContent = zadanaUrovenHTML 







/* -> OSTATNÍ CSS + JS
const zadanaUrovenCSS = Number(prompt("Zadej úrovni svých dovední v CSS na škále od 0 - 100"))
const zadanaUrovenJS = Number(prompt("Zadej úrovni svých dovední v JS na škále od 0 - 100"))
*/
