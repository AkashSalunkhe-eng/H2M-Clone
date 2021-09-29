let div = document.getElementById("display");

async function showProduct() {
  let response = await fetch("./product.json");

  let allproducts = await response.json();

  console.log(allproducts);
  let data = allproducts.clothing;
  data.forEach(function (item) {
    console.log(item);

    let divison = document.createElement("div");
    // heading.textContent = item.title
    // heading.setAttribute('class','item-heading')
    let img = document.createElement("img");
    img.src = item.imageA;
    img.setAttribute("class", "productImage");
    img.addEventListener("mouseover", function addEffect() {
      img.src = item.imageB;
    });
    img.addEventListener("mouseleave", function () {
      img.src = item.imageA;
    });

    let anchor = document.createElement("p");
    anchor.addEventListener("click", function () {
      window.location.assign("https://www.flipkart.com/");
    });
    anchor.textContent = item.title;

    let p = document.createElement("p");
    p.textContent = `Price ${item.price}`;

    divison.append(img, anchor, p);

    div.append(divison);
  });
}

showProduct();
