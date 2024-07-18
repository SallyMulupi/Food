import { displayItems } from './displayItems.js';
import { addEvents, handleAddress } from './utilities.js';
import { cartToggle } from './cart.js';

displayItems();
addEvents();

document.getElementById('add-address').addEventListener('click', handleAddress);
document.getElementById('m-add-address').addEventListener('click', handleAddress);
document.getElementById('cart-plus').addEventListener('click', cartToggle);
document.getElementById('m-cart-plus').addEventListener('click', cartToggle);

window.onresize = window.onload = function() {
    const size = window.screen.width;
    if (size < 800) {
        const cloneFoodItems = document.getElementById('food-items').cloneNode(true);
        const cloneCartPage = document.getElementById('cart-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('main-cart').after(cloneCartPage);
        addEvents();
    }
}
