const thumbnails = document.getElementsByClassName('thumbnails');
const mainImage = document.getElementById('main-image');

const thumbImages = ['image-product-1-thumbnail.jpg','image-product-2-thumbnail.jpg','image-product-3-thumbnail.jpg','image-product-4-thumbnail.jpg'];

// Loop through each thumbnail and add event listener
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", (event) => {
        let source = event.target.src;
        let filename = source.replace('-thumbnail','');
        mainImage.setAttribute("src", filename);
    });
}
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const count = document.getElementById('count');

minus.addEventListener("click",()=>{
    if(parseInt(count.innerHTML)>=1){
        let updatedCount = parseInt(count.innerHTML)-1;
        count.textContent = updatedCount;
    }        
});

plus.addEventListener("click",()=>{
    let updatedCount = parseInt(count.innerHTML)+1;
    count.textContent = updatedCount;     
});

const addtoCart = document.getElementById('addToCartBtn');
const price = document.getElementById('price');
const priceValue = price.innerHTML.substring(1);
const mrp = document.getElementById('mrp');
const quantity = document.getElementById('quantity');
const totalPrice = document.getElementById('totalPrice');

const productName = document.getElementById('productName');
const cartItems = [];
const checkout = document.getElementById('checkout');
// const cartDetails = document.getElementById('cart-details');
addtoCart.addEventListener("click",()=>{
   

    let cartDetails = document.createElement('div');
    cartDetails.setAttribute('class', 'cart-details');
    cartContainer.append(cartDetails);
    

    let cartImage = document.createElement('img');
    cartImage.src = "./images/image-product-1-thumbnail.jpg";
    cartImage.setAttribute('alt', 'Shoe image');
    cartImage.setAttribute('class' , 'cart-image');
    cartDetails.append(cartImage);
    

    

    let cartProductName = document.createElement('span');
    cartProductName.textContent = productName.innerHTML;
    
    
    let productPrice = document.createElement('ul');
    productPrice.setAttribute('class', 'price-format');
    let unitPrice = document.createElement('li');
    unitPrice.setAttribute('id','mrp');
    unitPrice.textContent = `$`+ priceValue;
    let qty = document.createElement('li');
    qty.setAttribute('id','quantity');
    qty.textContent= `X`+ count.innerHTML;
    let finalPrice = document.createElement('li');
    finalPrice.setAttribute('id','totalPrice');
    finalPrice.textContent=`$`+(priceValue * parseInt(count.innerHTML));
    productPrice.appendChild(unitPrice);
    productPrice.appendChild(qty);
    productPrice.appendChild(finalPrice);
    // 
    

    let cartInfo = document.createElement('div');
    cartInfo.setAttribute('class', 'cart-info');
    cartInfo.appendChild(cartProductName);
    cartInfo.appendChild(productPrice);
    cartDetails.append(cartInfo);


    let removeButton = document.createElement('img');
    removeButton.src='./images/icon-delete.svg';
    removeButton.setAttribute('id', 'delete');
    cartDetails.append(removeButton);

//    let checkButton = document.createElement('button');
//    checkButton.setAttribute('id', 'checkout'); 
//     checkButton.textContent="checkout";
//     cartContainer.append(checkButton);
   
    let itemCount = 0;
    cartItems.push(cartDetails);
    cartItems.forEach((item)=>{
        cartContainer.appendChild(checkout,item);
        count.textContent = 0;
        itemCount++;
        const deleteIcons = item.querySelector('#delete');

        deleteIcons.addEventListener("click", (event)=>{
            const parentDiv = event.target.closest('.cart-details');
            parentDiv.remove();
            itemCount--;
            console.log(itemCount);
            if(itemCount === 0){
                checkout.style.display = 'none';
            }
            else{
                checkout.style.display = 'block';
            }
        })
    })

})
const cart = document.getElementById('cart');
const cartContainer = document.getElementById('cart-container');
cart.addEventListener("click",()=>{
    
   if(cartContainer.style.display === 'none'){
    cartContainer.style.display="block";
   }  
   else {
       cartContainer.style.display="none";
   }
});

// const deleted = document.getElementById('delete');





