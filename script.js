//  NAVBAR JS

function myFunction(x) {
  x.classList.toggle("change");
}

function nav_toggle() {
  document.getElementById("nav_item2").classList.toggle("toggle");
}

// FUNCTION TO CREATE CARDS

function createCards(sectionName, imgSrcs, headings, texts) {
  const container = document.getElementById(sectionName);

  for (let i = 0; i < headings.length; i++) {
    const cart = document.createElement("div");
    cart.className = "cart";
    cart.setAttribute("data-aos", "fade-down");

    const img = document.createElement("img");
    img.setAttribute("loading", "lazy");
    img.src = `images/${imgSrcs[i]}.jpg`;
    cart.appendChild(img);

    const heading = document.createElement("div");
    heading.className = "cart-heading";
    heading.textContent = headings[i];
    cart.appendChild(heading);

    const text = document.createElement("div");
    text.className = "cart-text";
    text.textContent = texts[i];
    cart.appendChild(text);

    const price = document.createElement("div");
    price.className = "cart-price";
    price.textContent = "Details >";
    price.addEventListener('click', (e)=>{
      let image_src= e.target.parentElement.children[0].src;
      let product_name= e.target.parentElement.children[1].textContent;
      let description= e.target.parentElement.children[2].textContent;
      console.log(description);
      
document.documentElement.style.overflow = "hidden";
document.getElementById("modal").style.display="block";
document.getElementById("modal_img").src=image_src;
document.getElementById("modal_name").textContent=product_name;
document.getElementById("modal_desc").textContent=description;

    });
    cart.appendChild(price);

    const buttonLink = document.createElement("a");
    buttonLink.href = "https://api.whatsapp.com/send?phone=923302713587"; // Replace this with your actual button link
    buttonLink.className = "cart_button";
    buttonLink.textContent = "Buy Now";
    cart.appendChild(buttonLink);

    container.appendChild(cart);
  }
}

// CAKE IMAGES SRC
const cake_images = [
  "cake1",
  "cake2",
  "cake3",
  "cake4",
  "cake5",
  "cake6",
  "cake7",
  "cake8",
  "cake9",

  // Add more image paths here for more carts
];

// CAKE NAMES

const cake_names = [
  "Bear Cake",
  "Cream Cake",
  "Flower Cake",
  "Ceremony Cake",
  "Mehndi Cake",
  "Birthday Cake",
  "Anniversary Cake",
  "Boss Baby Cake",
  "Barbie Cake",
  // Add more headings here for more carts
];

// CAKE DESCRIPTIONS

const cake_descriptions = [
  "Heart shape bear cake with the classic charm of flavor.",
  "Cream birthday cake with the sweet flavor of strawberry.",
  "Rose theme birthda cake with the delicious charm of flavor.",
  "Aqiqa theme ceremony cake with the Sugary charm of flavor.",
  "Mehndi theme cake with the Sugary charm of pineapple flavor.",
  "1st birthday theme cake with the Sugary charm of flavor.",
  "6th Anniversary theme cake with the delicious charm of flavor.",
  "Boss Baby theme cake with the Sugary charm of flavor.",
  "Barbie theme cake with the Sugary charm of strawberry flavor.",
  // Add more texts here for more carts
];

// CAKE PRICES

// const cake_prices = [
//   "2000rs",
//   "1000rs",
//   "2500rs",
//   "3000rs",
//   "1900rs",
//   "2200rs",
//   // Add more prices here for more carts
// ];

// CALLING FUNTION TO CREATE CARDS

createCards("cakes", cake_images, cake_names, cake_descriptions);

// CUP CAKES IMAGES SRC

const cup_cakes_images = [
  "cup1",
  "cup2",
  "cup3"

  // Add more image paths here for more carts
];

// CUP CAKES NAMES

const cup_cakes_names = [
  "Promotion Cupcake",
  "Bithday Cupcake",
  "Baby Cupcake"
  // Add more headings here for more carts
];

// CUP CAKES DESCRIPTIONS

const cup_cakes_descriptions = [
  "Customized Promotion theme Cupcake with the punch of flavors.",
  "Birthday theme Cupcake with the punch of creamy flavor.",
  "Baby theme fondant Cupcake with the punch of delicious flavor."
  // Add more texts here for more carts
];

// CUP CAKES PRICES

const cup_cakes_prices = ["800rs", "240rs", "400rs"];

// CALLING FUNTION TO CREATE CARDS
createCards(
  "cup_cakes",
  cup_cakes_images,
  cup_cakes_names,
  cup_cakes_descriptions,
  cup_cakes_prices
);


