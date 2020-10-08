const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')

itemList.innerHTML = '<li> Hello World</li>'
console.log(itemList)
const itemsContainer = document.getElementById("items")
import data from "./data.js"

// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    // create an image element
    let img = document.createElement('img');
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image
    img.width = 300
    img.height = 300

    // Add the image to the div
    newDiv.appendChild(img)

    console.log(img)
    itemsContainer.appendChild(newDiv)

    // create a paragraph element for a description
    let desc = document.createElement('P')
    // give the paragraph text from the data
    desc.innerText =data[i].desc
    // append the paragraph to the div
    newDiv.appendChild(desc)
    // do the same thing for price
    let price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)
    let button = document.createElement('button')
    button.id = data[i].name

    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
    itemsContainer.appendChild(newDiv)
}
const = cart []

function addItem(name, price, qty) {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].name === name) {
        cart[i].qty += 1
        return
        }
  }
  const item = {name, price, qty: 1}
    cart.push(item)
}

function showItems() {
  const qty = getQty()
  cortQty.innerHTML = `You have ${qty} items in your cart.`
  let itemStr = ''
  for (let i = 0; i < cart.length; i += 1) {
    itemStr += `<li>${name} $${price} x ${qty} = ${qty * price}</li>`
  }
  itemList.innerHTML = itemStr
  cartTotal.innerHTML = `Total in cart: $${getTotal()}`
  }

  console.log(`Total in cart: $${getTotal()}`)
}

// Get Quantity.
function getQty() {
  let qty = 0
  for (let i = 0; i < cart.length; i += 1) {
    qty += cart[i].qty
  }
  return qty
}

// Get Total.
function getTotal() {
  let total = 0
  for (let i = 0; i < cart.length; i += 1) {
    total += cart[i].price * cart[i].qty
  }
  return total.toFixed(2)
}

//addItem("Apple", 0.99, 3)
//addItem("Orange", 1.29, 4)

showItems()