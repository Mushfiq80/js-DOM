const placeList = document.getElementById('place-list');

const li = document.createElement('li');
li.innerText = 'Jhao bon';

placeList.appendChild(li);

// 1. where to add
const MainContainer = document.getElementById('main-container');

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Salad';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Coke';
ul.appendChild(li3);

section.appendChild(ul);

MainContainer.appendChild(section);

// set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML= `
<h1>My Dress Section </h1>
<ul>
    <li>Shirt</li>
    <li>Pant</li>
    <li>Suit</li>
</ul>
`
MainContainer.appendChild(sectionDress);
