let laptops = [
    {
        name: "Lenovo 11",
        discount: 0.21,
        price: 13990000,
        priceSale: 10990000,
        photo: "https://philong.com.vn//media/product/250-29599-lenovo--ideapad3-15iau7-philong2.png",
        hashtags: ["Bán chạy", "Khuyến mãi"],
        description: "Laptop Lenovo IdeaPad 3 15IAU7 82RK005LVN (Intel Core i3-1215U, RAM 8GB, SSD 256GB, VGA Intel UHD, Màn Hình 15.6 inch FHD, Windows 11, Màu Xám)",
        promitions: ["Túi xách đựng laptop trị giá 350.000đ", "Chuột không dây Newmen", "Trả góp lãi suất 0% áp dụng cho thẻ tín dụng Sacombank, VPbank và trả góp lãi suất ưu đãi áp dụng cho nhà tài chính HD Saison và ACS.", "Trả góp lãi suất ưu đãi thông qua cổng MPOS áp dụng cho thẻ tín dụng: Citibank, Eximbank, HSBC, MSB, Techcombank, Nam Á, Shinhan bank, TP bank, Seabank, Kiên Long bank, OCB, VIB, ACB, MB, Vietcombank, SHB..."]
    },
    {
        name: "Lenovo 12",
        discount: 0.21,
        price: 13990000,
        priceSale: 10990000,
        photo: "https://philong.com.vn//media/product/250-29599-lenovo--ideapad3-15iau7-philong2.png",
        hashtags: ["Bán chạy", "Khuyến mãi"],
        description: "Laptop Lenovo IdeaPad 3 15IAU7 82RK005LVN (Intel Core i3-1215U, RAM 8GB, SSD 256GB, VGA Intel UHD, Màn Hình 15.6 inch FHD, Windows 11, Màu Xám)",
        promitions: ["Túi xách đựng laptop trị giá 350.000đ", "Chuột không dây Newmen", "Trả góp lãi suất 0% áp dụng cho thẻ tín dụng Sacombank, VPbank và trả góp lãi suất ưu đãi áp dụng cho nhà tài chính HD Saison và ACS.", "Trả góp lãi suất ưu đãi thông qua cổng MPOS áp dụng cho thẻ tín dụng: Citibank, Eximbank, HSBC, MSB, Techcombank, Nam Á, Shinhan bank, TP bank, Seabank, Kiên Long bank, OCB, VIB, ACB, MB, Vietcombank, SHB..."]
    }
]

for (let i = 0; i < laptops.length; i++) {
    document.body.innerHTML +=
        `
        <div class="product-area">
            <span class="discount">${laptops[i].discount * 100}%</span>
            <img src="${laptops[i].photo}" alt="">
            <h3 class="name">${laptops[i].name}</h3>
            <div>
                <span class="hashtag">${laptops[i].hashtags[0]}</span>
                <span class="hashtag">${laptops[i].hashtags[0]}</span>
            </div>
            <h3>${laptops[i].description.toLocaleUpperCase().substring(0, 40)}...</h3>
            <p>${laptops[i].promitions.length} khuyến mãi</p>
        </div>
    `
}


