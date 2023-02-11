const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    // console.log(sections);
    section.style.border = '2px solid steelblue';
    section.style.margin = '5px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}

const PlaceContainer = document.querySelector('#place-container');
PlaceContainer.style.backgroundColor = 'wheat'

const PlaceText = document.getElementById('place-container');
PlaceText.classList.add('text-center');
PlaceText.classList.remove('text-big')