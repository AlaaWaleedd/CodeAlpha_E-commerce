

// cart window
function openWindow(iconToOpen) {
    document.getElementById(iconToOpen).style.display = "flex";
    if (iconToOpen === 'overlayCart') {
        viewCart();

    }
}

function viewCart() {

    var selectedItem = document.querySelectorAll('#itemName');
    selectedItem.forEach(item => {
        item.style.display = "block";
    });

}



function closeWindow(iconToClose) {
    document.getElementById(iconToClose).style.display = "none";
}


