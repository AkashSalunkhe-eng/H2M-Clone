let div = document.getElementById("display");

async function fetchProductDetails() {
  let response = await fetch("./product.json");

  let allproducts = await response.json();

  console.log(allproducts);

  let data = allproducts.clothing;
  showProduct(data);
}
fetchProductDetails();

function showProduct(data) {
  data.forEach(function (item) {
    // console.log(item);

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
    anchor.setAttribute("class", "product_item_title");
    anchor.addEventListener("click", function () {
      //console.log(item.id);
      console.log(item.id);
      localStorage.setItem("sibleProduct", JSON.stringify(item.id));
      window.location.assign("./card.html");
    });
    anchor.textContent = item.title;

    let p = document.createElement("p");
    p.textContent = `Price ${item.price}`;

    let newarrival = document.createElement("newarrival");
    newarrival.setAttribute("class", "newarrival");
    newarrival.textContent = ` ${item.fashionChoice}`;

    divison.append(img, anchor, p, newarrival);

    div.append(divison);
  });
}

async function handleSorting() {
  let val = document.getElementById("sortings").value;
  div.innerHTML = null;
  let response = await fetch("./product.json");

  let allproducts = await response.json();

  console.log(allproducts);

  let data = allproducts.clothing;

  if (val == "low") {
    data.sort(function (a, b) {
      return a.price - b.price;
    });
    showProduct(data);
  } else if (val == "high") {
    data.sort(function (a, b) {
      return b.price - a.price;
    });

    showProduct(data);
  } else {
    showProduct(data);
  }
}
