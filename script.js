// Menu data
const menuData = {
    hotDrinks: [
        { name: "Latte", description: "Coffee with steamed milk.", price: "4.50", img: "imgs/latte.png" },
        { name: "Spaniche Latte", description: "", price: "4.50", img: "imgs/spanish_latte.png" },
        { name: "Mocha Latte", description: "", price: "4.50", img: "imgs/macha_latte.png" },
        { name: "Flat white", description: "", price: "4.50", img: "imgs/flat_white.jpg" },
        { name: "Espresso", description: "", price: "4.50", img: "imgs/espresso.jpg" },
        { name: "Double Espresso", description: "", price: "4.50", img: "imgs/espresso.jpg" },
        { name: "Americano", description: "", price: "4.50", img: "" },
        { name: "Macchiato", description: "", price: "4.50", img: "" },
        { name: "Espresso", description: "Strong Italian coffee.", price: "3.00", img: "" },
        { name: "Cappuccino", description: "Espresso, steamed milk, foam.", price: "4.75", img: "" },
        { name: "Hot chocolate", description: "", price: "4.50", img: "" },
        { name: "Tea", description: "", price: "4.50", img: "" },

    ],
    coldDrinks: {
        milkshakes: [
            { name: "Chocolate Milkshake", description: "Rich,creamy chocolate blended with ice cream.", price: "3.00", img: "" },
            { name: "Strawberry Milkshake", description: "Sweet strawberry flavor with real fruit and cream.", price: "4.50", img: "" },
            { name: "Vanillia Milkshake", description: "", price: "4.75", img: "" }
        ],
        iceCoffee: [
            { name: "Ice Latte", description: "", price: "4.75", img: "" },
            { name: "Ice mocha", description: "", price: "4.75", img: "" },
            { name: "Iced Spanish", description: "", price: "4.75", img: "" },
            { name: "Iced Matcha", description: "", price: "4.75", img: "" }
        ],
        frappes: [
            { name: "vanillia", description: "", price: "4.50", img: "" },
            { name: "Mocha and white", description: "", price: "3.00", img: "" },
            { name: "Matcha", description: "", price: "4.50", img: "" },
            { name: "Caramel", description: "", price: "3.00", img: "" }
        ],
        smoothies: [
            { name: "Mix berries", description: "", price: "4.50", img: "" },
            { name: "Mango", description: "", price: "4.75", img: "" },
            { name: "Strawberry", description: "", price: "4.75", img: "" },
            { name: "Passion Fruit", description: "", price: "4.75", img: "" }
        ],
        juices: [
            { name: "Orange", description: "", price: "4.75", img: "" },
            { name: "Lemon", description: "", price: "4.75", img: "" },
            { name: "Minted", description: "", price: "4.75", img: "" },
        ],
       energyDrinks: [
            { name: "Boom Boom Energy Drink", description: "", price: "4.75", img: "" },
        ]
    },
    desserts: [
        { name: "Nutella Crepe", description: "Rich layered chocolate delight.", price: "5.00", img: "" },
        { name: "Oreo Crepe", description: "Pastry with nuts & honey syrup.", price: "4.00", img: "" },
        { name: "Lotus Crepe", description: "Coffee-flavored Italian dessert.", price: "5.50", img: "" },
        { name: "Kinder Crepe", description: "Coffee-flavored Italian dessert.", price: "5.50", img: "" },
        { name: "Cookies", description: "Coffee-flavored Italian dessert.", price: "5.50", img: "" },
        { name: "Lazy Cake", description: "Coffee-flavored Italian dessert.", price: "5.50", img: "" },
        { name: "Donuts", description: "Coffee-flavored Italian dessert.", price: "5.50", img: "" },

    ],
    shisha: [
        { name: "Double Apple", description: "Sweet spicy apple blend.", price: "15.00", img: "" },
        { name: "Mint", description: "Cool, refreshing mint flavor.", price: "14.00", img: "" },
        { name: "Lemond & Mint", description: "Cool, refreshing mint flavor.", price: "14.00", img: "" },
        { name: "Love", description: "Cool, refreshing mint flavor.", price: "14.00", img: "" },
        { name: "Blueberry", description: "Sweet blueberry aroma.", price: "16.00", img: "" },
        { name: "Head Change", description: "Cool, refreshing mint flavor.", price: "14.00", img: "" }
    ],
    food: {
        sandwiches: [
            { name: "Halloum Pesto", description: "", price: "", img: "" },
            { name: "Chesse", description: "", price: "", img: "" },
            { name: "Labne", description: "", price: "", img: "" },
            { name: "Turkey", description: "", price: "", img: "" }
        ],
        saj :[
            { name: "Zaater", description: "", price: "", img: "" },
            { name: "Chesse", description: "", price: "", img: "" },
            { name: "Cocktail", description: "", price: "", img: "" },
            { name: "Habash", description: "", price: "", img: "" },
            { name: "Martadela", description: "", price: "", img: "" },
            { name: "Nutela", description: "", price: "", img: "" }
        ], 
        croissant :[
            { name: "Zaater", description: "", price: "", img: "" },
            { name: "Chesse", description: "", price: "", img: "" },
            { name: "Chocolate", description: "", price: "", img: "" }
        ],
        tablye :[
            {name:"Tablye", description:  "Saj Zaatar/chesse + Halloum 3pcs + Labne + Martedela 2psc + Habsh 2psc + Oives + Tomatoes + Cucumber +Tea/Nesscafe", price: "", img: ""}
        ]
    }
};

function createCard(item) {
    const card = document.createElement("div");
    card.className = "menu-item";
    card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <div class="menu-details">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="price">${item.price}</p>
    </div>
  `;
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

