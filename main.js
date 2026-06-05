// ════════════════════════════════════════════════
//  KnockYourDoor — Main JS (products + cart + utils)
// ════════════════════════════════════════════════

// ── MEGA PRODUCT DATABASE ──
const KYD_PRODUCTS = [
  // ── ELECTRONICS ──
  { id: 1,  name: 'Wireless Noise-Cancelling Earbuds', brand: 'SoundCore', price: 1299, old: 2499, cat: 'electronics', rating: 4.8, reviews: 2341, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80', badge: 'Best Seller', sizes: [] },
  { id: 2,  name: 'Smart Watch Series X Pro', brand: 'TechWear', price: 2999, old: 5999, cat: 'electronics', rating: 4.6, reviews: 1820, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', badge: 'Hot', sizes: [] },
  { id: 3,  name: 'Mechanical Keyboard TKL RGB', brand: 'KeyCraft', price: 2499, old: 3999, cat: 'electronics', rating: 4.9, reviews: 654, img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80', badge: 'New', sizes: [] },
  { id: 4,  name: 'Bluetooth Mini Speaker', brand: 'BoomBox', price: 899, old: 1499, cat: 'electronics', rating: 4.5, reviews: 1750, img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80', badge: '', sizes: [] },
  { id: 5,  name: 'USB-C Fast Charger 65W', brand: 'ChargePro', price: 699, old: 1199, cat: 'electronics', rating: 4.7, reviews: 3100, img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80', badge: '', sizes: [] },
  { id: 6,  name: 'Portable Power Bank 20000mAh', brand: 'PowerMax', price: 1499, old: 2499, cat: 'electronics', rating: 4.8, reviews: 4200, img: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&q=80', badge: 'Top Rated', sizes: [] },
  { id: 7,  name: 'Adjustable Phone Stand', brand: 'GripTech', price: 299, old: 499, cat: 'electronics', rating: 4.4, reviews: 720, img: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&q=80', badge: '', sizes: [] },
  { id: 8,  name: 'Gaming Headset 7.1 Surround', brand: 'SoundCore', price: 1999, old: 3499, cat: 'electronics', rating: 4.6, reviews: 980, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', badge: '', sizes: [] },

  // ── MEN'S CLOTHING ──
  { id: 10, name: "Men's Classic Crew Neck T-Shirt", brand: 'UrbanThread', price: 399, old: 699, cat: 'men', rating: 4.5, reviews: 3200, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', badge: 'Best Seller', sizes: ['S','M','L','XL','XXL'] },
  { id: 11, name: "Men's Slim Fit Chinos", brand: 'StyleMan', price: 899, old: 1799, cat: 'men', rating: 4.4, reviews: 1540, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80', badge: '', sizes: ['28','30','32','34','36','38'] },
  { id: 12, name: "Men's Casual Linen Shirt", brand: 'UrbanThread', price: 699, old: 1299, cat: 'men', rating: 4.6, reviews: 2100, img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80', badge: 'Trending', sizes: ['S','M','L','XL','XXL'] },
  { id: 13, name: "Men's Jogger Track Pants", brand: 'FlexWear', price: 599, old: 999, cat: 'men', rating: 4.5, reviews: 1890, img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80', badge: '', sizes: ['S','M','L','XL','XXL'] },
  { id: 14, name: "Men's Denim Jacket", brand: 'DenimCo', price: 1499, old: 2999, cat: 'men', rating: 4.7, reviews: 890, img: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&q=80', badge: '', sizes: ['S','M','L','XL'] },
  { id: 15, name: "Men's Formal Blazer", brand: 'SuitUp', price: 2499, old: 4999, cat: 'men', rating: 4.8, reviews: 560, img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80', badge: 'Premium', sizes: ['38','40','42','44','46'] },
  { id: 16, name: "Men's Polo T-Shirt", brand: 'UrbanThread', price: 499, old: 899, cat: 'men', rating: 4.4, reviews: 2700, img: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&q=80', badge: '', sizes: ['S','M','L','XL','XXL'] },
  { id: 17, name: "Men's Hoodie Sweatshirt", brand: 'FlexWear', price: 799, old: 1499, cat: 'men', rating: 4.6, reviews: 1320, img: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80', badge: '', sizes: ['S','M','L','XL','XXL'] },
  { id: 18, name: "Men's Boxer Shorts Pack of 3", brand: 'ComfortZone', price: 499, old: 899, cat: 'men', rating: 4.7, reviews: 5600, img: 'https://images.unsplash.com/photo-1519297411-a21d34f53f0f?w=400&q=80', badge: 'Value Pack', sizes: ['S','M','L','XL','XXL'] },
  { id: 19, name: "Men's Briefs Pack of 5", brand: 'ComfortZone', price: 599, old: 999, cat: 'men', rating: 4.6, reviews: 4200, img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80', badge: 'Value Pack', sizes: ['S','M','L','XL','XXL'] },
  { id: 20, name: "Men's Ankle Socks Pack of 6", brand: 'SockKing', price: 299, old: 499, cat: 'men', rating: 4.8, reviews: 8900, img: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&q=80', badge: 'Best Value', sizes: ['Free Size'] },

  // ── WOMEN'S CLOTHING ──
  { id: 30, name: "Women's Floral Kurti", brand: 'FabIndia', price: 599, old: 1199, cat: 'women', rating: 4.6, reviews: 3400, img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&q=80', badge: 'Best Seller', sizes: ['XS','S','M','L','XL','XXL'] },
  { id: 31, name: "Women's High-Waist Jeans", brand: 'DenimCo', price: 999, old: 1999, cat: 'women', rating: 4.5, reviews: 2100, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80', badge: 'Trending', sizes: ['26','28','30','32','34'] },
  { id: 32, name: "Women's Crop Top", brand: 'StyleShe', price: 349, old: 699, cat: 'women', rating: 4.3, reviews: 1800, img: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&q=80', badge: '', sizes: ['XS','S','M','L','XL'] },
  { id: 33, name: "Women's Flared Maxi Dress", brand: 'StyleShe', price: 799, old: 1599, cat: 'women', rating: 4.7, reviews: 980, img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80', badge: 'New', sizes: ['XS','S','M','L','XL','XXL'] },
  { id: 34, name: "Women's Sports Bra", brand: 'ActiveWear', price: 499, old: 899, cat: 'women', rating: 4.6, reviews: 2900, img: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80', badge: '', sizes: ['XS','S','M','L','XL'] },
  { id: 35, name: "Women's Leggings (High Waist)", brand: 'ActiveWear', price: 599, old: 999, cat: 'women', rating: 4.8, reviews: 5600, img: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&q=80', badge: 'Top Rated', sizes: ['XS','S','M','L','XL','XXL'] },
  { id: 36, name: "Women's Ethnic Saree", brand: 'FabIndia', price: 1299, old: 2499, cat: 'women', rating: 4.9, reviews: 1200, img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80', badge: 'Premium', sizes: ['Free Size'] },
  { id: 37, name: "Women's Blazer Formal", brand: 'SuitUp', price: 1799, old: 3499, cat: 'women', rating: 4.7, reviews: 670, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4357?w=400&q=80', badge: '', sizes: ['XS','S','M','L','XL'] },
  { id: 38, name: "Women's Panties Pack of 5", brand: 'ComfortZone', price: 499, old: 899, cat: 'women', rating: 4.7, reviews: 6700, img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80', badge: 'Value Pack', sizes: ['XS','S','M','L','XL','XXL'] },
  { id: 39, name: "Women's Ankle Socks Pack of 6", brand: 'SockKing', price: 279, old: 499, cat: 'women', rating: 4.8, reviews: 7200, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', badge: 'Best Value', sizes: ['Free Size'] },

  // ── SHOES (MEN) ──
  { id: 50, name: "Men's Running Shoes", brand: 'FlexStep', price: 1499, old: 2999, cat: 'shoes', rating: 4.5, reviews: 980, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', badge: '', sizes: ['6','7','8','9','10','11','12'] },
  { id: 51, name: "Men's Formal Oxford Shoes", brand: 'LeatherCraft', price: 1999, old: 3999, cat: 'shoes', rating: 4.7, reviews: 540, img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&q=80', badge: 'Premium', sizes: ['6','7','8','9','10','11'] },
  { id: 52, name: "Men's White Sneakers", brand: 'StreetStyle', price: 999, old: 1999, cat: 'shoes', rating: 4.6, reviews: 2300, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80', badge: 'Trending', sizes: ['6','7','8','9','10','11','12'] },
  { id: 53, name: "Men's Casual Loafers", brand: 'SlipOn', price: 799, old: 1499, cat: 'shoes', rating: 4.4, reviews: 870, img: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&q=80', badge: '', sizes: ['6','7','8','9','10','11'] },
  // ── SHOES (WOMEN) ──
  { id: 54, name: "Women's Block Heel Sandals", brand: 'HeelUp', price: 899, old: 1799, cat: 'shoes', rating: 4.5, reviews: 1230, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80', badge: '', sizes: ['3','4','5','6','7','8'] },
  { id: 55, name: "Women's Running Shoes", brand: 'FlexStep', price: 1299, old: 2499, cat: 'shoes', rating: 4.7, reviews: 1560, img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80', badge: 'Top Rated', sizes: ['3','4','5','6','7','8'] },
  { id: 56, name: "Women's Slip-On Flats", brand: 'SlipOn', price: 599, old: 999, cat: 'shoes', rating: 4.3, reviews: 890, img: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&q=80', badge: '', sizes: ['3','4','5','6','7','8'] },
  { id: 57, name: "Women's Kolhapuri Chappal", brand: 'IndiaStep', price: 499, old: 899, cat: 'shoes', rating: 4.6, reviews: 2100, img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&q=80', badge: 'Handcrafted', sizes: ['3','4','5','6','7','8'] },

  // ── BAGS ──
  { id: 60, name: "Men's Backpack 30L Laptop", brand: 'TrailBag', price: 1199, old: 2199, cat: 'bags', rating: 4.7, reviews: 1320, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', badge: '', sizes: [] },
  { id: 61, name: "Women's Tote Bag Canvas", brand: 'BagLove', price: 699, old: 1299, cat: 'bags', rating: 4.5, reviews: 980, img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80', badge: 'Trending', sizes: [] },
  { id: 62, name: "Leather Shoulder Bag (Unisex)", brand: 'LeatherCraft', price: 1499, old: 2999, cat: 'bags', rating: 4.8, reviews: 450, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', badge: 'Premium', sizes: [] },
  { id: 63, name: "Women's Clutch Purse", brand: 'BagLove', price: 499, old: 999, cat: 'bags', rating: 4.4, reviews: 1200, img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&q=80', badge: '', sizes: [] },
  { id: 64, name: "Travel Duffel Bag 40L", brand: 'TrailBag', price: 899, old: 1799, cat: 'bags', rating: 4.6, reviews: 780, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', badge: '', sizes: [] },
  { id: 65, name: "Kids School Bag Superhero", brand: 'KidZone', price: 599, old: 999, cat: 'bags', rating: 4.7, reviews: 2300, img: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&q=80', badge: 'Kids Pick', sizes: [] },
  { id: 66, name: "Gym Drawstring Bag", brand: 'FlexWear', price: 299, old: 499, cat: 'bags', rating: 4.3, reviews: 1500, img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80', badge: '', sizes: [] },
  { id: 67, name: "Mobile Phone Crossbody Bag", brand: 'BagLove', price: 399, old: 699, cat: 'bags', rating: 4.5, reviews: 890, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80', badge: 'New', sizes: [] },

  // ── CAPS & HEADWEAR ──
  { id: 70, name: 'Classic Baseball Cap', brand: 'CapKing', price: 299, old: 599, cat: 'caps', rating: 4.5, reviews: 3400, img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80', badge: 'Best Seller', sizes: ['Free Size'] },
  { id: 71, name: 'Snapback Cap Streetwear', brand: 'CapKing', price: 399, old: 799, cat: 'caps', rating: 4.6, reviews: 1800, img: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&q=80', badge: 'Trending', sizes: ['Free Size'] },
  { id: 72, name: "Women's Sun Visor Cap", brand: 'ShadeStyle', price: 249, old: 499, cat: 'caps', rating: 4.4, reviews: 920, img: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&q=80', badge: '', sizes: ['Free Size'] },
  { id: 73, name: 'Beanie Winter Woollen Cap', brand: 'WarmHead', price: 199, old: 399, cat: 'caps', rating: 4.7, reviews: 2100, img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&q=80', badge: 'Winter Special', sizes: ['Free Size'] },
  { id: 74, name: "Men's Bucket Hat", brand: 'CapKing', price: 349, old: 699, cat: 'caps', rating: 4.5, reviews: 760, img: 'https://images.unsplash.com/photo-1565839818978-a66b61af3aea?w=400&q=80', badge: '', sizes: ['Free Size'] },
  { id: 75, name: "Trucker Cap Mesh Back", brand: 'CapKing', price: 299, old: 599, cat: 'caps', rating: 4.3, reviews: 540, img: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=400&q=80', badge: '', sizes: ['Free Size'] },

  // ── ACCESSORIES ──
  { id: 80, name: "Men's Leather Belt", brand: 'BeltCraft', price: 399, old: 799, cat: 'accessories', rating: 4.6, reviews: 2300, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', badge: '', sizes: ['28','30','32','34','36','38','40'] },
  { id: 81, name: "Women's Sunglasses UV400", brand: 'ShadeCo', price: 599, old: 1199, cat: 'accessories', rating: 4.5, reviews: 1450, img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80', badge: 'Trending', sizes: [] },
  { id: 82, name: "Men's Aviator Sunglasses", brand: 'ShadeCo', price: 499, old: 999, cat: 'accessories', rating: 4.4, reviews: 1870, img: 'https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=400&q=80', badge: '', sizes: [] },
  { id: 83, name: "Women's Stud Earrings Set", brand: 'GoldLook', price: 299, old: 599, cat: 'accessories', rating: 4.7, reviews: 3200, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', badge: 'Best Seller', sizes: [] },
  { id: 84, name: "Men's Formal Tie", brand: 'TieCraft', price: 349, old: 699, cat: 'accessories', rating: 4.5, reviews: 780, img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80', badge: '', sizes: [] },
  { id: 85, name: "Women's Fashion Bracelet Set", brand: 'GoldLook', price: 199, old: 399, cat: 'accessories', rating: 4.6, reviews: 4500, img: 'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=400&q=80', badge: 'Value Set', sizes: [] },
  { id: 86, name: "Unisex Sports Watch", brand: 'TimePro', price: 799, old: 1499, cat: 'accessories', rating: 4.4, reviews: 1200, img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80', badge: '', sizes: [] },
  { id: 87, name: "Men's Wallet Slim Leather", brand: 'BeltCraft', price: 499, old: 999, cat: 'accessories', rating: 4.7, reviews: 2800, img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80', badge: 'Top Rated', sizes: [] },
  { id: 88, name: "Women's Handbag Charm Keyring", brand: 'GoldLook', price: 149, old: 299, cat: 'accessories', rating: 4.5, reviews: 1900, img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80', badge: '', sizes: [] },

  // ── GROCERIES ──
  { id: 90, name: 'Basmati Rice Premium 5kg', brand: 'India Gate', price: 349, old: 449, cat: 'groceries', rating: 4.9, reviews: 5201, img: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&q=80', badge: 'Daily Fresh', sizes: [] },
  { id: 91, name: 'Organic Green Tea 100g', brand: 'TeaLeaf', price: 199, old: 299, cat: 'groceries', rating: 4.8, reviews: 4500, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80', badge: 'Organic', sizes: [] },

  // ── HOME ──
  { id: 95, name: 'LED Architect Desk Lamp', brand: 'LumiDesk', price: 599, old: 999, cat: 'home', rating: 4.7, reviews: 1100, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', badge: '', sizes: [] },
  { id: 96, name: 'Non-Stick Cookware Set', brand: 'ChefPro', price: 1799, old: 3499, cat: 'home', rating: 4.6, reviews: 890, img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80', badge: 'Kitchen Pick', sizes: [] },

  // ── BEAUTY ──
  { id: 100, name: 'SPF 50 Daily Moisturizer', brand: 'GlowUp', price: 449, old: 699, cat: 'beauty', rating: 4.6, reviews: 830, img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80', badge: '', sizes: [] },
  { id: 101, name: 'Face Serum Vitamin C', brand: 'GlowUp', price: 549, old: 899, cat: 'beauty', rating: 4.5, reviews: 2200, img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80', badge: 'Best Seller', sizes: [] },

  // ── SPORTS ──
  { id: 105, name: 'Premium Yoga Mat 6mm', brand: 'ZenFlex', price: 799, old: 1299, cat: 'sports', rating: 4.8, reviews: 1456, img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80', badge: 'Top Rated', sizes: [] },
  { id: 106, name: 'Stainless Steel Water Bottle', brand: 'HydroMax', price: 399, old: 699, cat: 'sports', rating: 4.7, reviews: 3200, img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80', badge: 'Eco Pick', sizes: [] },
];

// ── CART ──
function getCart() { return JSON.parse(localStorage.getItem('kyd_cart') || '[]'); }
function saveCart(c) { localStorage.setItem('kyd_cart', JSON.stringify(c)); updateCartCount(); }
function addToCart(id, name, price, img, size) {
  const cart = getCart();
  const key = id + (size ? '_' + size : '');
  const existing = cart.find(i => i.key === key);
  if (existing) { existing.qty += 1; }
  else { cart.push({ key, id, name, price, img, size: size || '', qty: 1 }); }
  saveCart(cart);
  showToast(`Added to cart! 🛒`);
}
function removeFromCart(key) { saveCart(getCart().filter(i => i.key !== key)); }
function updateQty(key, delta) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) return removeFromCart(key);
  saveCart(cart);
}
function updateCartCount() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}
function getCartTotal() { return getCart().reduce((s, i) => s + i.price * i.qty, 0); }

// ── TOAST ──
function showToast(msg, type = 'default') {
  const e = document.querySelector('.kyd-toast');
  if (e) e.remove();
  const t = document.createElement('div');
  t.className = 'kyd-toast';
  if (type === 'success') t.style.background = '#00B37D';
  if (type === 'error')   t.style.background = '#F03D3D';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t && t.remove(), 2500);
}

// ── USER ──
function getUser() { return JSON.parse(localStorage.getItem('kyd_user') || 'null'); }
function saveUser(u) { localStorage.setItem('kyd_user', JSON.stringify(u)); }
function logout() { localStorage.removeItem('kyd_user'); window.location.href = 'index.html'; }

// ── SEARCH ──
function doSearch() {
  const input = document.getElementById('search-input');
  const q = input ? input.value.trim() : '';
  if (q) window.location.href = `search.html?q=${encodeURIComponent(q)}`;
}

// ── ORDERS ──
function getOrders() { return JSON.parse(localStorage.getItem('kyd_orders') || '[]'); }
function placeOrder(cart, total) {
  const orders = getOrders();
  const order = {
    id: 'KYD' + Date.now().toString().slice(-6),
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    items: cart, total, status: 'Processing'
  };
  orders.unshift(order);
  localStorage.setItem('kyd_orders', JSON.stringify(orders));
  saveCart([]);
  return order;
}

// ── PRODUCT CARD HTML ──
function productCardHTML(p) {
  const discount = Math.round((1 - p.price / p.old) * 100);
  const stars = '★'.repeat(Math.floor(p.rating)) + '☆'.repeat(5 - Math.floor(p.rating));
  const sizeSelect = p.sizes && p.sizes.length > 0
    ? `<select class="size-select" id="size-${p.id}" onclick="event.stopPropagation()">
        <option value="">Select Size</option>
        ${p.sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
       </select>`
    : '';
  return `
    <div class="product-card" onclick="window.location.href='product.html?id=${p.id}'">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80'"/>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span style="color:#F59E0B">${stars}</span>
          <span style="color:var(--muted); font-size:11px; margin-left:4px;">${p.rating} (${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">₹${p.price.toLocaleString()}</span>
          <span class="product-price-old">₹${p.old.toLocaleString()}</span>
          <span class="badge badge-red">${discount}% OFF</span>
        </div>
        ${sizeSelect}
        <button class="add-to-cart" onclick="event.stopPropagation(); handleAddToCart(${p.id})">+ Add to Cart</button>
      </div>
    </div>`;
}

function handleAddToCart(id) {
  const p = KYD_PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const sizeEl = document.getElementById('size-' + id);
  const size = sizeEl ? sizeEl.value : '';
  if (p.sizes && p.sizes.length > 0 && !size) {
    showToast('Please select a size first!', 'error');
    return;
  }
  addToCart(p.id, p.name, p.price, p.img, size);
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  const si = document.getElementById('search-input');
  if (si) si.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
});