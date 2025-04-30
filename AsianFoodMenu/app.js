const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/3E4C2DED-D0F9-45CD-B476-8BA54E533AD9/Derivates/d17260c9-bc36-4fb0-bbf1-3b4b8427be74.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
    {
        id: 10,
        title: "Vegetable Gyoza",
        category: "Japan",
        price: 8.99,
        img: "https://i0.wp.com/www.boskitchen.com/wp-content/uploads/2019/01/IMG_1420-2.jpg?resize=1536%2C1920&ssl=1",
        desc: `Crispy pan-fried dumplings filled with cabbage, carrots, and mushrooms.`,
    },
    {
        id: 11,
        title: "Miso Soup",
        category: "Japan",
        price: 4.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mELkKp4SRwz0i7dJRwHOKA7M9KQvBfibDQ&s",
        desc: `Traditional Japanese soup with tofu, seaweed, and green onion.`,
    },
    {
        id: 12,
        title: "Peking Duck",
        category: "China",
        price: 29.99,
        img: "https://www.allrecipes.com/thmb/I7mLbsFOCOSkEIyYgIa1QT89tzQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-31972-peking-duck-DDMFS-4x3-hero-3344139da66141b687e1d7b85b995bf5.jpg",
        desc: `Roasted duck served with pancakes, cucumber, and hoisin sauce.`,
    },
    {
        id: 13,
        title: "Hot Pot",
        category: "China",
        price: 19.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJFHAJ0ocHE4ZPKZi1ZuZe9MRv6OaKvT49A&s",
        desc: `Traditional Sichuan-style hot pot with a variety of meats and vegetables.`,
    },
    {
        id: 14,
        title: "Tamago",
        category: "Japan",
        price: 3.49,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUv-nyJd_LVtbTi2olladZ2JKKBAenRryNpw&s",
        desc: `Japanese rolled omelette, sweet and savory.`,
    },
    {
        id: 15,
        title: "Bulgogi",
        category: "Korea",
        price: 13.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUoT9a-8L8uUl-1fjgDotOgY18R79a1l7AQ&s",
        desc: `Korean BBQ beef marinated in sweet soy sauce with sesame oil and garlic.`,
    },
    {
        id: 16,
        title: "Vegetable Spring Rolls",
        category: "China",
        price: 6.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wElL7z9stGRFLRQE1tGQ7MdffuG-Dn3l0g&s",
        desc: `Crispy rolls filled with fresh vegetables, served with sweet chili sauce.`,
    },
];


const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item col-md-6">
      <img src=${item.img} class="photo" alt="${item.title}" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
      </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["All"]
    );

    const categoryBtns = categories
        .map(function (category) {
            return `<button class="filter-btn btn btn-outline-dark btn-sm" type="button" data-id="${category}">
        ${category}
      </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;

    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory =
                category === "All"
                    ? menu
                    : menu.filter(function (menuItem) {
                        return menuItem.category === category;
                    });

            displayMenuItems(menuCategory);
        });
    });
}
