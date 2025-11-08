// Menu data
const menuData = {
    hotDrinks: [
        { name: "Espresso", description: "", price: "$1.00", img: "imgs/items/Espresso.png" },
        { name: "Double Espresso", description: "", price: "$1.50", img: "imgs/items/Espresso.png" },
        { name: "Sip & Snap", description: "A bold shot of espresso served in a fully edible mug", price: "$1.50", img: "imgs/items/Espresso.png" },

        { name: "Latte", description: "Coffee with steamed milk.", price: "$2.50", img: "" },
         { name: "White Latte", description: "", price: "$3.50", img: "" },
        { name: "Spanish Latte", description: "", price: "$3.50", img: "" },
        { name: "Mocha Latte", description: "", price: "$3.50", img: "imgs/items/mocca_hot.jpeg" },
        { name: "Flavored Latte", description: "", price: "$3.50", img: "" },
        { name: "Flat white", description: "", price: "$3.00", img:"" },
        { name: "Nescafe ", description: "coffemate/ milk /nestle", price: "$1.50", img: "" },
        { name: "Nescafe ", description: "3in 1", price: "$1.00", img: "" },
        { name: "Cappuccino", description: "Espresso, steamed milk, foam.", price: "$3.50", img: "imgs/items/Cappuccino.png" },
        {name:"Cappuccino Turbica" ,description:"",price:"$1.50",img:""},
        { name: "Hot chocolate", description: "", price: "$3.00", img: "" },
        { name: "Cortado", description: "", price: "$2.00", img: "" },
        { name: "Matcha", description: "", price: "$3.50", img: "" },
        { name: "Vanillia Matcha", description: "", price: "$4.50", img: "" },
        { name: "Tea", description: "", price: "$1.00", img: "" },
        { name: "Zhorat", description: "", price: "$1.00", img: "" }
    ],
    coldDrinks: {
        milkshakes: [
            { name: "Chocolate Milkshake", description: "", price: "$3.50", img: "" },
            { name: "Strawberry Milkshake", description: "", price: "$3.50", img: "" },
            { name: "Oreo Milkshake", description: "", price: "$3.50", img: "" },
            { name: "lotus Milkshake", description: "", price: "$3.50", img: "imgs/items/lutes_shaks.jpeg" },
            { name: "Vanillia Milkshake", description: "", price: "$3.50", img: "imgs/items/vanila_shake.jpeg" }

        ],
        iceCoffee: [
            { name: "Iced Latte", description: "", price: "$3.00", img: "" },
            { name: "Flavored Iced Latte", description: "caramel/hazelnut/vanilla/mocha", price: "$3.50", img: "" },
            { name: "Suger Free Flavored Iced Latte", description: "careml/hazelnut/vanilla/mocha", price: "$3.50", img: "" },

            { name: "Iced Spanish", description: "", price: "$4.00", img: "" },
            { name: "Iced Americano", description: "", price: "$2.50", img: "" },
            { name: "Iced Vanilla Matcha", description: "", price: "$5.00", img: "" },
            { name: "Iced Strawberry Matcha", description: "", price: "$5.00", img: "" },
        ],
        frappes: [
            { name: "vanillia frappe", description: "", price: "$3.50", img: "" },
            { name: "White Mocha frappe", description: "", price: "$3.50", img: "" },
          //  { name: "Matcha", description: "", price: "$3.50", img: "" },
            { name: "Mocha frappe", description: "", price: "$3.50", img: "" },
            { name: "Caramel frappe", description: "", price: "$3.50", img: "" },
            { name: "Salted Caramel frappe", description: "", price: "$3.50", img: "" }

        ],
        smoothies: [
            { name: "Mango", description: "", price: "$3.00", img: "" },
            { name: "Strawberry", description: "", price: "$3.00", img: "" },
            { name: "Mango & Strawberry", description: "", price: "$3.00", img: "" },
            { name: "Blueberry", description:"" , price:"$3.50", img:""},
            { name:"Roseberry",description:"",price:"$3.50",img:""},
            { name: "Mix berries", description: "", price: "$3.50", img: "" },
            { name: "Passion Fruit", description: "", price: "$3.00", img: "" },
            { name:"Mango and Passion Friut", description: "",price:"$3.00",img:""}

        ],
        juices: [
          //  { name: "Orange", description: "", price: "$2.50", img: "" },
            { name: "Lemonade", description: "", price: "$2.50", img: "" },
            { name: "Minted Lemonade", description: "", price: "$2.50", img: "" },
            { name: "Mango", description: "", price: "$3.50", img: "" },

        ],
        water: [
            {name:"500mL Water", description: "", price: "$0.5", img: ""},
            {name:"Sparkling Water",description:"",price:"$1.00",img:"imgs/items/rim-sparkling-water.png"}
        ],
        softDrinks: [
            {name:"Pepsi", description: "", price: "$1.00", img: "imgs/items/pepsi.png"},
            {name:"Miranda", description: "", price: "$1.00", img: "imgs/items/Miranda.png"},
            {name:"7UP", description: "", price: "$1.00", img: "imgs/items/7up.png"},
            {name:"Iced Tea", description: "", price: "$1.00", img: "imgs/items/lipton-ice-tea.png"},
            {name:"Sparkling Water", description:"",price:"$1.00",img:"imgs/items/rim-sparkling-water.png"}

        ],
       energyDrinks: [
            { name: "Boom Boom Energy Drink", description: "", price: "$2.00", img: "imgs/items/boom-boom.png" },
            { name: "Boom Boom Energy Drink", description: "", price: "$2.00", img: "imgs/items/boom-boom.png" },

        ]
    },
    desserts: [
       /* { name: "Nutella Crepe", description: "", price: "5.00", img: "" },
        { name: "Oreo Crepe", description: "", price: "4.00", img: "" },
        { name: "Lotus Crepe", description: "", price: "5.50", img: "" },
        { name: "Kinder Crepe", description: "", price: "5.50", img: "" },*/
        { name: "Cookies", description: "", price: "$1.50", img: "" },
        { name: "Brownie", description: "classic brownie", price: "$1.50", img: "" },
        { name: "Brownie Extra", description: "classic brownie filled with Nutella chocolate", price: "$2.50", img: "" },

     //   { name: "Lazy Cake", description: "", price: "$2.50", img: "" },
      //  { name: "Donuts", description: "", price: "$2.50", img: "" },

    ],
    shisha: [
        { name: "Double Apple", description: "", price: "$4.00", img: "imgs/items/shisha.png" },
        { name: "Grape & Mint", description: "", price: "$4.00", img: "imgs/items/shisha.png" },
        { name: "Lemon & Mint", description: "", price: "$4.00", img: "imgs/items/shisha.png" },
        { name: "Love", description: "", price: "$4.00", img: "imgs/items/shisha.png" },
        { name: "Blueberry", description: "", price: "$4.00", img: "imgs/items/shisha.png" },
        { name: "Head Change", description: "", price: "$2.5", img: "imgs/items/shisha_head.png" }
    ],
    food: {
        sandwiches: [
            { name: "Halloumi Pesto", description: "", price: "$3.50", img: "" },
            { name: "Cheese", description: "", price: "$3.00", img: "" },
            { name: "Labne", description: "", price: "$2.00", img: "" },
            { name: "Turkey", description: "", price: "$3.50", img: "" }
        ],
        saj :[
            { name: "Zaater", description: "", price: "$1.00", img: "" },
            { name: "Cheese", description: "", price: "$1.75", img: "" },
            { name: "Cocktail", description: "", price: "$1.50", img: "" },
            { name: "Habash", description: "", price: "$2.5", img: "" },
            { name: "Mortadella", description: "", price: "$2.5", img: "" },
            { name: "Nutella", description: "", price: "$2.5", img: "" }
        ], 
        croissant :[
            { name: "Cheese", description: "plain croissant stuffed with cheese", price: "$.0", img: "" },
            { name: "Cheese and Olives", description: "plain croissant stuffed with cheese and olives", price: "$.0", img: "" },
            { name: "Mortadella", description: "plain croissant stuffed with Mortadella,cheese,iceberg,mayo,corn", price: "$.0", img: "" },
            { name: "Habash", description: "plain croissant stuffed with Habash,cheese,iceberg,mayo,corn", price: "$.0", img: "" },
            { name: "Nutella", description: "plain croissant stuffed with nutella chocolate filling", price: "$.0", img: "" },
            { name: "lotus", description: "plain croissant stuffed with lutus filling", price: "$.0", img: "" },
        ],
        tablye :[
            {name:"Tablye", description:  "Saj Zaatar/cheese + Halloum 3pcs + Labneh + Mortadella 2psc + Habash 2psc + Olives + Tomatoes + Cucumber +Tea", price: "$5.50", img: ""}
        ]
    }
};

