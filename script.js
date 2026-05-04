let cart = [];

const products = [
  { id: 1, name: "Royal Ivory Ensemble", price: 24500, img: "https://images.unsplash.com/photo-1585487000160-6eb1f3f3c3e3?w=600" },
  { id: 2, name: "Noir Majesty", price: 27500, img: "https://images.unsplash.com/photo-1591343395084-9c4c5c8b5c5c?w=600" },
  { id: 3, name: "Golden Heritage", price: 28900, img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600" },
  { id: 4, name: "Empress Rose", price: 23900, img: "https://images.unsplash.com/photo-1610030469984-7c2c3e8f0b0a?w=600" }
];

function enterSite() {
  gsap.to("#wardrobe", { scale: 1.15, duration: 1.6, ease: "power3.inOut" });
  gsap.to("#title", { opacity: 1, y: -20, duration: 1.2, delay: 0.3 });
  gsap.to("#tagline", { opacity: 1, y: -20, duration: 1.2, delay: 0.5 });

  setTimeout(() => {
    document.getElementById('entryScreen').classList.add('hidden');
    document.getElementById('mainSite').classList.remove('hidden');
    renderProducts();
    gsap.from(".luxury-card", { y: 80, opacity: 0, duration: 1.4, stagger: 0.1 });
  }, 1200);
}

function renderProducts() {
  const container = document.getElementById('productGrid');
  container.innerHTML = '';
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = `luxury-card bg-white rounded-3xl overflow-hidden cursor-pointer relative group`;
    card.innerHTML = `
      <div class="overflow-hidden">
        <img src="${product.img}" class="product-img w-full h-96 object-cover">
      </div>
      <div class="p-6">
        <h3 class="heading text-2xl">${product.name}</h3>
        <p class="text-[#C6A76A] text-xl font-medium mt-2">PKR ${product.price.toLocaleString()}</p>
        <button onclick="addToCart(${product.id}); event.stopImmediatePropagation()" 
          class="mt-5 w-full py-4 border border-[#C6A76A] hover:bg-[#C6A76A] hover:text-black transition-all text-sm tracking-widest">
          ADD TO CART
        </button>
      </div>
    `;
    card.onclick = () => showProductModal(product);
    container.appendChild(card);
  });
}

function showProductModal(product) {
  alert(`🌟 ${product.name}\nPrice: PKR ${product.price.toLocaleString()}`);
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById('cartCount').textContent = cart.length;
  
  const toast = document.createElement('div');
  toast.style.cssText = `position:fixed; bottom:30px; right:30px; background:#C6A76A; color:#111; padding:18px 32px; border-radius:9999px; font-weight:500; z-index:9999;`;
  toast.textContent = `${product.name} added to cart`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2300);
}

function toggleCart() {
  alert("🛍️ Cart is ready in full version");
}

// Auto Enter
setTimeout(() => {
  if (document.getElementById('mainSite').classList.contains('hidden')) enterSite();
}, 6000);
