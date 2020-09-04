// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
const cards1 = document.querySelector('.cards-container')
const elementsData = Object.values(response.data.articles);
    elementsData.forEach((card) => {
      card.forEach((article) => {
        cards1.appendChild(cardMaker(article));
      })
    })
    cards1.addEventListener('click', () => {
        console.log(elementsData.headLine);
    })
})


.catch(error =>{
  console.log(error)
})


function cardMaker(obj){
  
    const card4 = document.createElement('div');
    const headLine = document.createElement('div');
    const writerAuth = document.createElement('div');
    const imageUpCon = document.createElement('div');
    const imageUp = document.createElement('img');
    const nameAuthor = document.createElement('span');
    


card4.classList.add('.card');
writerAuth.classList.add('.author');
nameAuthor.classList.add('span');
/*
    card4.classList.add('card');
    card4.classList.add(".cards-container");
   headLine.classList.add('.headline');
   imageUpCon.classList.add('.img-container');
   imageUp.classList.add('.img-container');
   nameAuthor.classList.add('span');
   */

  
   headLine.textContent = obj.headline;
    imageUp.src = obj.authorPhoto;
nameAuthor.textContent = obj.authorName;
  
    card4.append(headLine);
    card4.append(writerAuth);
    card4.append(nameAuthor);
    card4.append(imageUpCon);
    imageUpCon.append(imageUp);
  
    return card4;
  }

  
