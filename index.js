console.log('funguju!');
/*
//Jednotlivé dovednosti zvlášť

const zadanaUrovenHTML = Number(Math.round(prompt("Zadej úrovni svých dovedností v HTML na škále od 0 - 100")))
console.log(zadanaUrovenHTML)

const HTMLHodnota = document.getElementById('skill1') 
const HTMLValue = document.querySelector('.skill__value') 
HTMLValue.textContent = zadanaUrovenHTML + " / 100"
const HTMLBar = document.querySelector('.skill__progress')
HTMLBar.style.width = zadanaUrovenHTML + "%"


const zadanaUrovenCSS = Number(Math.round(prompt("Zadej úrovni svých dovedostí v CSS na škále od 0 - 100")))
console.log(zadanaUrovenCSS)

const CSSHodnota = document.getElementById('skill2') 
const CSSValue = document.querySelector('.skill__value') 
CSSValue.textContent = zadanaUrovenCSS + " / 100"
const CSSBar = document.querySelector('.skill__bar')
const CSSBarr = document.querySelector('.skill__progress')
CSSBarr.style.width = zadanaUrovenCSS + "%"


const zadanaUrovenJS = Number(Math.round(prompt("Zadej úrovni svých dovedností v JavaScriptu na škále od 0 - 100"))) 
console.log(zadanaUrovenJS)

const JSHodnota = document.getElementById('skill3') 
const JSValue = document.querySelector('.skill__value') 
JSValue.textContent = zadanaUrovenJS + " / 100" 
const JSBar = document.querySelector('.skill__progress') 
JSBar.style.width = zadanaUrovenJS + "%"
*/

//Funkce
const updateSkill = (idElement, level) => {
    const hodnota = document.getElementById(idElement) 
    const value = document.querySelector('.skill__value') 
    value.textContent = level + " / 100"
    const bar = document.querySelector('.skill__progress')
    bar.style.width = level + "%"
}

updateSkill(skill3, 74)