function createCard(item) {
    const card = document.createElement("div");
    card.className = "menu-item";
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;
    img.onerror = function () {
    this.onerror = null;
    this.src = "imgs/no_img.jpg";
  };

  const details = document.createElement("div");
  details.className = "menu-details";
  details.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <p class="price">${item.price}</p>
  `;

  card.appendChild(img);
  card.appendChild(details);

  return card;
}

function renderMenu() {
    // Hot Drinks
    const hotGrid = document.getElementById("hotDrinksGrid");
    hotGrid.innerHTML = "";
    menuData.hotDrinks.forEach(item => hotGrid.appendChild(createCard(item)));

    // Cold Drinks Subsections
    Object.entries(menuData.coldDrinks).forEach(([section, group]) => {
        const grid = document.getElementById(section + "Grid");
        if (grid) {
            grid.innerHTML = "";
            group.forEach(item => {
                const card = createCard(item);
                grid.appendChild(card);
            });
        }
    });
    // Desserts
    const dessertGrid = document.getElementById("dessertsGrid");
    dessertGrid.innerHTML = "";
    menuData.desserts.forEach(item => dessertGrid.appendChild(createCard(item)));

    // Shisha
    const shishaGrid = document.getElementById("shishaGrid");
    shishaGrid.innerHTML = "";
    menuData.shisha.forEach(item => shishaGrid.appendChild(createCard(item)));

    //Food
     Object.entries(menuData.food).forEach(([section, group]) => {
        const grid = document.getElementById(section + "Grid");
        if (grid) {
            grid.innerHTML = "";
            group.forEach(item => {
                const card = createCard(item);
                grid.appendChild(card);
            });
        }
    });
}

// Theme toggle
function toggleTheme() {
    const root = document.documentElement;
    const btn = document.getElementById("themeToggle");
    if (root.getAttribute("data-theme") === "dark") {
        root.removeAttribute("data-theme");
        btn.textContent = "Dark Mode";
    } else {
        root.setAttribute("data-theme", "dark");
        btn.textContent = "Light Mode";
    }
}

// Scroll to top button logic
function handleScroll() {
    const btn = document.getElementById("back-to-top");
    btn.style.display = window.scrollY > 400 ? "flex" : "none";
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Event bindings
window.onload = () => {
    window.scrollTo(0 , 0);
    renderMenu();

    // Other buttons
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
    document.getElementById("back-to-top").addEventListener("click", scrollToTop);
    window.addEventListener("scroll", handleScroll);
};



































