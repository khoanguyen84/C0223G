class Coffee {
    constructor(photo, name, category, price) {
        this.photo = photo;
        this.name = name;
        this.category = category;
        this.price = price
    }
}

let coffees = [
    new Coffee("https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6755-scaled-247x296.jpg", "Cà phê nguyên chất Hạt CULI (đặc biệt)", "SẢN PHẨM NGUYÊN CHẤT", 169000),
    new Coffee("https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6768-scaled-247x296.jpg", "Cà phê nguyên chất Hạt CULI (đặc biệt)", "SẢN PHẨM NGUYÊN CHẤT", 169000),
    new Coffee("https://capherangxay.vn/wp-content/uploads/2018/07/1C6A6785-scaled-247x296.jpg", "Cà phê nguyên chất Hạt CULI (đặc biệt)", "SẢN PHẨM NGUYÊN CHẤT", 169000),
]

function renderCoffee() {
    let row = document.querySelector('.row');
    // for (let i = 0; i < coffees.length; i++) {
    //     row.innerHTML += `
    //         <div class="product">
    //             <div class="product-photo">
    //                 <img class="photo"
    //                     src="${coffees[i].photo}" alt="">
    //                 <p class="quick-view">QUICK VIEW</p>
    //             </div>
    //             <p class="category">${coffees[i].category}</p>
    //             <p class="coffee-name">${coffees[i].name}</p>
    //             <p class="price">${formatCurrency(coffees[i].price)}</p>
    //         </div>
    //     `
    // }
    for (let coffee of coffees) {
        row.innerHTML += `
            <div class="product">
                <div class="product-photo">
                    <img class="photo"
                        src="${coffee.photo}" alt="">
                    <p class="quick-view">QUICK VIEW</p>
                </div>
                <p class="category">${coffee.category}</p>
                <p class="coffee-name">${coffee.name}</p>
                <p class="price">${formatCurrency(coffee.price)}</p>
            </div>
        `
    }
}

function formatCurrency(number){
    return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}
renderCoffee();