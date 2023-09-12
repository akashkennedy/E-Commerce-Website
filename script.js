const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./images/air.png",
            },
            {
                code: "darkblue",
                img: "./images/air2.png",  
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./images/jordan.png",
            },
            {
                code: "green",
                img: "./images/jordan2.png",  
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./images/blazer.png",
            },
            {
                code: "green",
                img: "./images/blazer2.png",  
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 159,
        colors: [
            {
                code: "black",
                img: "./images/crater.png",
            },
            {
                code: "lightgray",
                img: "./images/crater2.png",  
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 199,
        colors: [
            {
                code: "gray",
                img: "./images/hippie.png",
            },
            {
                code: "black",
                img: "./images/hippie2.png",  
            },
        ],
    },
    
]

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
       wrapper.style.transform = `translateX(${-100 * index}vw)`;

       chosenProduct = products[index];

       currentProductTitle.textContent = chosenProduct.title;
       currentProductPrice.textContent = "$" + chosenProduct.price;
       currentProductImg.src = chosenProduct.colors[0].img;

       currentProductColors.forEach((color,index)=> {
        color.style.backgroundColor = chosenProduct.colors[index].code;
       })

    });
});
currentProductColors.forEach((color, index)=> {
    color.addEventListener("click", ()=> {
        currentProductImg.src = chosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size, index)=> {
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";   
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})