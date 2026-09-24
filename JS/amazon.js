import { cart, updateCart } from '../data/cart.js';
import { products } from '../data/products.js';

let productHtml = "";
products.forEach((product) => {
    productHtml += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">

            <div class="product-rating-count link-primary">
             ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
           ${product.priceCents / 100}
          </div>

          <div class="product-quantity-container">
            <select class = "selectedQuantity">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart" >
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button"
          data-product-id = "${product.id}"
          data-product-name= "${product.name}">
            Add to Cart
          </button>
        </div>`

});
document.querySelector('.products-grid').innerHTML = productHtml;

document.querySelectorAll('.add-to-cart-button').forEach((button) =>{
  
  button.addEventListener('click', (btn)=>{
    let selectedQuantity = 1;

    const productContainer = button.closest(".product-container")
    selectedQuantity = productContainer.querySelector(".selectedQuantity").value;
    const addedMessage = productContainer.querySelector(".added-to-cart")

    addedMessage.classList.add("added-to-cart-Message");
    setTimeout(function(){
    addedMessage.classList.remove("added-to-cart-Message")
                          },2000);
    let selectedNumber = Number(selectedQuantity);

    const clickedId = button.dataset.productId;
   let clickedProduct;
     clickedProduct = products.find(p =>{
      return p.id === clickedId;
    })
       let cartItem = cart.find(item =>item.productId===clickedProduct.id);
        if(cartItem){
          cartItem.quantity += selectedNumber;
          
        }
        else{
          cart.push({
            productId : clickedId,
            quantity: selectedNumber
          })
        }
        updateCart();
        console.log(cart);
        

            
  })

})

