// Search and modify
let links = document.querySelectorAll('a');
links[0].textContent = 'Mozilla Developer Network';
links[0].href = 'https://developer.mozilla.org';
links[1].textContent = 'Google';
links[1].href = 'https://google.com';
links[2].textContent = 'IBM';
links[2].href = 'https://ibm.com';
// Add new element
const section = document.querySelector('section');

for (let i = 0; i < 100; i++) {
    const para = document.createElement('p');
    para.textContent = 'We hope you enjoyed the ride.';
    para.classList.add('new-para');
    section.appendChild(para);
}

// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach( (p, idx) => {
//     const text = document.createTextNode(' — the premier source for web development knowledge.');
//     setTimeout( _ => p.appendChild(text), 1000 * idx);    
// });
$('p').append(' — the premier source for web development knowledge.');


// find img
const dinoImg = document.querySelector('img');
// find last p
const lastPara = document.querySelector('p:last-of-type');
// last p appendChild img
lastPara.appendChild(dinoImg);

dinoImg.parentNode.removeChild(dinoImg);


section.innerHTML += '<h1>Hello World</h1>';


// const button = document.querySelector('button');
// button.addEventListener('click', buttonClick);
// // button.onclick = buttonClick; - Not recommended
// function buttonClick() {
//     $('h1').toggle(500);
// }


const firstLink = document.querySelector('a');
firstLink.addEventListener('click', e => {
    e.preventDefault();
    alert('Please stay here');
});


const display = document.querySelector('.calc .display');

document.querySelectorAll('.calc .num, .calc .op')
    .forEach( btn => btn.addEventListener('click', numOperClick));

function numOperClick(e) {
    display.value += e.target.innerText;
}

document.querySelector('.calc .eq')
    .addEventListener('click', function(){
        display.value = eval(display.value);        
    })