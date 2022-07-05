window.onclick = function () {
    let customer2 = document.getElementsByClassName('name')[0];
    let customer = document.getElementById('customer')[0];
    customer2.oninput = function () {
        customer.innerText = this.value;
    }
}