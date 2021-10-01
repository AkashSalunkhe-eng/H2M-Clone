let productId = JSON.parse(localStorage.getItem("sibleProduct"));
let displayDiv = document.getElementById("items");
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
  let img = document.createElement("img");
  (img.src = imageA), imageB;

  let p = document.createElement("p");
  p.textContent = productDescription;

  displayDiv.append(img, p);
}
