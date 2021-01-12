// let title = document.getElementById("title");
// console.log(title);
// title.addEventListener("click", function () {
//   title.innerHTML = "hello mahdi";
// });

// declration des variables
let btnPlus = Array.from(document.querySelectorAll(".plus-btn"));
let qte = Array.from(document.querySelectorAll(".qte"));
let btnMoins = Array.from(document.querySelectorAll(".fa fa-minus-circle"));
let deleteBtn  = Array.from(document.getElementsByClassName(".fa fa-trash"));

let deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"))
let cards = Array.from(document.querySelectorAll(".card"))
let plusBtns = Array.from(document.querySelectorAll(".plus-btn"))
let minusBtns = Array.from(document.querySelectorAll(".minus-btn"))
let totalPrice = document.querySelector(".total-price")


// Remove button Part
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function () {
        // deleteBtns[i].parentNode.parentNode.parentNode.remove()
        cards[i].remove()
        total()
    })
}

// Add button
for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click", function () {
        plusBtn.nextElementSibling.innerHTML++;
        total()
    })
}


// Minus button
for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click", function () {
        minusBtn.previousElementSibling.innerHTML > 0 ? minusBtn.previousElementSibling.innerHTML-- : null;
        total()
    })

}


// Total price
function total() {
    let quantities = Array.from(document.querySelectorAll(".qute"))
    let unitPrices = Array.from(document.querySelectorAll(".unit-price"))
    let s = 0;
    for (let i in unitPrices) {
        s = s + (+unitPrices[i].innerHTML) * (+quantities[i].innerHTML)
    }
    totalPrice.innerHTML = s
}

//toggle heart
function heart(x) {
  x.classList.toggle("fa-heart-down");
}

