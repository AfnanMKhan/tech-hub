import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "iphone15",
      name: "iPhone 15",
      brand: "Apple",
      price: 79999,
      rating: 4.6,
      image: "/products/iphone15.jpg",
      category: "mobile",
      battery: "3349mAh",
      camera: "48MP",
      display: "6.1 inch OLED",
      processor: "A16 Bionic",

      amazon: "https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX1W1XY",
      flipkart: "https://www.flipkart.com/apple-iphone-15-black-128-gb/p/itm6ac6485515ae4?pid=MOBGTAGPTB3VS24W&marketplace=FLIPKART&lid=LSTMOBGTAGPTB3VS24WKFODHL&pageUID=1782151450198",
      Apple: "https://www.apple.com/in/iphone-15/"
    },

    {
      id: "s24",
      name: "Samsung S24",
      brand: "Samsung",
      price: 69999,
      rating: 4.5,
      image: "/products/s24.jpg",
      category: "mobile",
      battery: "4000mAh",
      camera: "50MP",
      display: "6.2 inch AMOLED",
      processor: "Snapdragon 8 Gen 3",

      amazon: "https://www.amazon.in/Samsung-Galaxy-Smartphone-Yellow-Storage/dp/B0CS5ZZMN8",
      flipkart: "https://www.flipkart.com/samsung-galaxy-s24-5g-snapdragon-marble-gray-128-gb/p/itm8f6413060b707?pid=MOBHDVFKCP3DZG4G&marketplace=FLIPKART&lid=LSTMOBHDVFKCP3DZG4GF1TPIS&pageUID=1782152010750",
      official: "https://www.samsung.com/in/smartphones/galaxy-s24/"
    },

    {
      id: "oneplus13",
      name: "OnePlus 13",
      brand: "OnePlus",
      price: 64999,
      rating: 4.7,
      image: "/products/oneplus13.jpg",
      category: "mobile",
      battery: "6000mAh",
      camera: "50MP Triple Camera",
      display: "6.82 inch AMOLED",
      processor: "Snapdragon 8 Elite",

      amazon: "https://www.amazon.in/OnePlus-Smarter-Lifetime-Display-Warranty/dp/B0DQ8MGRNX/ref=asc_df_B0DQ8MGRNX?mcid=fcd0049c1b013d61af75e66fdb567b81&tag=googleshopdes-21&linkCode=df0&hvadid=709962856229&hvpos=&hvnetw=g&hvrand=12399894992163476566&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9154213&hvtargid=pla-2394464501951&hvocijid=12399894992163476566-B0DQ8MGRNX-&hvexpln=0&gad_source=1&th=1",
      flipkart: "https://www.flipkart.com/oneplus-13-black-eclipse-256-gb/p/itmb4659fd2a037f",
      official: "https://www.oneplus.in/oneplus-13"
    },

    {
      id: "pixel9",
      name: "Google Pixel 9",
      brand: "Google",
      price: 74999,
      rating: 4.6,
      image: "/products/pixel9.jpg",
      category: "mobile",
      battery: "4700mAh",
      camera: "50MP",
      display: "6.3 inch OLED",
      processor: "Google Tensor G4",

      amazon: "https://www.amazon.in/s?k=Google+Pixel+9",
      flipkart: "https://www.flipkart.com/google-pixel-9-obsidian-256-gb/p/itm330ed8ebeefe1",
      official: "https://store.google.com/in/"
    },

    {
      id: "nothing3",
      name: "Nothing Phone 3",
      brand: "Nothing",
      price: 49999,
      rating: 4.4,
      image: "/products/nothing3.jpg",
      category: "mobile",
      battery: "5000mAh",
      camera: "50MP Dual Camera",
      display: "6.7 inch AMOLED",
      processor: "Snapdragon 8s Gen 4",

      amazon: "https://www.amazon.in/s?k=Nothing+Phone+3",
      flipkart: "https://www.flipkart.com/nothing-phone-3-white-256-gb/p/itm71848df3b4da7",
      official: "https://in.nothing.tech/"
    },

    {
      id: "macbookairm4",
      name: "MacBook Air M4",
      brand: "Apple",
      price: 114999,
      rating: 4.8,
      image: "/products/macbookairm4.jpg",
      category: "laptop",
      battery: "18 Hours",
      camera: "12MP Center Stage",
      display: "13.6 inch Liquid Retina",
      processor: "Apple M4",

      amazon: "https://www.amazon.in/s?k=MacBook+Air+M4",
      flipkart: "https://www.flipkart.com/apple-macbook-air-m4-16-gb-512-gb-ssd-macos-sequoia-mw133hn-a/p/itma6c9abac7d313",
      official: "https://www.apple.com/in/macbook-air/"
    },

    {
      id: "asusrog",
      name: "ASUS ROG Zephyrus G16",
      brand: "ASUS",
      price: 169999,
      rating: 4.7,
      image: "/products/asusrog.jpg",
      category: "laptop",
      battery: "90Wh",
      camera: "1080p",
      display: "16 inch OLED 240Hz",
      processor: "Intel Core Ultra 9",

      amazon: "https://www.amazon.in/s?k=ASUS+ROG+Zephyrus+G16",
      flipkart: "https://www.flipkart.com/search?q=ASUS+ROG+Zephyrus+G16",
      official: "https://rog.asus.com/in/laptops/rog-zephyrus/rog-zephyrus-g16-2025-gu605/"
    },

    {
      id: "lenovolegion",
      name: "Lenovo Legion 7i",
      brand: "Lenovo",
      price: 159999,
      rating: 4.6,
      image: "/products/lenovolegion.jpg",
      category: "laptop",
      battery: "99Wh",
      camera: "1080p",
      display: "16 inch QHD+ 240Hz",
      processor: "Intel Core i9",

      amazon: "https://www.amazon.in/s?k=Lenovo+Legion+7i",
      flipkart: "https://www.flipkart.com/search?q=Lenovo+Legion+7i",
      official: "https://www.lenovo.com/in/en/"
    },

    {
      id: "dellxps14",
      name: "Dell XPS 14",
      brand: "Dell",
      price: 149999,
      rating: 4.5,
      image: "/products/dellxps14.jpg",
      category: "laptop",
      battery: "70Wh",
      camera: "1080p",
      display: "14.5 inch OLED",
      processor: "Intel Core Ultra 7",

      amazon: "https://www.amazon.in/s?k=Dell+XPS+14",
      flipkart: "https://www.flipkart.com/search?q=Dell+XPS+14",
      official: "https://www.dell.com/en-in"
    },
      
    {
      id: "iphone16",
      name: "iPhone 16",
      brand: "Apple",
      price: 89999,
      rating: 4.8,
      image: "/products/iphone16.jpg",
      category: "mobile",
      battery: "3561mAh",
      camera: "48MP",
      display: "6.1 inch OLED",
      processor: "A18",

      amazon: "https://www.amazon.in/s?k=iPhone+16",
      flipkart: "https://www.flipkart.com/apple-iphone-16-white-128-gb/p/itm7c0281cd247be",
      official: "https://www.apple.com/in/shop/buy-iphone/iphone-16"
    },

    {
      id: "iphone16pro",
      name: "iPhone 16 Pro",
      brand: "Apple",
      price: 129999,
      rating: 4.9,
      image: "/products/iphone16pro.jpg",
      category: "mobile",
      battery: "3582mAh",
      camera: "48MP Triple Camera",
      display: "6.3 inch OLED",
      processor: "A18 Pro",

      amazon: "https://www.amazon.in/s?k=iPhone+16+Pro",
      flipkart: "https://www.flipkart.com/search?q=iPhone+16+Pro",
      official: "https://www.apple.com/in/shop/buy-iphone/iphone-16-pro"
      },

      {
      id: "galaxys25",
      name: "Samsung Galaxy S25",
      brand: "Samsung",
      price: 79999,
      rating: 4.7,
      image: "/products/galaxys25.jpg",
      category: "mobile",
      battery: "4200mAh",
      camera: "50MP",
      display: "6.2 inch AMOLED",
      processor: "Snapdragon 8 Elite",

      amazon: "https://www.amazon.in/s?k=Samsung+Galaxy+S25",
      flipkart: "https://www.flipkart.com/search?q=Samsung+Galaxy+S25",
      official: "https://www.samsung.com/in/"
      },

      {
      id: "galaxys25ultra",
      name: "Samsung Galaxy S25 Ultra",
      brand: "Samsung",
      price: 134999,
      rating: 4.9,
      image: "/products/galaxys25ultra.jpg",
      category: "mobile",
      battery: "5000mAh",
      camera: "200MP",
      display: "6.9 inch AMOLED",
      processor: "Snapdragon 8 Elite",

      amazon: "https://www.amazon.in/s?k=Samsung+Galaxy+S25+Ultra",
      flipkart: "https://www.flipkart.com/search?q=Samsung+Galaxy+S25+Ultra",
      official: "https://www.samsung.com/in/"
      },

      {
      id: "oneplus12",
      name: "OnePlus 12",
      brand: "OnePlus",
      price: 59999,
      rating: 4.7,
      image: "/products/oneplus12.jpg",
      category: "mobile",
      battery: "5400mAh",
      camera: "50MP",
      display: "6.82 inch AMOLED",
      processor: "Snapdragon 8 Gen 3",

      amazon: "https://www.amazon.in/s?k=OnePlus+12",
      flipkart: "https://www.flipkart.com/search?q=OnePlus+12",
      official: "https://www.oneplus.in"
      },

      {
      id: "xiaomi15",
      name: "Xiaomi 15",
      brand: "Xiaomi",
      price: 64999,
      rating: 4.6,
      image: "/products/xiaomi15.jpg",
      category: "mobile",
      battery: "5400mAh",
      camera: "50MP Leica",
      display: "6.36 inch AMOLED",
      processor: "Snapdragon 8 Elite",

      amazon: "https://www.amazon.in/s?k=Xiaomi+15",
      flipkart: "https://www.flipkart.com/search?q=Xiaomi+15",
      official: "https://www.mi.com/in"
      },

      {
      id: "realmegt7",
      name: "Realme GT 7",
      brand: "Realme",
      price: 42999,
      rating: 4.5,
      image: "/products/realmegt7.jpg",
      category: "mobile",
      battery: "7000mAh",
      camera: "50MP",
      display: "6.78 inch AMOLED",
      processor: "Dimensity 9400",

      amazon: "https://www.amazon.in/s?k=Realme+GT+7",
      flipkart: "https://www.flipkart.com/search?q=Realme+GT+7",
      official: "https://www.realme.com/in/"
      },

      {
      id: "iqoo13",
      name: "iQOO 13",
      brand: "iQOO",
      price: 54999,
      rating: 4.6,
      image: "/products/iqoo13.jpg",
      category: "mobile",
      battery: "6000mAh",
      camera: "50MP Triple Camera",
      display: "6.82 inch AMOLED",
      processor: "Snapdragon 8 Elite",

      amazon: "https://www.amazon.in/s?k=iQOO+13",
      flipkart: "https://www.flipkart.com/search?q=iQOO+13",
      official: "https://www.iqoo.com/in"
      },

      {
      id: "vivox200",
      name: "Vivo X200",
      brand: "Vivo",
      price: 69999,
      rating: 4.7,
      image: "/products/vivox200.jpg",
      category: "mobile",
      battery: "5800mAh",
      camera: "50MP Zeiss",
      display: "6.67 inch AMOLED",
      processor: "Dimensity 9400",

      amazon: "https://www.amazon.in/s?k=Vivo+X200",
      flipkart: "https://www.flipkart.com/search?q=Vivo+X200",
      official: "https://www.vivo.com/in"
      },

   {
      id: "oppofindx8",
      name: "Oppo Find X8",
      brand: "Oppo",
      price: 69999,
      rating: 4.6,
      image: "/products/oppofindx8.jpg",
      category: "mobile",
      battery: "5600mAh",
      camera: "50MP Hasselblad",
      display: "6.59 inch AMOLED",
      processor: "Dimensity 9400",

      amazon: "https://www.amazon.in/s?k=Oppo+Find+X8",
      flipkart: "https://www.flipkart.com/search?q=Oppo+Find+X8",
      official: "https://www.oppo.com/in/"
   },

   {
      id: "hpomen",
      name: "HP Omen 16",
      brand: "HP",
      price: 129999,
      rating: 4.4,
      image: "/products/hpomen.jpg",
      category: "laptop",
      battery: "83Wh",
      camera: "1080p",
      display: "16.1 inch QHD 240Hz",
      processor: "Ryzen 9",

      amazon: "https://www.amazon.in/s?k=HP+Omen+16",
      flipkart: "https://www.flipkart.com/search?q=HP+Omen+16",
      official: "https://www.hp.com/in-en/shop/"
    }
  ]);
}