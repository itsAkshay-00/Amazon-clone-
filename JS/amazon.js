// const products = [
//     {
//         image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//         name: 'Black Nigger',
//         rating: {
//             stars: 4.5,
//             count: 87
//         },
//         priceCents: 1090,
//     },
//     {
//         image: 'images/products/intermediate-composite-basketball.jpg',
//         name: 'Intermediate Size Basketball',
//         rating: {
//             stars: 4,
//             count: 127
//         },
//         priceCents: 2095,
//     },
//     {
//         image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//         name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//         rating: {
//             stars: 4.5,
//             count: 56
//         },
//         priceCents: 799,
//     },
//     {
//     image: "images/products/black-2-slot-toaster.jpg",
//     name: "2 Slot Toaster - Black",
//     rating: {
//       stars: 5,
//       count: 2197
//     },
//     priceCents: 1899,
//   },
//   {
//     image: "images/products/6-piece-white-dinner-plate-set.jpg",
//     name: "6 Piece White Dinner Plate Set",
//     rating: {
//       stars: 4,
//       count: 37
//     },
//     priceCents: 2067,
   
//   },
//   {
//     image: "images/products/6-piece-non-stick-baking-set.webp",
//     name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
//     rating: {
//       stars: 4.5,
//       count: 175
//     },
//     priceCents: 3499,
   
//   },
//   {
//     image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
//     name: "Plain Hooded Fleece Sweatshirt",
//     rating: {
//       stars: 4.5,
//       count: 317
//     },
//     priceCents: 2400,
//   }
   
    
// ];
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

    const clickedId = button.dataset.productId;
    const productContainer = button.closest(".product-container")
    selectedQuantity = productContainer.querySelector(".selectedQuantity").value;
    let selectedNumber = Number(selectedQuantity);


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
        
            
  })

})

