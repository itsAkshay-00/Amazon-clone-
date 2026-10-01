
export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function updateCart(){
  let totalQuantity = 0;
   cart.forEach((Cart) =>{
          totalQuantity += Cart.quantity;
        })
        document.querySelector('.cart-quantity').innerText = totalQuantity;
        saveToStorage();

}
export function removeFromCart(productId){
  cart = cart.filter((cartItem) =>{
    return cartItem.productId !== productId;
  });
  saveToStorage();
}
function saveToStorage(){
localStorage.setItem('cart', JSON.stringify(cart))
}
