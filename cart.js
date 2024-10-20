function updateCart() {
    const quantity1 = parseInt(document.getElementById('quantity1').value);
    const quantity2 = parseInt(document.getElementById('quantity2').value);
    const price1 = 650;
    const price2 = 550;
    const subtotal1 = price1 * quantity1;
    const subtotal2 = price2 * quantity2;
    document.getElementById('subtotal1').innerText = $${subtotal1};
    document.getElementById('subtotal2').innerText = $${subtotal2};
    const cartSubtotal = subtotal1 + subtotal2;
    document.getElementById('cartSubtotal').innerText = $${cartSubtotal};
    document.getElementById('cartTotal').innerText = $${cartSubtotal};
}