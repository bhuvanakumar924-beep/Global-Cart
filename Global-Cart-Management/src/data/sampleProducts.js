
const fashionSizes = ["S", "M", "L", "XL", "XXL"];

const products = [
  // FASHION (17 PRODUCTS)
  {
    id: 1, name: "Men Casual Shirt", category: "Fashion",
    price: 699, originalPrice: 999, rating: 4.5, stock: 20,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600",
    sizes: fashionSizes, description: "Stylish casual shirt for men."
  },
  {
    id: 2, name: "Women Summer Dress", category: "Fashion",
    price: 899, originalPrice: 1299, rating: 4.6, stock: 20,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600",
    sizes: fashionSizes, description: "Beautiful summer dress."
  },
  {
    id: 3, name: "Blue Denim Jeans", category: "Fashion",
    price: 999, originalPrice: 1499, rating: 4.4, stock: 20,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    sizes: ["28", "30", "32", "34", "36"], description: "Comfortable denim jeans."
  },
  {
    id: 4, name: "Red Sports Shoes", category: "Fashion",
    price: 1299, originalPrice: 1799, rating: 4.7, stock: 20,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    sizes: ["6", "7", "8", "9", "10"], description: "Lightweight sports shoes."
  },
  {
    id: 5, name: "Ladies Handbag", category: "Fashion",
    price: 799, originalPrice: 1199, rating: 4.5, stock: 20,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    sizes: ["Small", "Medium", "Large"], description: "Trendy ladies handbag."
  },
  {
    id: 6, name: "Black Sunglasses", category: "Fashion",
    price: 399, originalPrice: 699, rating: 4.3, stock: 20,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    sizes: ["Free Size"], description: "Stylish sunglasses."
  },
  {
    id: 7, name: "White T-Shirt", category: "Fashion",
    price: 449, originalPrice: 699, rating: 4.4, stock: 20,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    sizes: fashionSizes, description: "Everyday cotton T-shirt."
  },
  {
    id: 8, name: "Women's Handbag", category: "Fashion",
    price: 1099, originalPrice: 1599, rating: 4.6, stock: 20,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600",
    sizes: ["Small", "Medium", "Large"], description: "Elegant everyday handbag."
  },
  {
    id: 9, name: "Leather Jacket", category: "Fashion",
    price: 1899, originalPrice: 2499, rating: 4.7, stock: 20,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
    sizes: fashionSizes, description: "Premium style jacket."
  },
  {
    id: 10, name: "Women's Kurti", category: "Fashion",
    price: 799, originalPrice: 1199, rating: 4.5, stock: 20,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e4?w=600",
    sizes: fashionSizes, description: "Comfortable ethnic wear."
  },
  {
    id: 11, name: "Sports Watch", category: "Fashion",
    price: 599, originalPrice: 899, rating: 4.4, stock: 20,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    sizes: ["Free Size"], description: "Modern wrist watch."
  },
  {
    id: 12, name: "Blue Backpack", category: "Fashion",
    price: 699, originalPrice: 999, rating: 4.5, stock: 20,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    sizes: ["Small", "Medium", "Large"], description: "Travel and college backpack."
  },
  {
    id: 13, name: "Women's Sneakers", category: "Fashion",
    price: 1199, originalPrice: 1699, rating: 4.6, stock: 20,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600",
    sizes: ["5", "6", "7", "8", "9"], description: "Comfortable sneakers."
  },
  {
    id: 14, name: "Black Formal Shoes", category: "Fashion",
    price: 1499, originalPrice: 1999, rating: 4.5, stock: 20,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600",
    sizes: ["6", "7", "8", "9", "10"], description: "Formal office shoes."
  },
  {
    id: 15, name: "Denim Jacket", category: "Fashion",
    price: 1399, originalPrice: 1899, rating: 4.6, stock: 20,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600",
    sizes: fashionSizes, description: "Classic denim jacket."
  },
  {
    id: 16, name: "Printed Shirt", category: "Fashion",
    price: 749, originalPrice: 1099, rating: 4.3, stock: 20,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600",
    sizes: fashionSizes, description: "Printed casual shirt."
  },
  {
    id: 17, name: "Ladies Heels", category: "Fashion",
    price: 999, originalPrice: 1499, rating: 4.5, stock: 20,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
    sizes: ["5", "6", "7", "8", "9"], description: "Fashionable high heels."
  },

  // ELECTRONICS (17 PRODUCTS)
  {
    id: 18, name: "Smartphone", category: "Electronics",
    price: 14999, originalPrice: 17999, rating: 4.5, stock: 15,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",
    sizes: ["64GB", "128GB", "256GB"], description: "Latest smartphone."
  },
  {
    id: 19, name: "Laptop", category: "Electronics",
    price: 45999, originalPrice: 52999, rating: 4.7, stock: 10,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    sizes: ["8GB RAM", "16GB RAM", "32GB RAM"], description: "Laptop for work and study."
  },
  {
    id: 20, name: "Wireless Headphones", category: "Electronics",
    price: 1999, originalPrice: 2999, rating: 4.5, stock: 20,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    sizes: ["Standard"], description: "Wireless audio headphones."
  },
  {
    id: 21, name: "Digital Camera", category: "Electronics",
    price: 25999, originalPrice: 29999, rating: 4.6, stock: 8,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    sizes: ["Standard", "With Lens Kit"], description: "Digital photography camera."
  },
  {
    id: 22, name: "Smart Watch", category: "Electronics",
    price: 2499, originalPrice: 3499, rating: 4.4, stock: 20,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
    sizes: ["Small", "Large"], description: "Smart fitness watch."
  },
  {
    id: 23, name: "Bluetooth Speaker", category: "Electronics",
    price: 1499, originalPrice: 2199, rating: 4.5, stock: 20,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
    sizes: ["Mini", "Medium", "Large"], description: "Portable Bluetooth speaker."
  },
  {
    id: 24, name: "Gaming Controller", category: "Electronics",
    price: 2999, originalPrice: 3999, rating: 4.6, stock: 12,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600",
    sizes: ["Standard"], description: "Wireless gaming controller."
  },
  {
    id: 25, name: "Tablet", category: "Electronics",
    price: 12999, originalPrice: 15999, rating: 4.4, stock: 10,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",
    sizes: ["64GB", "128GB", "256GB"], description: "Portable touchscreen tablet."
  },
  {
    id: 26, name: "Wireless Earbuds", category: "Electronics",
    price: 1299, originalPrice: 1999, rating: 4.3, stock: 20,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600",
    sizes: ["Standard"], description: "Compact wireless earbuds."
  },
  {
    id: 27, name: "Computer Keyboard", category: "Electronics",
    price: 899, originalPrice: 1299, rating: 4.4, stock: 20,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
    sizes: ["Compact", "Full Size"], description: "Computer keyboard."
  },
  {
    id: 28, name: "Computer Mouse", category: "Electronics",
    price: 499, originalPrice: 799, rating: 4.3, stock: 20,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
    sizes: ["Standard", "Gaming"], description: "Wireless computer mouse."
  },
  {
    id: 29, name: "DSLR Camera", category: "Electronics",
    price: 32999, originalPrice: 37999, rating: 4.7, stock: 8,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600",
    sizes: ["Body Only", "With Lens"], description: "Professional DSLR camera."
  },
  {
    id: 30, name: "Power Bank", category: "Electronics",
    price: 999, originalPrice: 1499, rating: 4.4, stock: 20,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600",
    sizes: ["10000mAh", "20000mAh"], description: "Portable charging power bank."
  },
  {
    id: 31, name: "LED Monitor", category: "Electronics",
    price: 8999, originalPrice: 10999, rating: 4.5, stock: 10,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
    sizes: ["22 inch", "24 inch", "27 inch"], description: "Full HD LED monitor."
  },
  {
    id: 32, name: "Microphone", category: "Electronics",
    price: 1799, originalPrice: 2499, rating: 4.5, stock: 15,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600",
    sizes: ["Standard", "Studio"], description: "Recording microphone."
  },
  {
    id: 33, name: "WiFi Router", category: "Electronics",
    price: 1599, originalPrice: 2299, rating: 4.3, stock: 15,
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=600",
    sizes: ["Single Band", "Dual Band"], description: "High speed WiFi router."
  },
  {
    id: 34, name: "Portable Projector", category: "Electronics",
    price: 6999, originalPrice: 8999, rating: 4.4, stock: 8,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600",
    sizes: ["Mini", "Standard"], description: "Portable home projector."
  },

  // HOME APPLIANCES (16 PRODUCTS)
  {
    id: 35, name: "Refrigerator", category: "Home",
    price: 18999, originalPrice: 22999, rating: 4.6, stock: 8,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600",
    sizes: ["190L", "250L", "300L"], description: "Energy efficient refrigerator."
  },
  {
    id: 36, name: "Washing Machine", category: "Home",
    price: 15999, originalPrice: 19999, rating: 4.5, stock: 8,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600",
    sizes: ["6kg", "7kg", "8kg"], description: "Automatic washing machine."
  },
  {
    id: 37, name: "Microwave Oven", category: "Home",
    price: 6999, originalPrice: 8999, rating: 4.4, stock: 10,
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600",
    sizes: ["20L", "25L", "30L"], description: "Easy cooking microwave oven."
  },
  {
    id: 38, name: "Electric Mixer", category: "Home",
    price: 2499, originalPrice: 3299, rating: 4.5, stock: 15,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600",
    sizes: ["500W", "750W", "1000W"], description: "Kitchen mixer grinder."
  },
  {
    id: 39, name: "Electric Kettle", category: "Home",
    price: 899, originalPrice: 1299, rating: 4.3, stock: 20,
    image: "https://images.unsplash.com/photo-1594213114663-d94db9b1712b?w=600",
    sizes: ["1L", "1.5L", "2L"], description: "Fast boiling electric kettle."
  },
  {
    id: 40, name: "Table Fan", category: "Home",
    price: 1499, originalPrice: 1999, rating: 4.4, stock: 15,
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600",
    sizes: ["Small", "Medium", "Large"], description: "Portable table fan."
  },
  {
    id: 41, name: "LED Table Lamp", category: "Home",
    price: 799, originalPrice: 1199, rating: 4.5, stock: 20,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
    sizes: ["Small", "Medium", "Large"], description: "Modern LED table lamp."
  },
  {
    id: 42, name: "Air Purifier", category: "Home",
    price: 5999, originalPrice: 7999, rating: 4.5, stock: 10,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600",
    sizes: ["Small Room", "Medium Room", "Large Room"], description: "Indoor air purifier."
  },
  {
    id: 43, name: "Vacuum Cleaner", category: "Home",
    price: 3999, originalPrice: 5499, rating: 4.4, stock: 12,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600",
    sizes: ["Compact", "Standard", "Heavy Duty"], description: "Powerful vacuum cleaner."
  },
  {
    id: 44, name: "Toaster", category: "Home",
    price: 1299, originalPrice: 1799, rating: 4.3, stock: 15,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600",
    sizes: ["2 Slice", "4 Slice"], description: "Electric bread toaster."
  },
  {
    id: 45, name: "Rice Cooker", category: "Home",
    price: 1999, originalPrice: 2699, rating: 4.5, stock: 15,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600",
    sizes: ["1L", "1.8L", "2.8L"], description: "Electric rice cooker."
  },
  {
    id: 46, name: "Air Conditioner", category: "Home",
    price: 28999, originalPrice: 33999, rating: 4.6, stock: 6,
    image: "https://images.unsplash.com/photo-1631545806609-8c8f7b4e9a4b?w=600",
    sizes: ["1 Ton", "1.5 Ton", "2 Ton"], description: "Cooling air conditioner."
  },
  {
    id: 47, name: "Water Purifier", category: "Home",
    price: 7999, originalPrice: 9999, rating: 4.5, stock: 10,
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600",
    sizes: ["5L", "7L", "10L"], description: "Home water purifier."
  },
  {
    id: 48, name: "Induction Stove", category: "Home",
    price: 2499, originalPrice: 3299, rating: 4.4, stock: 15,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600",
    sizes: ["1200W", "1800W", "2000W"], description: "Portable induction cooktop."
  },
  {
    id: 49, name: "Room Heater", category: "Home",
    price: 2299, originalPrice: 2999, rating: 4.3, stock: 12,
    image: "https://images.unsplash.com/photo-1618941716939-553df3c6c278?w=600",
    sizes: ["1000W", "1500W", "2000W"], description: "Portable room heater."
  },
  {
    id: 50, name: "Electric Iron Box", category: "Home",
    price: 999, originalPrice: 1499, rating: 4.4, stock: 20,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600",
    sizes: ["750W", "1000W", "1200W"], description: "Electric dry iron."
  }
];

export default products;
