let productList = document.querySelector(".product-list");
let searchInput = document.querySelector("#searchInput");
let categoryFilter = document.querySelector("#categoryFilter");
let sortSelect = document.querySelector("#sortSelect");

let products = [
  {
    pImage: "/javascriptPart2/productImages/book1.jpg",
    altTextImg: "book",
    pName: "Atomic Habits",
    pPrice: 350,
    pCategory: "Books",
  },
  {
    pImage: "/javascriptPart2/productImages/cloth1.jpg",
    altTextImg: "cloth",
    pName: "Jacket",
    pPrice: 1000,
    pCategory: "Clothing",
  },
  {
    pImage: "/javascriptPart2/productImages/laptop.jpg",
    altTextImg: "laptop",
    pName: "MacBook Pro",
    pPrice: 200000,
    pCategory: "Electronics",
  },
  {
    pImage: "/javascriptPart2/productImages/tshirt.jpg",
    altTextImg: "T-shirt",
    pName: "Blue Vest",
    pPrice: 500,
    pCategory: "Clothing",
  },
  {
    pImage: "/javascriptPart2/productImages/mobile.jpg",
    altTextImg: "Mobile",
    pName: "Iphone 15",
    pPrice: 150000,
    pCategory: "Electronics",
  },
  {
    pImage: "/javascriptPart2/productImages/book2.jpg",
    altTextImg: "book",
    pName: "Power of Subconscious Mind",
    pPrice: 450,
    pCategory: "Books",
  },
  {
    pImage: "/javascriptPart2/productImages/jens.jpg",
    altTextImg: "Jens",
    pName: "Blue Jens",
    pPrice: 2500,
    pCategory: "Clothing",
  },
];

function addToCard({ pImage, altTextImg, pName, pPrice, pCategory }) {
  let productCard = document.createElement("div");
  productCard.classList.add("product-card");

  let productImage = document.createElement("div");
  productImage.classList.add("productImage");

  let img = document.createElement("img");
  img.src = pImage;
  img.alt = altTextImg;
  productImage.append(img);

  let title = document.createElement("h3");
  title.classList.add("product-name");
  title.textContent = pName;

  let price = document.createElement("p");
  price.classList.add("product-price");
  price.textContent = "Rs. " + pPrice;

  let category = document.createElement("p");
  category.classList.add("product-category");
  category.textContent = pCategory.toLowerCase();

  productCard.append(productImage, title, price, category);
  return productCard;
}

function renderProducts() {

  let search = searchInput.value.toLowerCase().trim();
  let category = categoryFilter.value;
  let sort = sortSelect.value;

  let filtered = [...products];

  if (category !== "all") {
    filtered = filtered.filter((p) => p.pCategory.toLowerCase() === category);
  }

  if (search !== "") {
    filtered = filtered.filter((p) => p.pName.toLowerCase().includes(search));
  }

  if (sort === "priceLowHigh") filtered.sort((a, b) => a.pPrice - b.pPrice);
  else if (sort === "priceHighLow")
    filtered.sort((a, b) => b.pPrice - a.pPrice);
  else if (sort === "nameAsc")
    filtered.sort((a, b) => a.pName.localeCompare(b.pName));
  else if (sort === "nameDesc")
    filtered.sort((a, b) => b.pName.localeCompare(a.pName));

  productList.innerHTML = "";
  filtered.forEach((p) => productList.appendChild(addToCard(p)));
}

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
sortSelect.addEventListener("change", renderProducts);

// initial render
renderProducts();
