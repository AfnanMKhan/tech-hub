import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "iphone15",
      name: "iPhone 15",
      brand: "Apple",
      price: 79999,
      rating: 4.6,
      image: "/products/iphone15/iphone15.jpg",
       images: [
    "/products/iphone15/2.jpg",
    "/products/iphone15/3.jpg",
    "/products/iphone15/4.jpg",
  ],
      category: "mobile",
      battery: "3349mAh",
      camera: "48MP",
      display: "6.1 inch OLED",
      processor: "A16 Bionic",

      highlights: [
  "48MP Main Camera with 2x Telephoto",
  "Dynamic Island",
  "A16 Bionic Chip",
  "Super Retina XDR Display",
  "USB-C Connectivity",
  "Ceramic Shield Front",
  "Face ID Security",
  "All-Day Battery Life",
  "5G Connectivity",
  "IP68 Water Resistance"
],

specifications: {
  General: {
    Brand: "Apple",
    Model: "iPhone 15",
    LaunchYear: "2023",
    OperatingSystem: "iOS 17",
    SIMType: "Dual SIM (Nano + eSIM)"
  },

  Display: {
    Size: "6.1 inch",
    Type: "Super Retina XDR OLED",
    Resolution: "2556 x 1179",
    RefreshRate: "60Hz",
    Brightness: "2000 nits Peak"
  },

  Processor: {
    Chipset: "A16 Bionic",
    CPU: "Hexa Core",
    GPU: "5-Core GPU",
    NeuralEngine: "16-Core"
  },

  Memory: {
    RAM: "6GB",
    Storage: "128GB"
  },

  Camera: {
    RearCamera: "48MP Main + 12MP Ultra Wide",
    FrontCamera: "12MP TrueDepth",
    VideoRecording: "4K up to 60fps",
    Features: "Night Mode, Portrait Mode, Smart HDR"
  },

  Battery: {
    Capacity: "3349mAh",
    Charging: "USB-C Fast Charging",
    WirelessCharging: "MagSafe Supported"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 6",
    Bluetooth: "v5.3",
    NFC: "Yes",
    USB: "USB-C"
  },

  Design: {
    Weight: "171g",
    Build: "Aluminium and Color-Infused Glass",
    WaterResistance: "IP68"
  },

  Security: {
    FaceID: "Yes",
    FingerprintSensor: "No"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    AmbientLightSensor: "Yes",
    Compass: "Yes"
  }
},

      amazon: "https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX1W1XY",
      flipkart: "https://www.flipkart.com/apple-iphone-15-black-128-gb/p/itm6ac6485515ae4?pid=MOBGTAGPTB3VS24W&marketplace=FLIPKART&lid=LSTMOBGTAGPTB3VS24WKFODHL&pageUID=1782151450198",
      official: "https://www.apple.com/in/iphone-15/"
    },

    {
      id: "s24",
      name: "Samsung S24",
      brand: "Samsung",
      price: 69999,
      rating: 4.5,
      image: "/products/s24/s24.jpg",
      images: [
  "/products/s24/2.jpg",
  "/products/s24/3.jpg",
  "/products/s24/4.jpg"
],
      category: "mobile",
      battery: "4000mAh",
      camera: "50MP",
      display: "6.2 inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
      highlights: [
  "Snapdragon 8 Gen 3 Processor",
  "50MP Triple Camera",
  "Galaxy AI Features",
  "120Hz Dynamic AMOLED 2X Display",
  "4000mAh Battery",
  "IP68 Water Resistance",
  "Corning Gorilla Glass Victus 2",
  "Wireless Charging",
  "5G Connectivity",
  "7 Years of Android Updates"
],

specifications: {
  General: {
    Brand: "Samsung",
    Model: "Galaxy S24",
    LaunchYear: "2024",
    OperatingSystem: "Android 14",
    UI: "One UI 6.1",
    SIMType: "Dual SIM"
  },

  Display: {
    Size: "6.2 inch",
    Type: "Dynamic AMOLED 2X",
    Resolution: "2340 x 1080",
    RefreshRate: "120Hz",
    Brightness: "2600 nits"
  },

  Processor: {
    Chipset: "Snapdragon 8 Gen 3",
    CPU: "Octa Core",
    GPU: "Adreno 750",
    AIEngine: "Galaxy AI"
  },

  Memory: {
    RAM: "8GB",
    Storage: "128GB"
  },

  Camera: {
    RearCamera: "50MP + 12MP + 10MP",
    FrontCamera: "12MP",
    VideoRecording: "8K @30fps",
    Features: "Nightography, Portrait Mode, OIS"
  },

  Battery: {
    Capacity: "4000mAh",
    Charging: "25W Fast Charging",
    WirelessCharging: "15W Wireless Charging",
    ReverseWirelessCharging: "Yes"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 6E",
    Bluetooth: "v5.3",
    NFC: "Yes",
    USB: "USB Type-C"
  },

  Design: {
    Weight: "167g",
    Build: "Armor Aluminum Frame",
    Protection: "Gorilla Glass Victus 2",
    WaterResistance: "IP68"
  },

  Security: {
    FingerprintSensor: "Ultrasonic In-display",
    FaceUnlock: "Yes"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    Compass: "Yes",
    AmbientLightSensor: "Yes"
  }
},
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
      image: "/products/oneplus13/oneplus13.jpg",
      images: [
  "/products/oneplus13/2.jpg",
  "/products/oneplus13/3.jpg",
  "/products/oneplus13/4.jpg"
],
      category: "mobile",
      battery: "6000mAh",
      camera: "50MP Triple Camera",
      display: "6.82 inch AMOLED",
      processor: "Snapdragon 8 Elite",
      highlights: [
  "Snapdragon 8 Elite Processor",
  "50MP Hasselblad Triple Camera",
  "6.82-inch 2K AMOLED Display",
  "120Hz LTPO Refresh Rate",
  "6000mAh Silicon Carbon Battery",
  "100W SUPERVOOC Charging",
  "50W Wireless Charging",
  "IP68 + IP69 Water Resistance",
  "OxygenOS 15",
  "Wi-Fi 7 Support"
],

specifications: {
  General: {
    Brand: "OnePlus",
    Model: "OnePlus 13",
    LaunchYear: "2025",
    OperatingSystem: "Android 15",
    UI: "OxygenOS 15",
    SIMType: "Dual SIM"
  },

  Display: {
    Size: "6.82 inch",
    Type: "LTPO AMOLED",
    Resolution: "3168 x 1440",
    RefreshRate: "1-120Hz",
    Brightness: "4500 nits Peak"
  },

  Processor: {
    Chipset: "Snapdragon 8 Elite",
    CPU: "Octa Core",
    GPU: "Adreno 830",
    AIEngine: "Qualcomm AI Engine"
  },

  Memory: {
    RAM: "12GB",
    Storage: "256GB"
  },

  Camera: {
    RearCamera: "50MP + 50MP + 50MP",
    FrontCamera: "32MP",
    VideoRecording: "8K @30fps",
    Features: "Hasselblad Camera System, OIS, 3x Optical Zoom"
  },

  Battery: {
    Capacity: "6000mAh",
    Charging: "100W SUPERVOOC",
    WirelessCharging: "50W AIRVOOC",
    ReverseCharging: "Yes"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.4",
    NFC: "Yes",
    USB: "USB Type-C 3.2"
  },

  Design: {
    Weight: "213g",
    Build: "Glass Front and Back",
    Protection: "Ceramic Guard",
    WaterResistance: "IP68/IP69"
  },

  Security: {
    FingerprintSensor: "Ultrasonic In-display",
    FaceUnlock: "Yes"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    Compass: "Yes",
    AmbientLightSensor: "Yes",
    InfraredBlaster: "Yes"
  }
},

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
      image: "/products/pixel9/pixel9.jpg",
      images: [
  "/products/pixel9/2.jpg",
  "/products/pixel9/3.jpg",
  "/products/pixel9/4.jpg"
],
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
      image: "/products/nothing3/nothing3.jpg",
      images: [
  "/products/nothing3/2.jpg",
  "/products/nothing3/3.jpg",
  "/products/nothing3/4.jpg"
],
      category: "mobile",
      battery: "5000mAh",
      camera: "50MP Dual Camera",
      display: "6.7 inch AMOLED",
      processor: "Snapdragon 8s Gen 4",
      highlights: [
  "Google Tensor G4 Processor",
  "50MP AI Camera System",
  "6.3-inch Actua OLED Display",
  "120Hz Refresh Rate",
  "12GB RAM",
  "4700mAh Battery",
  "Wireless Charging",
  "IP68 Water Resistance",
  "7 Years of Android Updates",
  "Google AI Features"
],

specifications: {
  General: {
    Brand: "Google",
    Model: "Pixel 9",
    LaunchYear: "2024",
    OperatingSystem: "Android 14",
    Updates: "7 Years OS & Security Updates",
    SIMType: "Dual SIM (Nano + eSIM)"
  },

  Display: {
    Size: "6.3 inch",
    Type: "Actua OLED",
    Resolution: "2424 x 1080",
    RefreshRate: "60-120Hz",
    Brightness: "2700 nits Peak"
  },

  Processor: {
    Chipset: "Google Tensor G4",
    CPU: "Octa Core",
    GPU: "Mali-G715",
    SecurityChip: "Titan M2"
  },

  Memory: {
    RAM: "12GB",
    Storage: "128GB"
  },

  Camera: {
    RearCamera: "50MP + 48MP",
    FrontCamera: "10.5MP",
    VideoRecording: "4K @60fps",
    Features: "Magic Eraser, Best Take, Night Sight, Super Res Zoom"
  },

  Battery: {
    Capacity: "4700mAh",
    Charging: "27W Fast Charging",
    WirelessCharging: "Yes",
    ReverseCharging: "Battery Share"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.3",
    NFC: "Yes",
    USB: "USB Type-C 3.2"
  },

  Design: {
    Weight: "198g",
    Build: "Aluminum Frame with Glass Back",
    Protection: "Gorilla Glass Victus 2",
    WaterResistance: "IP68"
  },

  Security: {
    FingerprintSensor: "Ultrasonic In-display",
    FaceUnlock: "Yes"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    Compass: "Yes",
    AmbientLightSensor: "Yes"
  }
},

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
      image: "/products/macbookairm4/macbookairm4.jpg",
      images: [
  "/products/macbookairm4/2.jpg",
  "/products/macbookairm4/3.jpg",
  "/products/macbookairm4/4.jpg"
],
      category: "laptop",
      battery: "18 Hours",
      camera: "12MP Center Stage",
      display: "13.6 inch Liquid Retina",
      processor: "Apple M4",
      highlights: [
  "Apple M4 Chip",
  "16GB Unified Memory",
  "Liquid Retina Display",
  "Up to 18 Hours Battery Life",
  "Apple Intelligence Ready",
  "12MP Center Stage Camera",
  "MagSafe 3 Charging",
  "Touch ID",
  "Fanless Silent Design",
  "Ultra Thin & Lightweight"
],

specifications: {
  General: {
    Brand: "Apple",
    Model: "MacBook Air M4",
    LaunchYear: "2025",
    OperatingSystem: "macOS Sequoia",
    AppleIntelligence: "Supported"
  },

  Display: {
    Size: "13.6 inch",
    Type: "Liquid Retina",
    Resolution: "2560 x 1664",
    Brightness: "500 nits",
    ColorSupport: "1 Billion Colors, P3 Wide Color"
  },

  Processor: {
    Chipset: "Apple M4",
    CPU: "10-Core CPU",
    GPU: "10-Core GPU",
    NeuralEngine: "16-Core Neural Engine"
  },

  Memory: {
    RAM: "16GB Unified Memory",
    Storage: "256GB SSD"
  },

  Battery: {
    BatteryLife: "Up to 18 Hours",
    Charging: "MagSafe 3",
    FastCharging: "Supported"
  },

  Camera: {
    Webcam: "12MP Center Stage Camera",
    VideoRecording: "1080p HD"
  },

  Audio: {
    Speakers: "4-Speaker Sound System",
    SpatialAudio: "Yes",
    DolbyAtmos: "Yes"
  },

  Connectivity: {
    WiFi: "Wi-Fi 6E",
    Bluetooth: "v5.3"
  },

  Ports: {
    Thunderbolt: "2 x Thunderbolt 4 (USB-C)",
    MagSafe: "Yes",
    HeadphoneJack: "3.5mm"
  },

  Design: {
    Weight: "1.24kg",
    Build: "Aluminum Unibody",
    Colors: "Sky Blue, Silver, Starlight, Midnight"
  },

  Security: {
    TouchID: "Yes",
    SecureEnclave: "Yes"
  }
},

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
      image: "/products/asusrog/asusrog.jpg",
      images: [
  "/products/asusrog/2.jpg",
  "/products/asusrog/3.jpg",
  "/products/asusrog/4.jpg"
],
      category: "laptop",
      battery: "90Wh",
      camera: "1080p",
      display: "16 inch OLED 240Hz",
      processor: "Intel Core Ultra 9",
highlights: [
  "Intel Core Ultra 9 Processor",
  "NVIDIA RTX 4070 Graphics",
  "16-inch ROG Nebula OLED Display",
  "240Hz Refresh Rate",
  "32GB LPDDR5X RAM",
  "1TB SSD Storage",
  "Dolby Vision & Dolby Atmos",
  "Ultra-Slim Premium Aluminum Chassis",
  "Wi-Fi 6E",
  "90Wh Battery"
],

specifications: {
  General: {
    Brand: "ASUS",
    Model: "ROG Zephyrus G16",
    LaunchYear: "2024",
    OperatingSystem: "Windows 11 Home",
    Category: "Gaming Laptop"
  },

  Display: {
    Size: "16 inch",
    Type: "ROG Nebula OLED",
    Resolution: "2560 x 1600",
    RefreshRate: "240Hz",
    ResponseTime: "0.2ms",
    ColorGamut: "100% DCI-P3",
    Brightness: "500 nits"
  },

  Processor: {
    Chipset: "Intel Core Ultra 9 185H",
    Cores: "16 Cores",
    Threads: "22 Threads",
    MaxTurboFrequency: "5.1GHz",
    NPU: "Intel AI Boost"
  },

  Graphics: {
    GPU: "NVIDIA GeForce RTX 4070 Laptop GPU",
    VRAM: "8GB GDDR6",
    MaxTGP: "105W"
  },

  Memory: {
    RAM: "32GB LPDDR5X",
    Storage: "1TB PCIe 4.0 SSD"
  },

  Battery: {
    Capacity: "90Wh",
    FastCharging: "Supported"
  },

  Audio: {
    Speakers: "6-Speaker System",
    DolbyAtmos: "Yes",
    AI_Noise_Cancellation: "Yes"
  },

  Connectivity: {
    WiFi: "Wi-Fi 6E",
    Bluetooth: "v5.3"
  },

  Ports: {
    Thunderbolt4: "1",
    USB_C: "1",
    USB_A: "2",
    HDMI: "2.1",
    SDCardReader: "UHS-II",
    HeadphoneJack: "3.5mm"
  },

  Design: {
    Weight: "1.85kg",
    Build: "CNC Aluminum Chassis",
    Thickness: "14.9mm"
  },

  Security: {
    WindowsHello: "Supported"
  }
},

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
      image: "/products/lenovolegion/lenovolegion.jpg",
      images: [
  "/products/lenovolegion/2.jpg",
  "/products/lenovolegion/3.jpg",
  "/products/lenovolegion/4.jpg"
],
      category: "laptop",
      battery: "99Wh",
      camera: "1080p",
      display: "16 inch QHD+ 240Hz",
      processor: "Intel Core i9",
      highlights: [
  "Intel Core i9-14900HX Processor",
  "NVIDIA RTX 4070 Graphics",
  "16-inch QHD+ Gaming Display",
  "240Hz Refresh Rate",
  "32GB DDR5 RAM",
  "1TB PCIe Gen4 SSD",
  "99.99Wh Battery",
  "Per-Key RGB Keyboard",
  "Wi-Fi 7 Support",
  "Premium Aluminum Chassis"
],

specifications: {
  General: {
    Brand: "Lenovo",
    Model: "Legion 7i",
    LaunchYear: "2024",
    OperatingSystem: "Windows 11 Home",
    Category: "Gaming Laptop"
  },

  Display: {
    Size: "16 inch",
    Type: "IPS",
    Resolution: "2560 x 1600",
    RefreshRate: "240Hz",
    ResponseTime: "3ms",
    Brightness: "500 nits",
    ColorGamut: "100% sRGB"
  },

  Processor: {
    Chipset: "Intel Core i9-14900HX",
    Cores: "24 Cores",
    Threads: "32 Threads",
    MaxTurboFrequency: "5.8GHz",
    AIChip: "Lenovo LA1 + LA3"
  },

  Graphics: {
    GPU: "NVIDIA GeForce RTX 4070 Laptop GPU",
    VRAM: "8GB GDDR6",
    MaxTGP: "140W",
    Features: "DLSS 3.5, Advanced Optimus, G-SYNC"
  },

  Memory: {
    RAM: "32GB DDR5 5600MHz",
    Storage: "1TB PCIe Gen4 SSD"
  },

  Battery: {
    Capacity: "99.99Wh",
    FastCharging: "Super Rapid Charge"
  },

  Audio: {
    Speakers: "2 x 2W Harman Speakers",
    NahimicAudio: "Yes",
    DolbyVision: "Supported"
  },

  Camera: {
    Webcam: "1080p FHD",
    PrivacyShutter: "E-Shutter"
  },

  Connectivity: {
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.3"
  },

  Ports: {
    Thunderbolt4: "1",
    USB_C: "2",
    USB_A: "2",
    HDMI: "2.1",
    SDCardReader: "4-in-1",
    HeadphoneJack: "3.5mm"
  },

  Design: {
    Weight: "2.24kg",
    Build: "Aluminum Chassis",
    Thickness: "17.6mm - 19.8mm",
    Keyboard: "Per-Key RGB"
  },

  Security: {
    EShutter: "Yes",
    TPM: "Yes"
  }
},

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
      image: "/products/dellxps14/dellxps14.jpg",
      images: [
  "/products/dellxps14/2.jpg",
  "/products/dellxps14/3.jpg",
  "/products/dellxps14/4.jpg"
],
      category: "laptop",
      battery: "70Wh",
      camera: "1080p",
      display: "14.5 inch OLED",
      processor: "Intel Core Ultra 7",
      highlights: [
  "Intel Core Ultra 7 Processor",
  "NVIDIA RTX 4050 Graphics",
  "14.5-inch 3.2K OLED Display",
  "120Hz Refresh Rate",
  "Premium CNC Aluminum Design",
  "Dolby Vision & Dolby Atmos",
  "Windows Studio Effects AI",
  "Thunderbolt 4 Connectivity",
  "Ultra-Thin & Lightweight",
  "All-Day Battery Life"
],

specifications: {
  General: {
    Brand: "Dell",
    Model: "XPS 14",
    LaunchYear: "2024",
    OperatingSystem: "Windows 11 Home",
    Category: "Premium Creator Laptop"
  },

  Display: {
    Size: "14.5 inch",
    Type: "OLED",
    Resolution: "3200 x 2000",
    RefreshRate: "120Hz",
    Brightness: "500 nits",
    HDR: "Dolby Vision"
  },

  Processor: {
    Chipset: "Intel Core Ultra 7 155H",
    Cores: "16 Cores",
    Threads: "22 Threads",
    MaxTurboFrequency: "4.8GHz",
    NPU: "Intel AI Boost"
  },

  Graphics: {
    GPU: "NVIDIA GeForce RTX 4050 Laptop GPU",
    VRAM: "6GB GDDR6",
    Features: "DLSS 3, Ray Tracing"
  },

  Memory: {
    RAM: "32GB LPDDR5X",
    Storage: "1TB PCIe Gen4 SSD"
  },

  Battery: {
    Capacity: "69.5Wh",
    FastCharging: "Supported",
    Adapter: "100W USB-C"
  },

  Audio: {
    Speakers: "Quad Speaker Setup",
    DolbyAtmos: "Yes",
    Microphones: "Dual Studio Microphones"
  },

  Camera: {
    Webcam: "1080p FHD IR Camera",
    WindowsHello: "Supported"
  },

  Connectivity: {
    WiFi: "Wi-Fi 6E",
    Bluetooth: "v5.3"
  },

  Ports: {
    Thunderbolt4: "3 x Thunderbolt 4",
    HeadphoneJack: "3.5mm",
    MicroSDCardReader: "Yes"
  },

  Design: {
    Weight: "1.68kg",
    Build: "CNC Aluminum",
    Colors: "Platinum, Graphite"
  },

  Security: {
    WindowsHello: "Yes",
    IRFaceRecognition: "Yes"
  }
},

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
      image: "/products/iphone16/iphone16.jpg",
      images: [
  "/products/iphone16/2.jpg",
  "/products/iphone16/3.jpg",
  "/products/iphone16/4.jpg"
],
      category: "mobile",
      battery: "3561mAh",
      camera: "48MP",
      display: "6.1 inch OLED",
      processor: "A18",
      highlights: [
  "A18 Chip",
  "48MP Fusion Camera",
  "Dynamic Island",
  "Camera Control Button",
  "Apple Intelligence Support",
  "Super Retina XDR OLED Display",
  "USB-C Connectivity",
  "Face ID Security",
  "Wi-Fi 7 Support",
  "IP68 Water Resistance"
],

specifications: {
  General: {
    Brand: "Apple",
    Model: "iPhone 16",
    LaunchYear: "2024",
    OperatingSystem: "iOS 18",
    SIMType: "Dual SIM (Nano-SIM + eSIM)"
  },

  Display: {
    Size: "6.1 inch",
    Type: "Super Retina XDR OLED",
    Resolution: "2556 x 1179",
    RefreshRate: "60Hz",
    Brightness: "2000 nits Peak",
    Features: "Dynamic Island"
  },

  Processor: {
    Chipset: "Apple A18",
    CPU: "6-Core CPU",
    GPU: "5-Core GPU",
    NeuralEngine: "16-Core Neural Engine"
  },

  Memory: {
    RAM: "8GB",
    Storage: "128GB"
  },

  Camera: {
    RearCamera: "48MP Fusion + 12MP Ultra Wide",
    FrontCamera: "12MP TrueDepth",
    VideoRecording: "4K Dolby Vision up to 60fps",
    Features: "Photonic Engine, Night Mode, Smart HDR 5, Macro Photography"
  },

  Battery: {
    BatteryLife: "Up to 22 Hours Video Playback",
    Charging: "USB-C Fast Charging",
    WirelessCharging: "MagSafe & Qi2 Supported"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.3",
    NFC: "Yes",
    USB: "USB-C"
  },

  Design: {
    Weight: "170g",
    Build: "Aluminum Frame with Color-Infused Glass Back",
    Protection: "Ceramic Shield",
    WaterResistance: "IP68"
  },

  Security: {
    FaceID: "Yes",
    FingerprintSensor: "No"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    AmbientLightSensor: "Yes",
    Barometer: "Yes"
  }
},

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
      image: "/products/iphone16pro/iphone16pro.jpg",
      images: [
  "/products/iphone16pro/2.jpg",
  "/products/iphone16pro/3.jpg",
  "/products/iphone16pro/4.jpg"
],
      category: "mobile",
      battery: "3582mAh",
      camera: "48MP Triple Camera",
      display: "6.3 inch OLED",
      processor: "A18 Pro",
      highlights: [
  "A18 Pro Chip",
  "48MP Fusion Camera",
  "48MP Ultra Wide Camera",
  "5x Telephoto Zoom",
  "120Hz ProMotion Display",
  "Apple Intelligence Support",
  "Camera Control Button",
  "Titanium Design",
  "Wi-Fi 7 Support",
  "IP68 Water Resistance"
],

specifications: {
  General: {
    Brand: "Apple",
    Model: "iPhone 16 Pro",
    LaunchYear: "2024",
    OperatingSystem: "iOS 18",
    SIMType: "Dual SIM (Nano-SIM + eSIM)"
  },

  Display: {
    Size: "6.3 inch",
    Type: "Super Retina XDR OLED",
    Resolution: "2622 x 1206",
    RefreshRate: "1-120Hz ProMotion",
    Brightness: "2000 nits Peak",
    Features: "Always-On Display, Dynamic Island"
  },

  Processor: {
    Chipset: "Apple A18 Pro",
    CPU: "6-Core CPU",
    GPU: "6-Core GPU",
    NeuralEngine: "16-Core Neural Engine"
  },

  Memory: {
    RAM: "8GB",
    Storage: "128GB"
  },

  Camera: {
    RearCamera: "48MP Fusion + 48MP Ultra Wide + 12MP Telephoto",
    FrontCamera: "12MP TrueDepth",
    VideoRecording: "4K Dolby Vision up to 120fps",
    OpticalZoom: "5x Telephoto",
    Features: "ProRAW, ProRes, Night Mode, Spatial Video"
  },

  Battery: {
    Capacity: "3582mAh",
    BatteryLife: "Up to 27 Hours Video Playback",
    Charging: "USB-C Fast Charging",
    WirelessCharging: "MagSafe & Qi2 Supported"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.3",
    NFC: "Yes",
    USB: "USB-C USB 3"
  },

  Design: {
    Weight: "199g",
    Build: "Grade 5 Titanium Frame",
    Protection: "Ceramic Shield",
    WaterResistance: "IP68"
  },

  Security: {
    FaceID: "Yes",
    FingerprintSensor: "No"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    AmbientLightSensor: "Yes",
    Barometer: "Yes",
    LiDARScanner: "Yes"
  }
},

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
      image: "/products/galaxys25/galaxys25.jpg",
      images: [
  "/products/galaxys25/2.jpg",
  "/products/galaxys25/3.jpg",
  "/products/galaxys25/4.jpg"
],
      category: "mobile",
      battery: "4200mAh",
      camera: "50MP",
      display: "6.2 inch AMOLED",
      processor: "Snapdragon 8 Elite",
      highlights: [
  "Snapdragon 8 Elite for Galaxy",
  "50MP Triple Camera",
  "Galaxy AI Features",
  "120Hz Dynamic AMOLED 2X Display",
  "4000mAh Battery",
  "Corning Gorilla Glass Victus 2",
  "IP68 Water Resistance",
  "Wireless Charging",
  "Wi-Fi 7 Support",
  "7 Years of Android Updates"
],

specifications: {
  General: {
    Brand: "Samsung",
    Model: "Galaxy S25",
    LaunchYear: "2025",
    OperatingSystem: "Android 15",
    UI: "One UI 7",
    SIMType: "Dual SIM"
  },

  Display: {
    Size: "6.2 inch",
    Type: "Dynamic AMOLED 2X",
    Resolution: "2340 x 1080",
    RefreshRate: "1-120Hz",
    Brightness: "2600 nits"
  },

  Processor: {
    Chipset: "Snapdragon 8 Elite for Galaxy",
    CPU: "Octa Core",
    GPU: "Adreno 830",
    AIEngine: "Galaxy AI"
  },

  Memory: {
    RAM: "12GB",
    Storage: "256GB"
  },

  Camera: {
    RearCamera: "50MP + 12MP + 10MP",
    FrontCamera: "12MP",
    VideoRecording: "8K @30fps",
    Features: "Nightography, OIS, Galaxy AI Editing"
  },

  Battery: {
    Capacity: "4000mAh",
    Charging: "25W Fast Charging",
    WirelessCharging: "15W Wireless Charging",
    ReverseWirelessCharging: "Yes"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.4",
    NFC: "Yes",
    USB: "USB Type-C 3.2"
  },

  Design: {
    Weight: "162g",
    Build: "Armor Aluminum Frame",
    Protection: "Gorilla Glass Victus 2",
    WaterResistance: "IP68"
  },

  Security: {
    FingerprintSensor: "Ultrasonic In-display",
    FaceUnlock: "Yes"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    Compass: "Yes",
    AmbientLightSensor: "Yes"
  }
},
    
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
      image: "/products/galaxys25ultra/galaxys25ultra.jpg",
      images: [
  "/products/galaxys25ultra/2.jpg",
  "/products/galaxys25ultra/3.jpg",
  "/products/galaxys25ultra/4.jpg"
],
      category: "mobile",
      battery: "5000mAh",
      camera: "200MP",
      display: "6.9 inch AMOLED",
      processor: "Snapdragon 8 Elite",
      highlights: [
  "Snapdragon 8 Elite for Galaxy",
  "200MP Quad Camera System",
  "Galaxy AI Features",
  "6.9-inch Dynamic AMOLED 2X",
  "120Hz Adaptive Refresh Rate",
  "5000mAh Battery",
  "Built-in S Pen",
  "Titanium Frame",
  "IP68 Water Resistance",
  "7 Years of Android Updates"
],

specifications: {
  General: {
    Brand: "Samsung",
    Model: "Galaxy S25 Ultra",
    LaunchYear: "2025",
    OperatingSystem: "Android 15",
    UI: "One UI 7",
    SIMType: "Dual SIM"
  },

  Display: {
    Size: "6.9 inch",
    Type: "Dynamic AMOLED 2X",
    Resolution: "3120 x 1440",
    RefreshRate: "1-120Hz",
    Brightness: "2600 nits"
  },

  Processor: {
    Chipset: "Snapdragon 8 Elite for Galaxy",
    CPU: "Octa Core",
    GPU: "Adreno 830",
    AIEngine: "Galaxy AI"
  },

  Memory: {
    RAM: "12GB",
    Storage: "256GB"
  },

  Camera: {
    RearCamera: "200MP + 50MP + 50MP + 10MP",
    FrontCamera: "12MP",
    VideoRecording: "8K @30fps",
    OpticalZoom: "5x Optical Zoom",
    Features: "Nightography, OIS, Space Zoom, Galaxy AI Editing"
  },

  Battery: {
    Capacity: "5000mAh",
    Charging: "45W Fast Charging",
    WirelessCharging: "15W Wireless Charging",
    ReverseWirelessCharging: "Yes"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.4",
    NFC: "Yes",
    USB: "USB Type-C 3.2"
  },

  Design: {
    Weight: "218g",
    Build: "Titanium Frame",
    Protection: "Corning Gorilla Armor 2",
    WaterResistance: "IP68",
    S_Pen: "Built-in"
  },

  Security: {
    FingerprintSensor: "Ultrasonic In-display",
    FaceUnlock: "Yes"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    Compass: "Yes",
    AmbientLightSensor: "Yes",
    Barometer: "Yes"
  }
},

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
      image: "/products/oneplus12/oneplus12.jpg",
      images: [
  "/products/oneplus12/2.jpg",
  "/products/oneplus12/3.jpg",
  "/products/oneplus12/4.jpg"
],
      category: "mobile",
      battery: "5400mAh",
      camera: "50MP",
      display: "6.82 inch AMOLED",
      processor: "Snapdragon 8 Gen 3",
      highlights: [
  "Snapdragon 8 Gen 3 Processor",
  "50MP Hasselblad Triple Camera",
  "6.82-inch 2K AMOLED Display",
  "120Hz LTPO Refresh Rate",
  "5400mAh Battery",
  "100W SUPERVOOC Charging",
  "50W Wireless Charging",
  "IP65 Water Resistance",
  "OxygenOS 14",
  "Wi-Fi 7 Support"
],

specifications: {
  General: {
    Brand: "OnePlus",
    Model: "OnePlus 12",
    LaunchYear: "2024",
    OperatingSystem: "Android 14",
    UI: "OxygenOS 14",
    SIMType: "Dual SIM"
  },

  Display: {
    Size: "6.82 inch",
    Type: "LTPO AMOLED",
    Resolution: "3168 x 1440",
    RefreshRate: "1-120Hz",
    Brightness: "4500 nits Peak"
  },

  Processor: {
    Chipset: "Snapdragon 8 Gen 3",
    CPU: "Octa Core",
    GPU: "Adreno 750",
    AIEngine: "Qualcomm AI Engine"
  },

  Memory: {
    RAM: "12GB",
    Storage: "256GB"
  },

  Camera: {
    RearCamera: "50MP + 64MP + 48MP",
    FrontCamera: "32MP",
    VideoRecording: "8K @24fps",
    Features: "Hasselblad Camera System, OIS, 3x Optical Zoom"
  },

  Battery: {
    Capacity: "5400mAh",
    Charging: "100W SUPERVOOC",
    WirelessCharging: "50W AIRVOOC",
    ReverseCharging: "Yes"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.4",
    NFC: "Yes",
    USB: "USB Type-C 3.2"
  },

  Design: {
    Weight: "220g",
    Build: "Glass Back with Aluminum Frame",
    Protection: "Gorilla Glass Victus 2",
    WaterResistance: "IP65"
  },

  Security: {
    FingerprintSensor: "In-display Optical",
    FaceUnlock: "Yes"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    Compass: "Yes",
    AmbientLightSensor: "Yes",
    InfraredBlaster: "Yes"
  }
},

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
      image: "/products/xiaomi15/xiaomi15.jpg",
      images: [
  "/products/xiaomi15/1.jpg",
  "/products/xiaomi15/2.jpg",
  "/products/xiaomi15/3.jpg"
],
      category: "mobile",
      battery: "5400mAh",
      camera: "50MP Leica",
      display: "6.36 inch AMOLED",
      processor: "Snapdragon 8 Elite",
      highlights: [
  "Snapdragon 8 Elite Processor",
  "Leica Triple Camera System",
  "50MP Main Camera",
  "6.36-inch AMOLED Display",
  "120Hz Refresh Rate",
  "5240mAh Battery",
  "90W HyperCharge",
  "50W Wireless Charging",
  "IP68 Water Resistance",
  "Wi-Fi 7 Support"
],

specifications: {
  General: {
    Brand: "Xiaomi",
    Model: "Xiaomi 15",
    LaunchYear: "2025",
    OperatingSystem: "Android 15",
    UI: "HyperOS 2",
    SIMType: "Dual SIM"
  },

  Display: {
    Size: "6.36 inch",
    Type: "LTPO AMOLED",
    Resolution: "2670 x 1200",
    RefreshRate: "1-120Hz",
    Brightness: "3200 nits Peak"
  },

  Processor: {
    Chipset: "Snapdragon 8 Elite",
    CPU: "Octa Core",
    GPU: "Adreno 830",
    AIEngine: "Xiaomi HyperAI"
  },

  Memory: {
    RAM: "12GB",
    Storage: "256GB"
  },

  Camera: {
    RearCamera: "50MP + 50MP + 50MP",
    FrontCamera: "32MP",
    VideoRecording: "8K @30fps",
    Features: "Leica Optics, OIS, 2.6x Optical Zoom, Night Mode"
  },

  Battery: {
    Capacity: "5240mAh",
    Charging: "90W HyperCharge",
    WirelessCharging: "50W Wireless Charging",
    ReverseCharging: "Yes"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.4",
    NFC: "Yes",
    USB: "USB Type-C 3.2"
  },

  Design: {
    Weight: "191g",
    Build: "Aluminum Frame with Glass Back",
    Protection: "Xiaomi Shield Glass",
    WaterResistance: "IP68"
  },

  Security: {
    FingerprintSensor: "Ultrasonic In-display",
    FaceUnlock: "Yes"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    Compass: "Yes",
    AmbientLightSensor: "Yes",
    InfraredBlaster: "Yes"
  }
},

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
      image: "/products/realmegt7/realmegt7.jpg",
      images: [
  "/products/realmegt7/1.jpg",
  "/products/realmegt7/2.jpg",
  "/products/realmegt7/3.jpg"
],
      category: "mobile",
      battery: "7000mAh",
      camera: "50MP",
      display: "6.78 inch AMOLED",
      processor: "Dimensity 9400",
      highlights: [
  "MediaTek Dimensity 9400e",
  "7000mAh Titan Battery",
  "120W SUPERVOOC Charging",
  "50MP Sony OIS Camera",
  "120Hz AMOLED Display",
  "6000 Nits Peak Brightness",
  "IP69 Water Resistance",
  "Realme AI Features",
  "5G Connectivity",
  "Vapor Chamber Cooling System"
],

specifications: {
  General: {
    Brand: "Realme",
    Model: "Realme GT 7",
    LaunchYear: "2025",
    OperatingSystem: "Android 15",
    UI: "realme UI 6.0",
    SIMType: "Dual SIM"
  },

  Display: {
    Size: "6.78 inch",
    Type: "AMOLED",
    Resolution: "2780 x 1264",
    RefreshRate: "120Hz",
    Brightness: "6000 nits Peak"
  },

  Processor: {
    Chipset: "MediaTek Dimensity 9400e",
    CPU: "Octa Core",
    GPU: "Immortalis-G720",
    AIEngine: "MediaTek NPU 890"
  },

  Memory: {
    RAM: "12GB",
    Storage: "256GB"
  },

  Camera: {
    RearCamera: "50MP + 50MP + 8MP",
    FrontCamera: "32MP",
    VideoRecording: "4K @60fps",
    Features: "OIS, Night Mode, AI Photography"
  },

  Battery: {
    Capacity: "7000mAh",
    Charging: "120W SUPERVOOC",
    ReverseCharging: "Yes"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.4",
    NFC: "Yes",
    USB: "USB Type-C"
  },

  Design: {
    Weight: "206g",
    Build: "Glass Front with Premium Frame",
    WaterResistance: "IP69"
  },

  Security: {
    FingerprintSensor: "In-display Optical",
    FaceUnlock: "Yes"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    Compass: "Yes",
    AmbientLightSensor: "Yes",
    InfraredBlaster: "Yes"
  }
},

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
  image: "/products/iqoo13/iqoo13.jpg",
  images: [ 
    "/products/iqoo13/2.jpg",
    "/products/iqoo13/3.jpg",
    "/products/iqoo13/4.jpg"
  ],
  category: "mobile",

  battery: "6000mAh",
  camera: "50MP Triple Camera",
  display: "6.82 inch AMOLED",
  processor: "Snapdragon 8 Elite",

highlights: [
  "Snapdragon 8 Elite Processor",
  "144Hz AMOLED Display",
  "50MP Triple Camera",
  "6000mAh Battery",
  "120W FlashCharge",
  "2K Resolution Display",
  "IP68 + IP69 Rating",
  "Monster Halo RGB Light",
  "Gaming-Focused Performance",
  "Wi-Fi 7 Support"
],

specifications: {
  General: {
    Brand: "iQOO",
    Model: "iQOO 13",
    LaunchYear: "2025",
    OperatingSystem: "Android 15",
    UI: "Funtouch OS 15",
    SIMType: "Dual SIM"
  },

  Display: {
    Size: "6.82 inch",
    Type: "LTPO AMOLED",
    Resolution: "3168 x 1440",
    RefreshRate: "144Hz",
    Brightness: "4500 nits Peak"
  },

  Processor: {
    Chipset: "Snapdragon 8 Elite",
    CPU: "Octa Core",
    GPU: "Adreno 830",
    GamingChip: "Q2 Supercomputing Chip"
  },

  Memory: {
    RAM: "12GB",
    Storage: "256GB"
  },

  Camera: {
    RearCamera: "50MP + 50MP + 50MP",
    FrontCamera: "32MP",
    VideoRecording: "8K @30fps",
    Features: "OIS, Super Night Mode, Telephoto Zoom"
  },

  Battery: {
    Capacity: "6000mAh",
    Charging: "120W FlashCharge",
    ReverseCharging: "Yes"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.4",
    NFC: "Yes",
    USB: "USB Type-C 3.2"
  },

  Design: {
    Weight: "213g",
    Build: "Glass Back with Metal Frame",
    WaterResistance: "IP68/IP69",
    RGBLighting: "Monster Halo Light"
  },

  Security: {
    FingerprintSensor: "Ultrasonic In-display",
    FaceUnlock: "Yes"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    Compass: "Yes",
    AmbientLightSensor: "Yes",
    InfraredBlaster: "Yes"
  }
},
    
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
      image: "/products/vivox200/vivox200.jpg",
      images: [
  "/products/vivox200/1.jpg",
  "/products/vivox200/2.jpg",
  "/products/vivox200/3.jpg"
],
      category: "mobile",
      battery: "5800mAh",
      camera: "50MP Zeiss",
      display: "6.67 inch AMOLED",
      processor: "Dimensity 9400",
      highlights: [
  "MediaTek Dimensity 9400",
  "ZEISS Triple Camera System",
  "50MP Main Camera",
  "6.67-inch AMOLED Display",
  "120Hz Refresh Rate",
  "5800mAh Battery",
  "90W FlashCharge",
  "IP68 + IP69 Rating",
  "V3+ Imaging Chip",
  "Wi-Fi 7 Support"
],

specifications: {
  General: {
    Brand: "Vivo",
    Model: "Vivo X200",
    LaunchYear: "2025",
    OperatingSystem: "Android 15",
    UI: "Funtouch OS 15",
    SIMType: "Dual SIM"
  },

  Display: {
    Size: "6.67 inch",
    Type: "AMOLED",
    Resolution: "2800 x 1260",
    RefreshRate: "120Hz",
    Brightness: "4500 nits Peak"
  },

  Processor: {
    Chipset: "MediaTek Dimensity 9400",
    CPU: "Octa Core",
    GPU: "Immortalis-G925",
    ImagingChip: "V3+ Imaging Chip"
  },

  Memory: {
    RAM: "12GB",
    Storage: "256GB"
  },

  Camera: {
    RearCamera: "50MP + 50MP + 50MP",
    FrontCamera: "32MP",
    VideoRecording: "4K @60fps",
    Features: "ZEISS Optics, OIS, Telephoto Macro, Night Mode"
  },

  Battery: {
    Capacity: "5800mAh",
    Charging: "90W FlashCharge",
    ReverseCharging: "Yes"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.4",
    NFC: "Yes",
    USB: "USB Type-C 3.2"
  },

  Design: {
    Weight: "202g",
    Build: "Glass Back with Aluminum Frame",
    WaterResistance: "IP68/IP69"
  },

  Security: {
    FingerprintSensor: "In-display Optical",
    FaceUnlock: "Yes"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    Compass: "Yes",
    AmbientLightSensor: "Yes",
    InfraredBlaster: "Yes"
  }
},

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
      image: "/products/oppofindx8/oppofindx8.jpg",
      images: [
  "/products/oppofindx8/1.jpg",
  "/products/oppofindx8/2.jpg",
  "/products/oppofindx8/3.jpg"
],
      category: "mobile",
      battery: "5600mAh",
      camera: "50MP Hasselblad",
      display: "6.59 inch AMOLED",
      processor: "Dimensity 9400",
      highlights: [
  "MediaTek Dimensity 9400",
  "Hasselblad Camera System",
  "50MP Triple Camera Setup",
  "6.59-inch AMOLED Display",
  "120Hz Refresh Rate",
  "5630mAh Silicon-Carbon Battery",
  "80W SUPERVOOC Charging",
  "50W Wireless Charging",
  "IP68 + IP69 Rating",
  "Wi-Fi 7 Support"
],

specifications: {
  General: {
    Brand: "OPPO",
    Model: "Find X8",
    LaunchYear: "2025",
    OperatingSystem: "Android 15",
    UI: "ColorOS 15",
    SIMType: "Dual SIM"
  },

  Display: {
    Size: "6.59 inch",
    Type: "AMOLED",
    Resolution: "2760 x 1256",
    RefreshRate: "1-120Hz",
    Brightness: "4500 nits Peak"
  },

  Processor: {
    Chipset: "MediaTek Dimensity 9400",
    CPU: "Octa Core",
    GPU: "Immortalis-G925",
    AIEngine: "OPPO AI Engine"
  },

  Memory: {
    RAM: "12GB",
    Storage: "256GB"
  },

  Camera: {
    RearCamera: "50MP + 50MP + 50MP",
    FrontCamera: "32MP",
    VideoRecording: "4K @60fps",
    Features: "Hasselblad Tuning, OIS, 3x Optical Zoom, AI Photography"
  },

  Battery: {
    Capacity: "5630mAh",
    Charging: "80W SUPERVOOC",
    WirelessCharging: "50W AIRVOOC",
    ReverseCharging: "Yes"
  },

  Connectivity: {
    Network: "5G",
    WiFi: "Wi-Fi 7",
    Bluetooth: "v5.4",
    NFC: "Yes",
    USB: "USB Type-C 3.2"
  },

  Design: {
    Weight: "193g",
    Build: "Glass Back with Aluminum Frame",
    WaterResistance: "IP68/IP69"
  },

  Security: {
    FingerprintSensor: "Ultrasonic In-display",
    FaceUnlock: "Yes"
  },

  Sensors: {
    Accelerometer: "Yes",
    Gyroscope: "Yes",
    ProximitySensor: "Yes",
    Compass: "Yes",
    AmbientLightSensor: "Yes",
    InfraredBlaster: "Yes"
  }
},

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
      image: "/products/hpomen/hpomen.jpg",
      images: [
  "/products/hpomen/2.jpg",
  "/products/hpomen/3.jpg",
  "/products/hpomen/4.jpg"
],
      category: "laptop",
      battery: "83Wh",
      camera: "1080p",
      display: "16.1 inch QHD 240Hz",
      processor: "Ryzen 9",
      highlights: [
  "Intel Core i7-14650HX Processor",
  "NVIDIA RTX 4070 Graphics",
  "16.1-inch QHD Gaming Display",
  "240Hz Refresh Rate",
  "32GB DDR5 RAM",
  "1TB PCIe Gen4 SSD",
  "RGB Backlit Keyboard",
  "OMEN Tempest Cooling",
  "Wi-Fi 6E Support",
  "83Wh Battery"
],

specifications: {
  General: {
    Brand: "HP",
    Model: "OMEN 16",
    LaunchYear: "2024",
    OperatingSystem: "Windows 11 Home",
    Category: "Gaming Laptop"
  },

  Display: {
    Size: "16.1 inch",
    Type: "IPS",
    Resolution: "2560 x 1440",
    RefreshRate: "240Hz",
    ResponseTime: "3ms",
    Brightness: "300 nits",
    ColorGamut: "100% sRGB"
  },

  Processor: {
    Chipset: "Intel Core i7-14650HX",
    Cores: "16 Cores",
    Threads: "24 Threads",
    MaxTurboFrequency: "5.2GHz"
  },

  Graphics: {
    GPU: "NVIDIA GeForce RTX 4070 Laptop GPU",
    VRAM: "8GB GDDR6",
    Features: "DLSS 3, Ray Tracing, Advanced Optimus"
  },

  Memory: {
    RAM: "32GB DDR5",
    Storage: "1TB PCIe Gen4 SSD"
  },

  Battery: {
    Capacity: "83Wh",
    FastCharging: "Supported"
  },

  Audio: {
    Speakers: "Dual Speakers",
    DTSXUltra: "Yes"
  },

  Camera: {
    Webcam: "1080p FHD",
    PrivacyShutter: "Yes"
  },

  Connectivity: {
    WiFi: "Wi-Fi 6E",
    Bluetooth: "v5.3"
  },

  Ports: {
    USB_C: "2",
    USB_A: "3",
    HDMI: "2.1",
    RJ45: "Yes",
    HeadphoneJack: "3.5mm"
  },

  Design: {
    Weight: "2.37kg",
    Build: "Premium Plastic & Metal",
    Keyboard: "4-Zone RGB Backlit"
  },

  Security: {
    TPM: "Yes"
  }
},

      amazon: "https://www.amazon.in/s?k=HP+Omen+16",
      flipkart: "https://www.flipkart.com/search?q=HP+Omen+16",
      official: "https://www.hp.com/in-en/shop/"
    }
  ]);
}