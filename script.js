// Menu data
const menuData = {
    hotDrinks: [
        { name: "Latte", description: "Coffee with steamed milk.", price: "$2.50", img: "imgs/latte.png" },
        { name: "Spanish Latte", description: "", price: "$3.50", img: "imgs/spanish_latte.png" },
        { name: "Mocha Latte", description: "", price: "$3.50", img: "imgs/macha_latte.png" },
        { name: "Flat white", description: "", price: "$3.00", img: "imgs/flat_white.jpg" },
        { name: "Espresso", description: "", price: "$1.00", img: "imgs/espresso.jpg" },
        { name: "Double Espresso", description: "", price: "$1.50", img: "imgs/espresso.jpg" },
        { name: "Nescafe ", description: "3in 1/ coffemet/ milk /nestle", price: "$1.50", img: "" },
     //   { name: "Macchiato", description: "", price: "4.50", img: "" },
        { name: "Cappuccino", description: "Espresso, steamed milk, foam.", price: "$3.50", img: "" },
        { name: "Hot chocolate", description: "", price: "$3.00", img: "" },
        { name: "Cortado", description: "", price: "$2.00", img: "" },
        { name: "White Latte", description: "", price: "$3.50", img: "" },
        { name: "Matcha", description: "", price: "$3.50", img: "" },
        { name: "V.Matcha", description: "", price: "$4.50", img: "" },
        { name: "Flavored Latte", description: "", price: "$3.50", img: "" },
        { name: "Tea", description: "", price: "$1.00", img: "" },
        { name: "Zhorat", description: "", price: "$1.00", img: "" }
    ],
    coldDrinks: {
        milkshakes: [
            { name: "Chocolate Milkshake", description: "", price: "$3.50", img: "" },
            { name: "Strawberry Milkshake", description: "", price: "$3.50", img: "" },
            { name: "Oreo Milkshake", description: "", price: "$3.50", img: "" },
            { name: "lotus Milkshake", description: "", price: "$3.50", img: "" },
            { name: "Vanillia Milkshake", description: "", price: "$3.50", img: "" }

        ],
        iceCoffee: [
            { name: "Iced Latte", description: "", price: "$3.00", img: "" },
            { name: "Iced flavored Latte", description: "", price: "$3.50", img: "" },
          //  { name: "Iced mocha", description: "", price: "4.75", img: "" },
            { name: "Iced Spanish", description: "", price: "$4.00", img: "" },
            { name: "Iced Americano", description: "", price: "$2.50", img: "" },
            { name: "Iced Vanilla Matcha", description: "", price: "$6.00", img: "" },
            { name: "Iced Matcha", description: "", price: "$4.00", img: "" }
        ],
        frappes: [
            { name: "vanillia ", description: "", price: "$3.50", img: "" },
            { name: "Mocha and white frappe", description: "", price: "$3.50", img: "" },
            { name: "Matcha", description: "", price: "$3.50", img: "" },
            { name: "Mocha frappe", description: "", price: "$3.50", img: "" },
            { name: "Caramel frappe", description: "", price: "$3.50", img: "" },
            { name: "Salted Caramel frappe", description: "", price: "$3.50", img: "" }

        ],
        smoothies: [
            { name: "Mango", description: "", price: "$3.00", img: "" },
            { name: "Strawberry", description: "", price: "$3.00", img: "" },
            { name: "Mango & Strawberry", description: "", price: "$3.00", img: "" },
            { name: "Mix berries", description: "", price: "$3.00", img: "" },
            { name: "Passion Fruit", description: "", price: "$3.00", img: "" }

        ],
        juices: [
            { name: "Orange", description: "", price: "$2.50", img: "" },
            { name: "Lemon", description: "", price: "$2.50", img: "" },
            { name: "Minted", description: "", price: "$2.50", img: "" },
        ],
        water: [
            {name:"500mL water", description: "", price: "$0.5", img: ""}
        ],
        softDrinks: [
            {name:"Pepsi", description: "", price: "$1.00", img: ""},
            {name:"Miranda", description: "", price: "$1.00", img: ""},
            {name:"7UP", description: "", price: "$1.00", img: ""}  
        ],
       energyDrinks: [
            { name: "Boom Boom Energy Drink", description: "", price: "$2.00", img: "" },
        ]
    },
    desserts: [
        { name: "Nutella Crepe", description: "", price: "5.00", img: "" },
        { name: "Oreo Crepe", description: "", price: "4.00", img: "" },
        { name: "Lotus Crepe", description: "", price: "5.50", img: "" },
        { name: "Kinder Crepe", description: "", price: "5.50", img: "" },
        { name: "Cookies", description: "", price: "5.50", img: "" },
        { name: "Lazy Cake", description: "", price: "5.50", img: "" },
        { name: "Donuts", description: "", price: "5.50", img: "" },

    ],
    shisha: [
        { name: "Double Apple", description: "", price: "$4.00", img: "" },
        { name: "Mint", description: "", price: "$4.00", img: "" },
        { name: "Lemond & Mint", description: "", price: "$5.00", img: "" },
        { name: "Love", description: "", price: "$4.00", img: "" },
        { name: "Blueberry", description: "", price: "$4.00", img: "" },
        { name: "Head Change", description: "", price: "$2.5", img: "" }
    ],
    food: {
        sandwiches: [
            { name: "Halloum Pesto", description: "", price: "$3.00", img: "" },
            { name: "Chesse", description: "", price: "", img: "$3.00" },
            { name: "Labne", description: "", price: "", img: "$2.00" },
            { name: "Turkey", description: "", price: "", img: "$3.00" }
        ],
        saj :[
            { name: "Zaater", description: "", price: "$1.00", img: "" },
            { name: "Chesse", description: "", price: "$1.75", img: "" },
            { name: "Cocktail", description: "", price: "$1.50", img: "" },
            { name: "Habash", description: "", price: "$2.5", img: "" },
            { name: "Martadela", description: "", price: "$2.5", img: "" },
            { name: "Nutela", description: "", price: "$2.5", img: "" }
        ], 
        croissant :[
            { name: "Zaater", description: "", price: "", img: "" },
            { name: "Chesse", description: "", price: "", img: "" },
            { name: "Chocolate", description: "", price: "", img: "" }
        ],
        tablye :[
            {name:"Tablye", description:  "Saj Zaatar/chesse + Halloum 3pcs + Labne + Martedela 2psc + Habsh 2psc + Oives + Tomatoes + Cucumber +Tea/Nesscafe", price: "$5.50", img: ""}
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










