const cart =[];
function updateCart(){
  let totalQuantity = 0;
   cart.forEach((Cart) =>{
          totalQuantity += Cart.quantity;
        }) 
        document.querySelector('.cart-quantity').innerText = totalQuantity;

}