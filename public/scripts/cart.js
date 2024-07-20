
// after adding to cart message
function showMessage() {
    var msg = document.querySelectorAll('.message');
    msg.forEach(messg => {
        messg.style.display = "block";
    });
    setTimeout(closeMessage, 6000);

}


function closeMessage() {
    var message = document.querySelector('.message');
    message.style.display = "none";
    setTimeout(closeMessage, 3000);
}


// cart window
function openWindow(iconToOpen) {
    document.getElementById(iconToOpen).style.display = "flex";
    if (iconToOpen === 'overlayCart') {
        viewCart();

    }
}


// Cart functions
function addToCart(itemID, week) {
    var itemModal = document.getElementById('detailsModal' + itemID + week);
    var allItems = document.querySelectorAll('.modal');
    var cart = document.getElementById('cartContent');
    var cList = document.getElementById('orderSumm');

    if (cList.children.length === 0) {
        cart.textContent = "";
    }

    allItems.forEach(item => {
        if (item === itemModal) {
            var itemName = item.querySelector('#itemName').textContent;

            var itemImgSrc = item.querySelector('img').getAttribute('src');

            var header = document.getElementById('headerC');
            header.style.display = "flex";



            var listItem = document.createElement('div');
            listItem.classList.add("list-of-items");



            var removeIcon = document.createElement('i');
            removeIcon.className = "fa-solid fa-circle-xmark fa-lg";
            removeIcon.classList.add('remove-icon');
            removeIcon.onclick = function () {
                removeFromCart(itemName);
            }

            var itemImg = document.createElement('img');
            itemImg.src = itemImgSrc;
            itemImg.classList.add('cart-item-img');


            var itemNameElement = document.createElement('span');
            itemNameElement.textContent = itemName;
            itemNameElement.classList.add('item-name');

            var quantityDiv = document.createElement('div');
            quantityDiv.classList.add('quantity-cart');

            var plusButton = document.createElement('button');
            plusButton.classList.add('cart-plusButton');
            plusButton.innerHTML = '<i class="fa-solid fa-plus fa-lg"></i>';
            plusButton.onclick = function () {
                incrementQuantity(quantityInput);
            }

            var quantityInput = document.createElement('input');
            quantityInput.classList.add('input');
            quantityInput.type = 'text';
            quantityInput.name = 'name';
            quantityInput.value = '1';

            var minusButton = document.createElement('button');
            minusButton.classList.add('cart-minusButton');
            minusButton.innerHTML = '<i class="fa-solid fa-minus fa-lg"></i>';
            minusButton.onclick = function () {
                decrementQuantity(quantityInput);
            }


            quantityDiv.appendChild(minusButton);
            quantityDiv.appendChild(quantityInput);
            quantityDiv.appendChild(plusButton);


            listItem.appendChild(removeIcon);
            listItem.appendChild(itemImg);


            // Append the item name text content, not the element itself
            listItem.appendChild(document.createTextNode(itemName));

            listItem.appendChild(quantityDiv);

            cList.appendChild(listItem);
        }
    });
    showMessage();
}


function incrementQuantity(input) {
    var currValue = parseInt(input.value);
    input.value = currValue + 1;
}


function decrementQuantity(input) {
    var currValue = parseInt(input.value);
    if (currValue > 1) {
        input.value = currValue - 1;
    }
}


function removeFromCart(itemName) {
    var cartList = document.querySelectorAll('#orderSumm .list-of-items');

    cartList.forEach(item => {
        var name = item.querySelector('img').nextSibling.textContent;
        if (name === itemName) {
            item.remove();
        }
    });
    var cList = document.getElementById('orderSumm');
    if (cList.children.length === 0) {
        var cart = document.getElementById('cartContent');
        cart.innerHTML = '<i class="fa-solid fa-cart-shopping fa-xl" style="color: #147186;"></i> Your Cart Is Empty,<br> Please Add Items.';

        var header = document.getElementById('headerC');
        header.style.display = "none";
    }
}


function viewCart() {

    var selectedItem = document.querySelectorAll('#itemName');
    selectedItem.forEach(item => {
        item.style.display = "block";
    });

}
