let productId = JSON.parse(localStorage.getItem("sibleProduct"));
let displayDiv = document.getElementById("items");
let right_bar = document.querySelector(".right_side_bar");
let sneekPeek = document.querySelector(".product_sneek_peek");

let cartbtn = document.querySelector(".addtocart");

let cartItem = JSON.parse(localStorage.getItem("cartItems")) || [];

async function fetchProductDetails() {
  let response = await fetch("./product.json");

  let allproducts = await response.json();

  let allproduct = allproducts.clothing;
  console.log(allproduct);
  let singleProduct = allproduct[productId - 1];
  console.log(singleProduct);
  sdisplayProduct(singleProduct);
}
fetchProductDetails();

function sdisplayProduct(item) {
  let { title, price, imageA, imageB, productDescription } = item;
  console.log(title, price, imageA, imageB);
  let img1 = document.createElement("img");
  img1.src = imageA;

  let img2 = document.createElement("img");
  img2.src = imageB;
  let p = document.createElement("p");
  p.textContent = productDescription;
  displayDiv.append(img1, img2);

  //Right side bar
  let h3 = document.createElement("h3");
  h3.textContent = title;

  let h4 = document.createElement("h4");
  let pr = Math.ceil(+item.price * 70);
  h4.innerHTML = `Rs. ${pr}`;

  right_bar.prepend(h3, h4);

  // small smage for sneek pick

  let s_img1 = document.createElement("img");
  s_img1.src = imageA;

  let s_img2 = document.createElement("img");
  s_img2.src = imageB;

  sneekPeek.append(s_img1, s_img2);

  cartbtn.addEventListener("click", function () {
    // console.log(item);
    cartItem.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  });
}
