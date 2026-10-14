const config = {
  storeName: "TechHub",
  tagline: "Genuine phones. Fair prices. Fast delivery.",
  whatsapp: "2348012345678",
  defaultTheme: "dark",
  brands: ["All", "Apple", "Samsung", "Tecno", "Infinix", "Google"],
  trust: [
    { icon: "✅", text: "100% Genuine Phones" },
    { icon: "🚚", text: "Nationwide Delivery" },
    { icon: "🛡️", text: "Warranty Included" },
    { icon: "💬", text: "Fast WhatsApp Support" },
  ],
  products: [
    {
      id: 1,
      name: "Iphone 13",
      brand: "Apple",
      price: 450000,
      dealPrice: 405000,
      featured: true,
      image:
        "https://res.cloudinary.com/mvnnk6jh/image/upload/v1789594688/doxlore/uploads/c6zz4qf0ulnvjwezf5ib.avif",
      description:
        "A smooth, reliable iPhone with a great camera. Perfect for daily use.",
      dealDescription:
        "Face ID is not working. Battery health is 89%; please review the condition before purchase.",
      specs: [
        "6.1-inch display",
        "128GB storage",
        "4GB RAM",
        "12MP dual camera",
      ],
      battery: "89%",
      condition: "UK Used - Face ID not working",
    },
    {
      id: 2,
      name: "Iphone 14 Pro",
      brand: "Apple",
      price: 850000,
      dealPrice: 765000,
      featured: true,
      image:
        "https://res.cloudinary.com/mvnnk6jh/image/upload/c_limit,w_640,q_auto/v1789594531/doxlore/uploads/zrgbrgsweosbrhtohuei.avif",
      dealDescription:
        "Battery health is 80%. Please review the condition before purchase.",
      specs: ["6.1-inch display", "256GB storage", "6GB RAM", "48MP camera"],
      battery: "80%",
      condition: "UK Used - 80% battery health",
    },
    {
      id: 3,
      name: "Samsung Galaxy S23",
      brand: "Samsung",
      price: 720000,
      dealPrice: 648000,
      featured: true,
      image:
        "https://res.cloudinary.com/mvnnk6jh/image/upload/v1789591480/doxlore/uploads/idrdbxgytaf1mrjtfdkk.avif",
      description:
        "Fast Samsung flagship with a bright screen and strong battery.",
      dealDescription:
        "The back is broken. Battery health is 90%; please review the condition before purchase.",
      specs: ["6.1-inch display", "256GB storage", "8GB RAM", "50MP camera"],
      battery: "90%",
      condition: "Used - broken back",
    },
    {
      id: 4,
      name: "Iphone 16",
      brand: "Apple",
      price: 1300000,
      featured: false,
      image:
        "https://res.cloudinary.com/mvnnk6jh/image/upload/v1789593615/doxlore/uploads/qkoeblzbqpfqi9jimcym.avif",
      description:
        "UK USED/BRAND NEW iPHONE 16 AVAILABLE! Clean body & premium design sharp pictures and clear videos Great battery performance Face ID Available in different colours",
      specs: ["6.1-inch OLED", "128GB storage", "8GB RAM", "64MP camera"],
      battery: "100%",
      condition: "Brand new - Sealed",
    },
    {
      id: 5,
      name: "Iphone 17ProMax",
      brand: "Apple",
      price: 4000000,
      featured: false,
      image:
        "https://res.cloudinary.com/mvnnk6jh/image/upload/v1789306470/doxlore/uploads/casknsofgcuazk7ica9x.avif",
      description: "Big screen and long battery life for everyday use.",
      specs: ["6.78-inch display", "128GB storage", "8GB RAM", "64MP camera"],
      battery: "100%",
      condition: "Brand new - Sealed",
    },
    {
      id: 6,
      name: "Google Pixel 7",
      brand: "Google",
      price: 480000,
      featured: false,
      image:
        "https://res.cloudinary.com/mvnnk6jh/image/upload/v1789598380/doxlore/uploads/kcapvohy14uxk246ra1r.avif",
      description: "Clean Android and one of the best phone cameras around.",
      specs: ["6.3-inch display", "128GB storage", "8GB RAM", "50MP camera"],
      battery: "87%",
      condition: "UK Used - Good working condition",
    },
  ],
};

export default config;

// const config = {
//   storeName: "TechHub",
//   tagline: "Genuine phones. Fair prices. Fast delivery",
//   whatsapp: "2348012345678",
//   defaultTheme: "dark", // 'dark or light'
//   brandColor: "#3b82f6",

//   trust: [
//     { icon: "✅", text: "100% Genuine Phones" },
//     { icon: "🚚", text: "Nationwide Delivery" },
//     { icons: "🛡️", text: "Warranty Included" },
//     { icons: "💬", text: "Fast WhatsApp Support" },
//   ],

//   products: [
//     {
//       id: 1,
//       name: "iPhone 13",
//       storage: "128GB",
//       price: 450000,
//       featured: true,
//       image: "https://placehold.co/400x300?text=iPhone+13",
//     },
//     {
//       id: 2,
//       name: "iPhone 14 Pro",
//       storage: "256GB",
//       price: 850000,
//       featured: true,
//       image: "https://placehold.co/400x300?text=iPhone+14+Pro",
//     },
//     {
//       id: 3,
//       name: "Samsung S23",
//       storage: "256GB",
//       price: 720000,
//       featured: true,
//       image: "https://placehold.co/400x300?text=Samsung+S23",
//     },
//     {
//       id: 4,
//       name: "Tecno Camon 20",
//       storage: "128GB",
//       price: 210000,
//       featured: false,
//       image: "https://placehold.co/400x300?text=Tecno+Camon+20",
//     },
//     {
//       id: 5,
//       name: "Infinix Note 30",
//       storage: "128GB",
//       price: 185000,
//       featured: false,
//       image: "https://placehold.co/400x300?text=Infinix+Note+30",
//     },
//     {
//       id: 6,
//       name: "Google Pixel 7",
//       storage: "128GB",
//       price: 480000,
//       featured: false,
//       image: "https://placehold.co/400x300?text=Pixel+7",
//     },
//   ],
// };

// export default config;
