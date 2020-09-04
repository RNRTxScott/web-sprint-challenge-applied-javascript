// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
const bigHead = document.createElement('div');
const dateTime = document.createElement('span');
const bigTitle = document.createElement('h1');
const bigTemp = document.createElement('span');


bigHead.classList.add('header');
dateTime.classList.add('span');
dateTime.classList.add('date');
bigTitle.classList.add('h1');
bigTemp.classList.add('span');
bigTemp.classList.add('temp');

bigHead.append(dateTime);
bigHead.append(bigTitle);
bigHead.append(bigTemp);

dateTime.textContent = 'March 28, 2020';
bigTitle.textContent = 'Lambda Times';
bigTemp.textContent = '98°';

return bigHead;

}
const entryPoint1 = document.querySelector('body');
// console.log(entryPoint1);
entryPoint1.append(Header());