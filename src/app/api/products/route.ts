import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([

    {
  id: "xiaomi17t",
  name: "Xiaomi 17T",
  brand: "Xiaomi",
  price: 59999,
  rating: 4.8,

  image: "/products/xiaomi17t/xiaomi17t.jpg",

  images: [
    "/products/xiaomi17t/2.jpg",
    "/products/xiaomi17t/3.jpg",
    "/products/xiaomi17t/4.jpg",
  ],

  category: "mobile",

  battery: "6500mAh",
  camera: "50MP + 50MP + 12MP",
  display: "6.59 inch 1.5K AMOLED 120Hz",
  processor: "MediaTek Dimensity 8500 Ultra",

  highlights: [
    "Leica Triple Camera System",
    "50MP Leica Main Camera",
    "50MP 5x Periscope Telephoto",
    "6.59-inch 1.5K AMOLED Display",
    "120Hz Refresh Rate",
    "MediaTek Dimensity 8500 Ultra",
    "6500mAh Silicon Carbon Battery",
    "67W HyperCharge",
    "IP68 Water Resistance",
    "HyperOS 3 based on Android 16"
  ],

  specifications: {
    General: {
      Brand: "Xiaomi",
      Model: "Xiaomi 17T",
      LaunchYear: "2026",
      OperatingSystem: "HyperOS 3",
      AndroidVersion: "Android 16",
      SIMType: "Dual SIM"
    },

    Display: {
      Size: "6.59 inch",
      Type: "AMOLED",
      Resolution: "2756 x 1268",
      RefreshRate: "120Hz",
      Brightness: "3500 nits",
      Protection: "Corning Gorilla Glass 7i",
      HDR: "HDR10+ Dolby Vision"
    },

    Processor: {
      Chipset: "MediaTek Dimensity 8500 Ultra",
      Process: "4nm",
      GPU: "Mali-G720 MC8",
      AI: "NPU 880"
    },

    Memory: {
      RAM: "12GB LPDDR5X",
      Storage: "256GB"
    },

    Camera: {
      RearCamera: "50MP Main + 50MP 5x Telephoto + 12MP Ultra Wide",
      FrontCamera: "32MP",
      VideoRecording: "4K 60fps",
      Features: "Leica Optics, AI Zoom, HDR10+, Night Mode"
    },

    Battery: {
      Capacity: "6500mAh",
      Charging: "67W HyperCharge",
      ReverseCharging: "22.5W",
      Type: "Silicon Carbon"
    },

    Connectivity: {
      Network: "5G",
      WiFi: "Wi-Fi 6",
      Bluetooth: "Bluetooth 6.0",
      NFC: "Yes",
      USB: "USB Type-C"
    },

    Design: {
      Weight: "200g",
      Thickness: "8.17mm",
      WaterResistance: "IP68"
    },

    Security: {
      FingerprintSensor: "In-display",
      FaceUnlock: "Yes"
    },

    Sensors: {
      Accelerometer: "Yes",
      Gyroscope: "Yes",
      AmbientLightSensor: "Yes",
      Compass: "Yes",
      IRBlaster: "Yes",
      NFC: "Yes"
    }
  },

  amazon: "https://www.amazon.in/XIAOMI-Flagship-Cameras-UltraPure-Segment/dp/B0GYY8ZNP3",
  flipkart: "NOT AVAILABLE",
  official: "https://www.mi.com/in/product/xiaomi-17t/"
},
{
  id: "galaxys26ultra",
  name: "Samsung Galaxy S26 Ultra",
  brand: "Samsung",
  price: 129999,
  rating: 4.9,

  image: "/products/galaxys26ultra/galaxys26ultra.jpg",

  images: [
    "/products/galaxys26ultra/2.jpg",
    "/products/galaxys26ultra/3.jpg",
    "/products/galaxys26ultra/4.jpg",
  ],

  category: "mobile",

  battery: "5000mAh",
  camera: "200MP Quad Camera",
  display: "6.9 inch Dynamic AMOLED 2X",
  processor: "Snapdragon 8 Elite Gen 5 for Galaxy",

  highlights: [
    "200MP Main Camera",
    "50MP Ultra Wide Camera",
    "50MP Periscope Telephoto",
    "6.9-inch QHD+ AMOLED Display",
    "120Hz Adaptive Refresh Rate",
    "Galaxy AI Features",
    "Privacy Display Technology",
    "S Pen Support",
    "60W Fast Charging",
    "IP68 Water Resistance"
  ],

  specifications: {
    General: {
      Brand: "Samsung",
      Model: "Galaxy S26 Ultra",
      LaunchYear: "2026",
      OperatingSystem: "Android 16",
      UI: "One UI 8.5",
      SIMType: "Dual SIM"
    },

    Display: {
      Size: "6.9 inch",
      Type: "Dynamic AMOLED 2X",
      Resolution: "3120 x 1440",
      RefreshRate: "1-120Hz Adaptive",
      Brightness: "2600 nits",
      Protection: "Corning Gorilla Glass Armor 2",
      Features: "HDR10+, Vision Booster, Privacy Display"
    },

    Processor: {
      Chipset: "Snapdragon 8 Elite Gen 5 for Galaxy",
      Process: "3nm",
      CPU: "Octa Core",
      GPU: "Adreno 840",
      AIEngine: "Galaxy AI"
    },

    Memory: {
      RAM: "12GB",
      Storage: "256GB",
      Variants: "12GB+256GB, 12GB+512GB, 16GB+1TB"
    },

    Camera: {
      RearCamera: "200MP Wide + 50MP Ultra Wide + 10MP Telephoto + 50MP Periscope",
      FrontCamera: "12MP",
      VideoRecording: "8K 30fps, 4K 120fps",
      OpticalZoom: "3x + 5x",
      Features: "Nightography, Galaxy AI Camera, HDR, OIS"
    },

    Battery: {
      Capacity: "5000mAh",
      Charging: "60W Fast Charging",
      WirelessCharging: "25W Wireless",
      ReverseCharging: "Yes"
    },

    Connectivity: {
      Network: "5G",
      WiFi: "Wi-Fi 7",
      Bluetooth: "v6.0",
      NFC: "Yes",
      USB: "USB Type-C"
    },

    Design: {
      Weight: "214g",
      Build: "Glass Front & Back, Aluminum Frame",
      WaterResistance: "IP68",
      Dimensions: "163.6 x 78.1 x 7.9 mm"
    },

    Security: {
      FingerprintSensor: "Ultrasonic In-Display",
      FaceUnlock: "Yes"
    },

    Sensors: {
      Accelerometer: "Yes",
      Gyroscope: "Yes",
      ProximitySensor: "Yes",
      AmbientLightSensor: "Yes",
      Compass: "Yes",
      Barometer: "Yes"
    }
  },

  amazon: "https://www.amazon.in/Samsung-Storage-Privacy-Creative-Snapdragon/dp/B0GL85WGTZ?th=1",
  flipkart: "https://www.flipkart.com/samsung-galaxy-s26-ultra-5g-white-512-gb/p/itmf4799d3841c43",
  official: "https://www.samsung.com/in/smartphones/galaxy-s26-ultra/"
},
{
  id: "galaxys26",
  name: "Samsung Galaxy S26",
  brand: "Samsung",
  price: 87999,
  rating: 4.8,

  image: "/products/galaxys26/galaxys26.jpg",

  images: [
    "/products/galaxys26/2.jpg",
    "/products/galaxys26/3.jpg",
    "/products/galaxys26/4.jpg",
  ],

  category: "mobile",

  battery: "4300mAh",
  camera: "50MP Triple Camera",
  display: "6.3 inch Dynamic AMOLED 2X",
  processor: "Snapdragon 8 Elite Gen 5 for Galaxy",

  highlights: [
    "6.3-inch Dynamic AMOLED 2X Display",
    "120Hz Adaptive Refresh Rate",
    "Snapdragon 8 Elite Gen 5 for Galaxy",
    "50MP Main Camera",
    "10MP 3x Telephoto Camera",
    "12MP Ultra-Wide Camera",
    "Galaxy AI Features",
    "Wi-Fi 7 Support",
    "IP68 Water Resistance",
    "7 Years of Software Updates"
  ],

  specifications: {
    General: {
      Brand: "Samsung",
      Model: "Galaxy S26",
      LaunchYear: "2026",
      OperatingSystem: "Android 16",
      UI: "One UI 8.5",
      SIMType: "Dual SIM (Nano-SIM + eSIM)"
    },

    Display: {
      Size: "6.3 inch",
      Type: "Dynamic AMOLED 2X",
      Resolution: "2340 x 1080",
      RefreshRate: "1-120Hz Adaptive",
      Brightness: "3000 nits Peak",
      Protection: "Corning Gorilla Glass Victus 2",
      Features: "HDR10+, Always-On Display"
    },

    Processor: {
      Chipset: "Snapdragon 8 Elite Gen 5 for Galaxy",
      Process: "3nm",
      CPU: "Octa Core",
      GPU: "Adreno 840",
      AIEngine: "Galaxy AI"
    },

    Memory: {
      RAM: "12GB",
      Storage: "256GB",
      Variants: "12GB+256GB, 12GB+512GB"
    },

    Camera: {
      RearCamera: "50MP Wide + 12MP Ultra Wide + 10MP Telephoto",
      FrontCamera: "12MP",
      VideoRecording: "8K 30fps, 4K 60fps",
      OpticalZoom: "3x Optical Zoom",
      Features: "Nightography, HDR, OIS, Galaxy AI Camera"
    },

    Battery: {
      Capacity: "4300mAh",
      Charging: "25W Fast Charging",
      WirelessCharging: "Yes",
      ReverseCharging: "Yes"
    },

    Connectivity: {
      Network: "5G",
      WiFi: "Wi-Fi 7",
      Bluetooth: "v6.0",
      NFC: "Yes",
      USB: "USB Type-C"
    },

    Design: {
      Weight: "167g",
      Build: "Glass Front & Back, Armor Aluminum Frame",
      WaterResistance: "IP68",
      Dimensions: "149.6 x 71.7 x 7.2 mm"
    },

    Security: {
      FingerprintSensor: "Ultrasonic In-Display",
      FaceUnlock: "Yes"
    },

    Sensors: {
      Accelerometer: "Yes",
      Gyroscope: "Yes",
      ProximitySensor: "Yes",
      AmbientLightSensor: "Yes",
      Compass: "Yes",
      Barometer: "Yes"
    }
  },

  amazon: "https://www.amazon.in/Samsung-Creative-ProVisual-Customized-Processor/dp/B0GL8BF2X2/ref=sr_1_1?adgrpid=58709836293&dib=eyJ2IjoiMSJ9.kD1Gxh83QLSNG_05bfQgjuOq6YPjwBvCm7OfBc7GHirOb1SgnCbShF8FqN5UY99iVif-DtQ6RG8R7t66q_RgqraXcgBnn9pewiSNrOOtFdIIq28uVcOLB02TWCIk0pShHncj-fVU5FRRWIkeDDigmk49mNVZcaEGjn-sC3jOlbu9JretbzJMOqdmfYpKhULsLrkBhU_F9VI_l8D_B59yJsKclnvUCwrI-Y4FunoCttw.4moaZ_AX1THuro9bQT_8DfGVokKS8UwZW6SrrcNTtLE&dib_tag=se&gad_source=1&hvadid=714819202763&hvdev=c&hvexpln=0&hvlocphy=1007788&hvnetw=g&hvocijid=13507048661066339713--&hvqmt=b&hvrand=13507048661066339713&hvtargid=kwd-2458904254539&hydadcr=25195_2856626&keywords=5g+samsung+galaxy+s26+price&mcid=c57aec11b1503f81bc9313e58438f1ad&qid=1782538193&sr=8-1",
  flipkart: "https://www.flipkart.com/samsung-galaxy-s26-5g-white-256-gb/p/itm0ca5d0430e1c1?pid=MOBHKGAPH5JGKK3E&lid=LSTMOBHKGAPH5JGKK3EZ3VBBR&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=8389bc71-742d-4c24-a3ff-6cf8fa838e04.MOBHKGAPH5JGKK3E.SEARCH&ppt=None&ppn=None&ssid=hg181gmlqo0000001782538224497&ov_redirect=true",
  official: "https://www.samsung.com/in/smartphones/galaxy-s26/"
},
{
  id: "oppofindx9ultra",
  name: "OPPO Find X9 Ultra",
  brand: "OPPO",
  price: 149999,
  rating: 4.9,

  image: "/products/oppofindx9ultra/oppofindx9ultra.jpg",

  images: [
    "/products/oppofindx9ultra/2.jpg",
    "/products/oppofindx9ultra/3.jpg",
    "/products/oppofindx9ultra/4.jpg",
  ],

  category: "mobile",

  battery: "7050mAh",
  camera: "200MP Penta Camera",
  display: "6.82 inch QHD+ AMOLED 144Hz",
  processor: "Snapdragon 8 Elite Gen 5",

  highlights: [
    "200MP Main Camera",
    "200MP Periscope Telephoto Camera",
    "50MP Ultra Telephoto Camera",
    "50MP Ultra-Wide Camera",
    "6.82-inch QHD+ AMOLED Display",
    "144Hz Adaptive Refresh Rate",
    "Snapdragon 8 Elite Gen 5",
    "7050mAh Battery",
    "100W SUPERVOOC Charging",
    "50W AIRVOOC Wireless Charging",
    "Hasselblad Camera System",
    "IP68 Water Resistance"
  ],

  specifications: {
    General: {
      Brand: "OPPO",
      Model: "Find X9 Ultra",
      LaunchYear: "2026",
      OperatingSystem: "Android 16",
      UI: "ColorOS 16",
      SIMType: "Dual SIM + eSIM"
    },

    Display: {
      Size: "6.82 inch",
      Type: "AMOLED",
      Resolution: "3168 x 1440",
      RefreshRate: "1-120Hz Adaptive, Up to 144Hz",
      Brightness: "1800 nits HBM",
      Protection: "Corning Gorilla Glass Victus 2",
      ColorDepth: "10-bit"
    },

    Processor: {
      Chipset: "Snapdragon 8 Elite Gen 5",
      CPU: "Octa Core",
      GPU: "Adreno 840",
      Process: "3nm"
    },

    Memory: {
      RAM: "12GB LPDDR5X",
      Storage: "512GB UFS 4.1"
    },

    Camera: {
      RearCamera: "200MP Main + 200MP Periscope + 50MP Ultra Telephoto + 50MP Ultra Wide + 3.2MP Monochrome",
      FrontCamera: "50MP",
      VideoRecording: "8K 30fps, 4K 120fps",
      OpticalZoom: "Up to 10x Optical Zoom",
      Features: "Hasselblad Camera System, OIS, Dolby Vision, Night Mode"
    },

    Battery: {
      Capacity: "7050mAh",
      Charging: "100W SUPERVOOC",
      WirelessCharging: "50W AIRVOOC",
      ReverseCharging: "Yes"
    },

    Connectivity: {
      Network: "5G",
      WiFi: "Wi-Fi 7",
      Bluetooth: "Bluetooth 6.0",
      NFC: "Yes",
      USB: "USB Type-C 3.2"
    },

    Design: {
      Weight: "235g",
      Thickness: "8.7mm",
      Build: "Glass and Metal",
      WaterResistance: "IP68"
    },

    Security: {
      FingerprintSensor: "Ultrasonic In-Display",
      FaceUnlock: "Yes"
    },

    Sensors: {
      Accelerometer: "Yes",
      Gyroscope: "Yes",
      AmbientLightSensor: "Yes",
      ProximitySensor: "Yes",
      Compass: "Yes",
      HallSensor: "Yes",
      InfraredBlaster: "Yes",
      LaserFocusSensor: "Yes"
    }
  },

  amazon: "https://www.amazon.in/Find-X9-Hasselblad-Snapdragon-Additional/dp/B0GZ7Q6K2D?th=1",
  flipkart: "https://www.flipkart.com/oppo-find-x9-ultra-tundra-umber-512-gb/p/itma944cf479f633",
  official: "https://www.oppo.com/in/smartphones/series-find-x/find-x9-ultra/"
},
{
  id: "iqoo15",
  name: "iQOO 15",
  brand: "iQOO",
  price: 72999,
  rating: 4.8,

  image: "/products/iqoo15/iqoo15.jpg",

  images: [
    "/products/iqoo15/2.jpg",
    "/products/iqoo15/3.jpg",
    "/products/iqoo15/4.jpg",
  ],

  category: "mobile",

  battery: "7000mAh",
  camera: "50MP Triple Camera",
  display: "6.85 inch 2K AMOLED 144Hz",
  processor: "Snapdragon 8 Elite Gen 5",

  highlights: [
    "Snapdragon 8 Elite Gen 5",
    "Supercomputing Chip Q3",
    "6.85-inch Samsung 2K M14 OLED",
    "144Hz Refresh Rate",
    "7000mAh Silicon Anode Battery",
    "100W Fast Charging",
    "50MP Sony Periscope Camera",
    "IP68 + IP69 Rating",
    "Ultrasonic Fingerprint Scanner",
    "Wi-Fi 7 Support"
  ],

  specifications: {
    General: {
      Brand: "iQOO",
      Model: "iQOO 15",
      LaunchYear: "2025",
      OperatingSystem: "Android 16",
      UI: "OriginOS 6",
      SIMType: "Dual SIM"
    },

    Display: {
      Size: "6.85 inch",
      Type: "Samsung 2K M14 AMOLED",
      Resolution: "3168 x 1440",
      RefreshRate: "144Hz",
      Brightness: "6000 nits Peak",
      PixelDensity: "508 PPI",
      HDR: "HDR10+"
    },

    Processor: {
      Chipset: "Snapdragon 8 Elite Gen 5",
      Process: "3nm",
      GPU: "Adreno",
      GamingChip: "Supercomputing Chip Q3"
    },

    Memory: {
      RAM: "12GB LPDDR5X",
      Storage: "256GB UFS 4.1",
      Variants: "12GB+256GB, 16GB+512GB"
    },

    Camera: {
      RearCamera: "50MP Main + 50MP Ultra Wide + 50MP 3x Periscope",
      FrontCamera: "32MP",
      VideoRecording: "8K 30fps, 4K 60fps",
      OpticalZoom: "3x Optical Zoom",
      Features: "OIS, Night Mode, AI Photography"
    },

    Battery: {
      Capacity: "7000mAh",
      Charging: "100W Fast Charging",
      WirelessCharging: "Supported",
      Type: "Silicon Anode Battery"
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
      Build: "Glass Back, Metal Frame",
      WaterResistance: "IP68 + IP69",
      Fingerprint: "3D Ultrasonic In-Display"
    },

    Security: {
      FingerprintSensor: "Ultrasonic In-Display",
      FaceUnlock: "Yes"
    },

    Sensors: {
      Accelerometer: "Yes",
      Gyroscope: "Yes",
      ProximitySensor: "Yes",
      AmbientLightSensor: "Yes",
      Compass: "Yes",
      IRBlaster: "Yes"
    }
  },

  amazon: "https://www.amazon.in/iQOO-Storage-Fastest-Snapdragon-Processor/dp/B0FYGBSKFB?th=1",
  flipkart: "https://www.flipkart.com/iqoo-15-5g-alpha-256-gb/p/itm3187e36213a01",
  official: "https://www.iqoo.com/in/products/iqoo15"
},
{
  id: "oneplus15r",
  name: "OnePlus 15R",
  brand: "OnePlus",
  price: 59999,
  rating: 4.8,

  image: "/products/oneplus15r/oneplus15r.jpg",

  images: [
    "/products/oneplus15r/2.jpg",
    "/products/oneplus15r/3.jpg",
    "/products/oneplus15r/4.jpg",
  ],

  category: "mobile",

  battery: "7400mAh",
  camera: "50MP Dual Camera",
  display: "6.83 inch AMOLED 165Hz",
  processor: "Snapdragon 8 Gen 5",

  highlights: [
    "Snapdragon 8 Gen 5 Processor",
    "6.83-inch 1.5K AMOLED Display",
    "165Hz Adaptive Refresh Rate",
    "7400mAh Silicon Carbon Battery",
    "80W SUPERVOOC Charging",
    "50MP Sony IMX906 Camera",
    "32MP Selfie Camera",
    "OxygenOS 16",
    "Ultrasonic Fingerprint Scanner",
    "IP68/IP69 Water Resistance"
  ],

  specifications: {
    General: {
      Brand: "OnePlus",
      Model: "OnePlus 15R",
      LaunchYear: "2025",
      OperatingSystem: "Android 16",
      UI: "OxygenOS 16",
      SIMType: "Dual Nano SIM"
    },

    Display: {
      Size: "6.83 inch",
      Type: "AMOLED",
      Resolution: "2800 x 1272",
      RefreshRate: "60-165Hz Adaptive",
      Brightness: "1800 nits HBM",
      Protection: "Corning Gorilla Glass 7i",
      ColorDepth: "10-bit"
    },

    Processor: {
      Chipset: "Snapdragon 8 Gen 5",
      CPU: "Qualcomm Oryon Octa Core",
      GPU: "Adreno 840",
      Process: "3nm"
    },

    Memory: {
      RAM: "12GB LPDDR5X Ultra",
      Storage: "256GB",
      Variants: "12GB+256GB, 12GB+512GB"
    },

    Camera: {
      RearCamera: "50MP Sony IMX906 + 8MP Ultra Wide",
      FrontCamera: "32MP",
      VideoRecording: "4K 120fps",
      OIS: "Yes",
      Features: "Night Mode, Portrait, Pro Mode, HDR"
    },

    Battery: {
      Capacity: "7400mAh",
      Charging: "80W SUPERVOOC",
      Type: "Silicon Carbon Battery",
      ReverseCharging: "Yes"
    },

    Connectivity: {
      Network: "5G",
      WiFi: "Wi-Fi 7",
      Bluetooth: "v6.0",
      NFC: "Yes",
      USB: "USB Type-C 2.0"
    },

    Design: {
      Weight: "214g",
      Thickness: "8.3mm",
      Build: "Glass Front & Back",
      WaterResistance: "IP68/IP69"
    },

    Security: {
      FingerprintSensor: "Ultrasonic In-Display",
      FaceUnlock: "Yes"
    },

    Sensors: {
      Accelerometer: "Yes",
      Gyroscope: "Yes",
      ProximitySensor: "Yes",
      AmbientLightSensor: "Yes",
      Compass: "Yes",
      IRBlaster: "Yes"
    }
  },

  amazon: "https://www.amazon.in/OnePlus-Charcoal-Snapdragon%C2%AE-Personalised-Game-Changing/dp/B0FZSWZZW2/ref=asc_df_B0FZSWZZW2?mcid=a40a36c3d65e3f3c99baa85677cc61ee&tag=googleshopdes-21&linkCode=df0&hvadid=709962856229&hvpos=&hvnetw=g&hvrand=12583279919281824738&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007788&hvtargid=pla-2458473113716&hvocijid=12583279919281824738-B0FZSWZZW2-&hvexpln=0&gad_source=1&th=1",
  flipkart: "https://www.flipkart.com/oneplus-15r-5g-mint-breeze-256-gb/p/itmc1c624041ba6c",
  official: "https://www.oneplus.com/15r"
},
{
  id: "galaxya37",
  name: "Samsung Galaxy A37",
  brand: "Samsung",
  price: 41999,
  rating: 4.6,

  image: "/products/galaxya37/galaxya37.jpg",

  images: [
    "/products/galaxya37/2.jpg",
    "/products/galaxya37/3.jpg",
    "/products/galaxya37/4.jpg",
  ],

  category: "mobile",

  battery: "5000mAh",
  camera: "50MP Triple Camera",
  display: "6.7 inch Super AMOLED 120Hz",
  processor: "Exynos 1480",

  highlights: [
    "6.7-inch Super AMOLED Display",
    "120Hz Refresh Rate",
    "50MP OIS Main Camera",
    "12MP Selfie Camera",
    "5000mAh Battery",
    "45W Fast Charging",
    "Exynos 1480 Processor",
    "IP68 Water Resistance",
    "Corning Gorilla Glass Victus+",
    "6 Years OS Updates"
  ],

  specifications: {
    General: {
      Brand: "Samsung",
      Model: "Galaxy A37",
      LaunchYear: "2026",
      OperatingSystem: "Android 16",
      UI: "One UI 8.5",
      SIMType: "Dual Nano SIM"
    },

    Display: {
      Size: "6.7 inch",
      Type: "Super AMOLED",
      Resolution: "2340 x 1080",
      RefreshRate: "120Hz",
      Protection: "Corning Gorilla Glass Victus+",
      ColorDepth: "16M Colors"
    },

    Processor: {
      Chipset: "Exynos 1480",
      CPU: "Octa Core",
      CPUSpeed: "2.75GHz",
      GPU: "Xclipse GPU"
    },

    Memory: {
      RAM: "8GB",
      Storage: "128GB",
      Variants: "8GB+128GB, 8GB+256GB, 12GB+256GB"
    },

    Camera: {
      RearCamera: "50MP Main + 8MP Ultra Wide + 5MP Macro",
      FrontCamera: "12MP",
      VideoRecording: "4K UHD 30fps",
      OIS: "Yes",
      Features: "Night Mode, Portrait Mode, HDR"
    },

    Battery: {
      Capacity: "5000mAh",
      Charging: "45W Fast Charging",
      VideoPlayback: "Up to 29 Hours"
    },

    Connectivity: {
      Network: "5G",
      WiFi: "Wi-Fi 6",
      Bluetooth: "v5.3",
      NFC: "Yes",
      USB: "USB Type-C"
    },

    Design: {
      Weight: "196g",
      Dimensions: "162.9 x 78.2 x 7.4 mm",
      Build: "Glass Front & Back",
      WaterResistance: "IP68"
    },

    Security: {
      FingerprintSensor: "In-Display",
      FaceUnlock: "Yes"
    },

    Sensors: {
      Accelerometer: "Yes",
      Gyroscope: "Yes",
      ProximitySensor: "Yes",
      AmbientLightSensor: "Yes",
      Compass: "Yes"
    }
  },

  amazon: "https://www.amazon.in/Samsung-Awesome-Charcoal-Nightography-Upgrades/dp/B0GS1FKBS9",
  flipkart: "https://www.flipkart.com/samsung-galaxy-a37-5g-awesome-charcoal-256-gb/p/itm793d1b5fe9bc5",
  official: "https://www.samsung.com/in/smartphones/galaxy-a/galaxy-a37-5g-awesome-charcoal-128gb-sm-a376ezadins/"
},
{
  id: "realme16t",
  name: "Realme 16T",
  brand: "Realme",
  price: 29999,
  rating: 4.5,

  image: "/products/realme16t/realme16t.jpg",

  images: [
    "/products/realme16t/2.jpg",
    "/products/realme16t/3.jpg",
    "/products/realme16t/4.jpg",
  ],

  category: "mobile",

  battery: "8000mAh",
  camera: "50MP Dual Camera",
  display: "6.8 inch LCD 144Hz",
  processor: "MediaTek Dimensity 6300",

  highlights: [
    "8000mAh Titan Battery",
    "45W SUPERVOOC Fast Charging",
    "50MP Sony IMX852 Camera",
    "6.8-inch 144Hz Display",
    "MediaTek Dimensity 6300",
    "IP69 Pro Water Resistance",
    "Military Grade Durability",
    "AI Instant Clip",
    "AI Popout Collage",
    "6 Years Smooth Performance"
  ],

  specifications: {
    General: {
      Brand: "Realme",
      Model: "Realme 16T",
      LaunchYear: "2026",
      OperatingSystem: "Android 16",
      UI: "realme UI 7.0",
      SIMType: "Dual Nano SIM"
    },

    Display: {
      Size: "6.8 inch",
      Type: "LCD",
      Resolution: "1570 x 720",
      RefreshRate: "144Hz",
      Brightness: "1200 nits HBM",
      PixelDensity: "254 PPI",
      Protection: "Panda Glass"
    },

    Processor: {
      Chipset: "MediaTek Dimensity 6300",
      CPU: "Octa Core",
      GPU: "Mali-G57 MC2",
      Process: "6nm"
    },

    Memory: {
      RAM: "8GB LPDDR4X",
      Storage: "256GB UFS 2.2",
      Variants: "6GB+128GB, 8GB+128GB, 8GB+256GB"
    },

    Camera: {
      RearCamera: "50MP Sony IMX852 + 2MP Monochrome",
      FrontCamera: "16MP",
      VideoRecording: "1080p 60fps",
      Features: "Night Mode, AI Camera, Portrait Mode, AI Instant Clip"
    },

    Battery: {
      Capacity: "8000mAh",
      Charging: "45W SUPERVOOC",
      ReverseCharging: "Yes",
      BatteryHealth: "7 Years Battery Health"
    },

    Connectivity: {
      Network: "5G",
      WiFi: "Wi-Fi 5",
      Bluetooth: "v5.3",
      NFC: "No",
      USB: "USB Type-C"
    },

    Design: {
      Weight: "224g",
      Thickness: "8.88mm",
      Build: "Plastic Frame",
      WaterResistance: "IP66/IP68/IP69"
    },

    Security: {
      FingerprintSensor: "Side Mounted",
      FaceUnlock: "Yes"
    },

    Sensors: {
      Accelerometer: "Yes",
      ProximitySensor: "Yes",
      AmbientLightSensor: "Yes",
      Compass: "Yes",
      Gyroscope: "Virtual"
    }
  },

  amazon: "https://www.amazon.in/realme-Smartphone-Batterya-Dimensity-Starlight/dp/B0H258FB8P?th=1",
  flipkart: "https://www.flipkart.com/realme-16t-5g-aurora-green-256-gb/p/itm604f2af610fd0",
  official: "https://www.realme.com/in/realme-16t-5g"
},
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
  id: "hpomenmax16",
  name: "HP Omen Max 16",
  brand: "HP",
  price: 299999,
  rating: 4.8,

  image: "/products/hpomenmax16/hpomenmax16.jpg",

  images: [
    "/products/hpomenmax16/2.jpg",
    "/products/hpomenmax16/3.jpg",
    "/products/hpomenmax16/4.jpg",
  ],

  category: "laptop",

  battery: "83Wh",
  camera: "1080p IR Camera",
  display: "16 inch OLED 240Hz",
  processor: "Intel Core Ultra 9 275HX",

  highlights: [
    "Intel Core Ultra 9 275HX",
    "NVIDIA RTX 5090 Laptop GPU",
    "16-inch OLED Display",
    "240Hz Refresh Rate",
    "64GB DDR5 RAM",
    "2TB PCIe Gen4 SSD",
    "Wi-Fi 7",
    "Thunderbolt 4 Support",
    "Per-Key RGB Keyboard",
    "Advanced OMEN Cooling"
  ],

  specifications: {
    General: {
      Brand: "HP",
      Model: "Omen Max 16",
      LaunchYear: "2025",
      OperatingSystem: "Windows 11 Home",
      Type: "Gaming Laptop"
    },

    Display: {
      Size: "16 inch",
      Type: "OLED",
      Resolution: "2560 x 1600",
      RefreshRate: "240Hz",
      Brightness: "500 nits HDR",
      ColorGamut: "100% DCI-P3"
    },

    Processor: {
      Chipset: "Intel Core Ultra 9 275HX",
      Cores: "24",
      Threads: "24",
      AIEngine: "Intel AI Boost"
    },

    Memory: {
      RAM: "64GB DDR5",
      Storage: "2TB PCIe Gen4 SSD",
      Expandable: "Yes"
    },

    Graphics: {
      GPU: "NVIDIA GeForce RTX 5090 Laptop",
      VRAM: "24GB GDDR7"
    },

    Battery: {
      Capacity: "83Wh",
      Charging: "330W Fast Charging"
    },

    Connectivity: {
      WiFi: "Wi-Fi 7",
      Bluetooth: "v5.4",
      Thunderbolt: "2 x Thunderbolt 4",
      HDMI: "HDMI 2.1",
      Ethernet: "RJ45"
    },

    Design: {
      Weight: "2.68kg",
      Color: "Shadow Black"
    },

    Security: {
      IRCamera: "Yes",
      WindowsHello: "Yes"
    }
  },

  amazon: "https://www.amazon.in/HP-processor-Office24-Backlit-Ah0076Tx/dp/B0DVLQCXLW",
  flipkart: "https://www.flipkart.com/hp-omen-max-intel-core-ultra-9-275hx-32-gb-1-tb-ssd-windows-11-home-16-gb-graphics-nvidia-geforce-rtx-5080-16-ah0076tx-gaming-laptop/p/itm1a380a7b79f8e",
  official: "https://www.hp.com/in-en/gaming-pc/laptops/2025-omen-max16-intel.html"
},

{
  id: "lenovolegion9i",
  name: "Lenovo Legion 9i",
  brand: "Lenovo",
  price: 449999,
  rating: 4.9,

  image: "/products/lenovolegion9i/lenovolegion9i.jpg",

  images: [
    "/products/lenovolegion9i/2.jpg",
    "/products/lenovolegion9i/3.jpg",
    "/products/lenovolegion9i/4.jpg",
  ],

  category: "laptop",

  battery: "99.99Wh",
  camera: "5MP Webcam",
  display: "18 inch Mini LED 165Hz",
  processor: "Intel Core Ultra 9 275HX",

  highlights: [
    "Intel Core Ultra 9 275HX",
    "NVIDIA RTX 5090 Laptop GPU",
    "18-inch Mini LED Display",
    "165Hz Refresh Rate",
    "64GB DDR5 RAM",
    "4TB PCIe Gen4 SSD",
    "Wi-Fi 7",
    "5MP Webcam",
    "Legion Coldfront Cooling",
    "Per-Key RGB Keyboard"
  ],

  specifications: {
    General: {
      Brand: "Lenovo",
      Model: "Legion 9i",
      LaunchYear: "2025",
      OperatingSystem: "Windows 11 Pro",
      Type: "Gaming Laptop"
    },

    Display: {
      Size: "18 inch",
      Type: "Mini LED",
      Resolution: "3840 x 2400",
      RefreshRate: "165Hz",
      Brightness: "1200 nits Peak",
      ColorGamut: "100% DCI-P3"
    },

    Processor: {
      Chipset: "Intel Core Ultra 9 275HX",
      Cores: "24",
      Threads: "24",
      AIEngine: "Intel AI Boost"
    },

    Memory: {
      RAM: "64GB DDR5",
      Storage: "4TB PCIe Gen4 SSD",
      Expandable: "Yes"
    },

    Graphics: {
      GPU: "NVIDIA GeForce RTX 5090 Laptop",
      VRAM: "24GB GDDR7"
    },

    Battery: {
      Capacity: "99.99Wh",
      Charging: "400W Fast Charging"
    },

    Connectivity: {
      WiFi: "Wi-Fi 7",
      Bluetooth: "v5.4",
      Thunderbolt: "2 x Thunderbolt 4",
      HDMI: "HDMI 2.1",
      Ethernet: "RJ45 2.5G"
    },

    Design: {
      Weight: "3.6kg",
      Build: "Forged Carbon Lid",
      Keyboard: "Per-Key RGB"
    },

    Security: {
      Webcam: "5MP",
      PrivacyShutter: "Yes",
      WindowsHello: "Yes"
    }
  },

  amazon: "https://www.amazon.in/Lenovo-Ultra-275HX-GeForce-Naked-Eye/dp/B0F9Y7PHGP",
  flipkart: "https://www.flipkart.com/lenovo-legion-9-intel-core-i9-14th-gen-14900hx-64-gb-2-tb-ssd-windows-11-home-16-gb-graphics-nvidia-geforce-rtx-4090-16irx9-gaming-laptop/p/itm83a82923ad378",
  official: "https://www.lenovo.com/in/en/p/laptops/legion-laptops/legion-9-series/legion-9i-gen-10-18-inch-intel/len101g0043?srsltid=AfmBOopHPupwRAHp9FD0g5mp0mLiSzBujCG2rP8OW-v4zBlipw0Ir8lh"
},

{
  id: "acerpredatorhelios18",
  name: "Acer Predator Helios 18",
  brand: "Acer",
  price: 379999,
  rating: 4.8,

  image: "/products/acerpredatorhelios18/acerpredatorhelios18.jpg",

  images: [
    "/products/acerpredatorhelios18/2.jpg",
    "/products/acerpredatorhelios18/3.jpg",
    "/products/acerpredatorhelios18/4.jpg",
  ],

  category: "laptop",

  battery: "90Wh",
  camera: "1080p Webcam",
  display: "18 inch Mini LED 250Hz",
  processor: "Intel Core Ultra 9 275HX",

  highlights: [
    "Intel Core Ultra 9 275HX",
    "NVIDIA GeForce RTX 5090 Laptop GPU",
    "18-inch Mini LED Display",
    "250Hz Refresh Rate",
    "64GB DDR5 RAM",
    "2TB PCIe Gen4 SSD",
    "Wi-Fi 7 Connectivity",
    "RGB Per-Key Keyboard",
    "PredatorSense Control Center",
    "Advanced AeroBlade Cooling"
  ],

  specifications: {
    General: {
      Brand: "Acer",
      Model: "Predator Helios 18",
      LaunchYear: "2025",
      OperatingSystem: "Windows 11 Home",
      Type: "Gaming Laptop"
    },

    Display: {
      Size: "18 inch",
      Type: "Mini LED",
      Resolution: "2560 x 1600",
      RefreshRate: "250Hz",
      Brightness: "1000 nits Peak",
      ColorGamut: "100% DCI-P3"
    },

    Processor: {
      Chipset: "Intel Core Ultra 9 275HX",
      Cores: "24",
      Threads: "24",
      AIEngine: "Intel AI Boost"
    },

    Memory: {
      RAM: "64GB DDR5",
      Storage: "2TB PCIe Gen4 SSD",
      Expandable: "Yes"
    },

    Graphics: {
      GPU: "NVIDIA GeForce RTX 5090 Laptop",
      VRAM: "24GB GDDR7"
    },

    Camera: {
      Webcam: "1080p Full HD",
      Microphone: "Dual AI Noise Reduction"
    },

    Battery: {
      Capacity: "90Wh",
      Charging: "330W Fast Charging"
    },

    Connectivity: {
      WiFi: "Wi-Fi 7",
      Bluetooth: "v5.4",
      Thunderbolt: "2 x Thunderbolt 5",
      HDMI: "HDMI 2.1",
      Ethernet: "2.5G LAN"
    },

    Design: {
      Weight: "3.3kg",
      Build: "Aluminium Chassis",
      Keyboard: "Per-Key RGB"
    },

    Security: {
      WindowsHello: "Yes",
      PrivacyShutter: "Yes"
    },

    Audio: {
      Speakers: "DTS:X Ultra",
      Microphones: "AI Noise Cancellation"
    }
  },

  amazon: "https://www.amazon.in/acer-Predator-Helios-18-Gaming/dp/B0DMSK7N1L?th=1",
  flipkart: "Not Available",
  official: "https://www.acer.com/in-en/predator/laptops/helios/helios-18"
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