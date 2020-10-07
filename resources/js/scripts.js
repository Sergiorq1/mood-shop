import data from './data.js';

const itemsContainer = document.getElementById('items');

// the length of our data determines how many times this loop goes around
data.forEach((mood) => {
  // create a new div element and give it a class name
  let newDiv = document.createElement('div');
  newDiv.className = 'item';

  // create an image element
  let img = document.createElement('img');
  // this will change each time we go through the loop. Can you explain why?
  img.src = mood.image;
  img.width = 300;
  img.height = 300;

  let p_desc = document.createElement('P');
  p_desc.innerText = mood.desc;

  let p_price = document.createElement('P');
  p_price.innerText = mood.price;

  let button = document.createElement('button');
  button.id = mood.name;
  button.dataset.price = mood.price;
  button.innerHTML = 'Add to Cart';

  // Add the image to the div
  newDiv.appendChild(img);
  newDiv.appendChild(p_desc);
  newDiv.appendChild(p_price);
  newDiv.appendChild(button);

  itemsContainer.appendChild(newDiv);
});

for (let i = 0; i < data.length; ++i) {}
