// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(response => {

const cards2 = document.querySelector('.title')
cards2.append(tabMaker(response.data))
console.log('response',response);

})


.catch(error =>{
  console.log(error)
})


 

function tabMaker(obj){
  
  const tabby = document.createElement('div');
  
  tabby.textContent = `${obj.topics}`


  //tabby.classList.add("tabs");
 // tabby.classList.add("topics");
  tabby.classList.add("tab");
  //tabby.classList.add("active-tab");
  
  return tabby;
}
