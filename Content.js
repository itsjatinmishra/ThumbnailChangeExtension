let RichIndImages = [
    "https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds",
    "https://upload.wikimedia.org/wikipedia/commons/6/69/Mukesh_Ambani.jpg",
    "https://media.cnn.com/api/v1/images/stellar/prod/200501034301-01-mukesh-ambani-file.jpg?q=w_2462,h_1656,x_0,y_0,c_fill",
    "https://c.ndtvimg.com/2022-10/guk608ho_mukesh-ambani-bloomberg_625x300_07_October_22.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f8/Ratan_Tata_photo.jpg",
    "https://images.livemint.com/img/2020/02/13/1600x900/Humans_of_Bombay_1581582661805.jpg",
    "https://img.jagranjosh.com/images/2021/December/28122021/WhatsApp%20Image%202021-12-28%20at%2010.50.41%20AM.jpeg",
    "https://cdn2.storyasset.link/UnCJXa5InfQplDFEajN0hOKWgFY2/cbfe25decebe0416ed866fe97d75d6a0-ms-hmwktlhfye.jpg",
    "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F230123093338-01-gautam-adani-file-2022.jpg",
    "https://gumlet.assettype.com/bloombergquint%2F2022-08%2Fbacd4447-4591-4d1d-8c3f-bc8d771b4b1e%2F2014_04_10T120000Z_1800528616_GM1EA470NIY01_RTRMADP_3_INDIA_ELECTION_ADANI.JPG?rect=0%2C0%2C3500%2C1969&auto=format%2Ccompress&fmt=webp&w=1200",
    "https://images.assettype.com/fortuneindia%2F2022-04%2F89c6c728-0e6d-497d-9bb1-2c5757fa7a88%2FAdani_1.jpg?rect=0,0,2047,1151&w=1250&q=60",
    "https://thelogicalindian.com/h-upload/2022/08/24/222198-untitled-design.jpg",
];

const imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++){
    const randomImg = Math.floor(Math.random() * RichIndImages.length);
    imgs[i].src = RichIndImages[randomImg];
}

const headers = document.getElementsByTagName("h2");

for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Tata is Awesome & Helpful";
}