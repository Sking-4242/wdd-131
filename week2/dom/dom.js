let title = document.querySelector('h1');
console.log(title.textContent);

title.textContent = 'Web Page Components';

let topic_title = document.getElementById('topics');

topic_title.style.color = 'red';

let list = document.querySelector('.list');
list.style.border = '3px solid black';

let para = document.querySelector('p');

para.classList.add('background'); 

let image = document.querySelector('img');

image.setAttribute('src', 'https://github.com/Sking-4242/wdd-131/blob/3ab957f09fbb474b790d211abd6530c05c6d5612/week2/dom/logo.png');


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.querySelector('#html').style.color = 'blue';
})

const newPara = document.createElement('p');
newPara.innerText = 'Added with JavaScript';
document.body.appendChild(newPara);
