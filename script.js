const products = {
  Spring: [
    ["薄荷", "Mint Skirt Set", "清新套装", "¥368", "01 Clothes/spring (1).png", "02 Clothes dressup/spring (3).png", ["Fresh", "Light", "Spring"]],
    ["丁香裤", "Lilac Pants Set", "柔紫通勤", "¥300", "01 Clothes/spring (2).png", "02 Clothes dressup/spring (4).png", ["Soft", "Clean", "Daily"]],
    ["云袖白裙", "Cloud Sleeve Dress", "浪漫半裙", "¥512", "01 Clothes/spring (3).png", "02 Clothes dressup/spring (1).png", ["Bloom", "Airy", "Chic"]],
    ["杏粉开衫", "Blush Pleat Set", "温柔开衫", "¥489", "01 Clothes/spring (4).png", "02 Clothes dressup/spring (2).png", ["Blush", "Layer", "Ease"]],
    ["风衣白裤", "Ivory Trench Set", "利落通勤", "¥638", "01 Clothes/spring2 (1).png", "02 Clothes dressup/spring2 (2).png", ["Trench", "Ivory", "City"]],
    ["蕾丝奶裙", "Lace Cream Dress", "柔光裙装", "¥568", "01 Clothes/spring2 (2).png", "02 Clothes dressup/spring2 (3).png", ["Lace", "Cream", "Soft"]],
    ["牛仔条纹", "Denim Stripe Set", "休闲叠搭", "¥429", "01 Clothes/spring2 (3).png", "02 Clothes dressup/spring2 (4).png", ["Denim", "Stripe", "Casual"]],
    ["粉格套", "Pink Plaid Set", "甜美学院", "¥498", "01 Clothes/spring2 (4).png", "02 Clothes dressup/spring2 (1).png", ["Plaid", "Blush", "Preppy"]]
  ],
  Summer: [
    ["蓝风", "Blue Breeze Set", "短袖清爽", "¥336", "01 Clothes/summer (1).png", "02 Clothes dressup/summer (2).png", ["Breeze", "Cool", "Day"]],
    ["轻沙长裙", "Sand Shirt Dress", "松弛裙装", "¥458", "01 Clothes/summer (2).png", "02 Clothes dressup/summer (1).png", ["Resort", "Soft", "Flow"]],
    ["青橄榄", "Olive Polo Set", "利落短套", "¥399", "01 Clothes/summer (3).png", "02 Clothes dressup/summer (4).png", ["Fresh", "Sporty", "Easy"]],
    ["粉雾", "Pink Mist Dress", "轻盈吊带", "¥298", "01 Clothes/summer (4).png", "02 Clothes dressup/summer (3).png", ["Sweet", "Airy", "Summer"]],
    ["紫藤裙", "Wisteria Slip Set", "花园吊带", "¥389", "01 Clothes/summer2 (1).png", "02 Clothes dressup/summer2 (4).png", ["Floral", "Lilac", "Light"]],
    ["运动短套", "Sport Short Set", "活力短装", "¥269", "01 Clothes/summer2 (2).png", "02 Clothes dressup/summer2 (2).png", ["Sport", "Navy", "Fresh"]],
    ["蓝瓷套", "Porcelain Resort Set", "度假印花", "¥599", "01 Clothes/summer2 (3).png", "02 Clothes dressup/summer2 (3).png", ["Print", "Resort", "Airy"]],
    ["白衬短裤", "White Linen Set", "亚麻清爽", "¥329", "01 Clothes/summer2 (4).png", "02 Clothes dressup/summer2 (1).png", ["Linen", "White", "Easy"]]
  ],
  Autumn: [
    ["玫豆", "Rose Bean Set", "针织半裙", "¥529", "01 Clothes/autumn (1).png", "02 Clothes dressup/autumn (3).png", ["Warm", "Knit", "Soft"]],
    ["橄榄阔裤", "Olive Trousers", "衬衫阔腿", "¥586", "01 Clothes/autumn (2).png", "02 Clothes dressup/autumn (4).png", ["Tailored", "Calm", "City"]],
    ["奶茶背心", "Milk Tea Dress", "学院叠搭", "¥468", "01 Clothes/autumn (3).png", "02 Clothes dressup/autumn (1).png", ["Preppy", "Layer", "Gentle"]],
    ["栗格长裙", "Chestnut Plaid", "格纹毛衣", "¥439", "01 Clothes/autumn (4).png", "02 Clothes dressup/autumn (2).png", ["Plaid", "Retro", "Amber"]],
    ["橄榄通勤", "Olive Office Set", "修身长裤", "¥536", "01 Clothes/autumn2 (1).png", "02 Clothes dressup/autumn2 (1).png", ["Olive", "Office", "Clean"]],
    ["咖格学院", "Coffee Plaid Suit", "学院西装", "¥669", "01 Clothes/autumn2 (2).png", "02 Clothes dressup/autumn2 (4).png", ["Blazer", "Plaid", "Academy"]],
    ["黑裙背心", "Black Pleat Vest", "针织背心", "¥459", "01 Clothes/autumn2 (3).png", "02 Clothes dressup/autumn2 (3).png", ["Vest", "Pleat", "Preppy"]],
    ["玫豆开衫", "Rose Cardigan Set", "温柔半裙", "¥526", "01 Clothes/autumn2 (4).png", "02 Clothes dressup/autumn2 (2).png", ["Rose", "Knit", "Warm"]]
  ],
  Winter: [
    ["玫绒", "Rose Wool Set", "软糯针织", "¥566", "01 Clothes/winter (1).png", "02 Clothes dressup/winter (4).png", ["Cozy", "Warm", "Soft"]],
    ["雪羽", "Snow Puffer Look", "羽绒叠搭", "¥829", "01 Clothes/winter (2).png", "02 Clothes dressup/winter (2).png", ["Puffer", "Winter", "Layer"]],
    ["墨绿大衣", "Forest Coat Look", "大衣长线", "¥899", "01 Clothes/winter (3).png", "02 Clothes dressup/winter (3).png", ["Coat", "Quiet", "Luxe"]],
    ["灰格学院", "Grey Plaid Set", "围巾学院", "¥628", "01 Clothes/winter (4).png", "02 Clothes dressup/winter (1).png", ["Plaid", "Warm", "Preppy"]],
    ["绿芯大衣", "Green Core Coat", "长线大衣", "¥799", "01 Clothes/winter2 (1).png", "02 Clothes dressup/winter2 (2).png", ["Coat", "Cream", "Layer"]],
    ["栗格大衣", "Chestnut Coat Set", "复古厚呢", "¥888", "01 Clothes/winter2 (2).png", "02 Clothes dressup/winter2 (1).png", ["Chestnut", "Wool", "Retro"]],
    ["黑曜大衣", "Obsidian Coat", "冷调长款", "¥928", "01 Clothes/winter2 (3).png", "02 Clothes dressup/winter2 (4).png", ["Black", "Sharp", "Winter"]],
    ["雪粉羽绒", "Blush Puffer Set", "柔粉保暖", "¥769", "01 Clothes/winter2 (4).png", "02 Clothes dressup/winter2 (3).png", ["Puffer", "Blush", "Cozy"]]
  ]
};

const bagButton = document.querySelector("#bagButton");
const bagCount = document.querySelector("#bagCount");
const toast = document.querySelector("#toast");
const modal = document.querySelector("#lookModal");
const modalSeason = document.querySelector("#modalSeason");
const modalTitle = document.querySelector("#modalTitle");
const modalPrice = document.querySelector("#modalPrice");
const modalTags = document.querySelector("#modalTags");
const modalModelImage = document.querySelector("#modalModelImage");
const modalAddButton = document.querySelector("#modalAddButton");
const sizeButtons = document.querySelectorAll("[data-size]");
const modalQtyMinus = document.querySelector("#modalQtyMinus");
const modalQtyPlus = document.querySelector("#modalQtyPlus");
const modalQtyValue = document.querySelector("#modalQtyValue");
const heroTrack = document.querySelector("#heroTrack");
const heroPrev = document.querySelector("#heroPrev");
const heroNext = document.querySelector("#heroNext");
const heroSliderThumb = document.querySelector("#heroSliderThumb");
const cartDrawer = document.querySelector("#cartDrawer");
const cartList = document.querySelector("#cartList");
const cartEmpty = document.querySelector("#cartEmpty");
const cartSubtotal = document.querySelector("#cartSubtotal");
const clearCartButton = document.querySelector("#clearCartButton");

let selectedProduct = null;
let selectedSize = "";
let selectedQuantity = 0;
let toastTimer;
let currentHeroPage = 0;
let isHeroAnimating = false;
let heroAutoTimer;
const cartItems = new Map();
const heroAutoDelay = 3000;
const heroTransitionMs = 760;

const heroPages = [
  [
    ["Spring", 2, "Spring Bloom"],
    ["Summer", 1, "Summer Flow"],
    ["Autumn", 2, "Autumn Layer"],
    ["Winter", 3, "Winter Plaid"],
    ["Spring", 3, "Soft Blush"],
    ["Summer", 0, "Blue Breeze"],
    ["Autumn", 3, "Chestnut Mood"],
    ["Winter", 1, "Snow Layer"]
  ],
  [
    ["Spring", 4, "Ivory Trench"],
    ["Summer", 4, "Lilac Garden"],
    ["Autumn", 4, "Olive Office"],
    ["Winter", 4, "Green Core"],
    ["Spring", 5, "Lace Cream"],
    ["Summer", 5, "Sport Short"],
    ["Autumn", 5, "Coffee Plaid"],
    ["Winter", 5, "Chestnut Coat"]
  ],
  [
    ["Spring", 6, "Denim Stripe"],
    ["Summer", 6, "Porcelain Set"],
    ["Autumn", 6, "Black Pleat"],
    ["Winter", 6, "Obsidian Coat"],
    ["Spring", 7, "Pink Plaid"],
    ["Summer", 7, "White Linen"],
    ["Autumn", 7, "Rose Cardigan"],
    ["Winter", 7, "Blush Puffer"]
  ]
];

function productKey(season, index, size) {
  return `${season}-${index}-${size}`;
}

function parsePrice(price) {
  return Number(price.replace(/[^\d]/g, ""));
}

function formatPrice(value) {
  return `¥${value}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1500);
}

function createProductCard(season, product, index) {
  const [name, englishName, note, price, image] = product;
  const card = document.createElement("article");
  card.className = "product-card";
  card.id = productKey(season, index, "card");
  card.dataset.season = season;
  card.dataset.index = index;
  card.innerHTML = `
    <div class="item-placeholder">
      <img src="${image}" alt="${name}">
    </div>
    <div class="product-info">
      <p>${englishName}</p>
      <h3>${name}</h3>
      <div class="product-meta">
        <span>${note}</span>
        <div class="product-actions">
          <strong>${price}</strong>
          <button class="show-look-button" type="button" aria-label="Show ${name} model styling">Show</button>
        </div>
      </div>
    </div>
  `;

  card.querySelector(".show-look-button").addEventListener("click", () => {
    openProductModal(season, product, index);
  });
  return card;
}

function renderProducts() {
  document.querySelectorAll(".product-grid").forEach((grid) => {
    const season = grid.dataset.season;
    const cards = products[season].map((product, index) => createProductCard(season, product, index));
    grid.replaceChildren(...cards);
  });
}

function createHeroCard(entry, position) {
  const [season, index, label] = entry;
  const product = products[season][index];
  const [name, englishName, note, price, image, dressupImage] = product;
  const card = document.createElement("button");
  card.className = `hero-dress-card hero-card-pos-${position + 1}`;
  card.type = "button";
  card.dataset.heroSeason = season;
  card.dataset.heroIndex = index;
  card.innerHTML = `
    <img src="${dressupImage}" alt="${name}模特穿搭">
    <span>${label}</span>
  `;
  card.addEventListener("click", () => jumpToProduct(season, index));
  return card;
}

function renderHeroPage() {
  if (!heroTrack.children.length) {
    const pages = heroPages.map((page) => {
      const pageElement = document.createElement("div");
      pageElement.className = "hero-page";
      pageElement.replaceChildren(...page.map((entry, index) => createHeroCard(entry, index)));
      return pageElement;
    });
    heroTrack.replaceChildren(...pages);
  }
  [...heroTrack.children].forEach((page, index) => {
    page.className = index === currentHeroPage ? "hero-page is-active" : "hero-page";
  });
  heroSliderThumb.style.transform = `translateX(${currentHeroPage * 100}%)`;
}

function stopHeroAuto() {
  window.clearTimeout(heroAutoTimer);
}

function scheduleHeroAuto() {
  stopHeroAuto();
  heroAutoTimer = window.setTimeout(() => {
    changeHeroPage(1);
  }, heroAutoDelay);
}

function changeHeroPage(direction, isManual = false) {
  if (isManual) {
    stopHeroAuto();
  }

  if (isHeroAnimating) {
    scheduleHeroAuto();
    return;
  }

  const nextPage = (currentHeroPage + direction + heroPages.length) % heroPages.length;
  if (nextPage === currentHeroPage) {
    scheduleHeroAuto();
    return;
  }

  const currentElement = heroTrack.children[currentHeroPage];
  const nextElement = heroTrack.children[nextPage];
  const enterClass = "from-right";
  const leaveClass = "to-left";

  isHeroAnimating = true;
  nextElement.className = `hero-page is-entering ${enterClass}`;
  currentElement.classList.add("is-leaving");
  heroSliderThumb.style.transform = `translateX(${nextPage * 100}%)`;

  window.requestAnimationFrame(() => {
    currentElement.classList.remove("is-active");
    currentElement.classList.add(leaveClass);
    nextElement.classList.remove(enterClass);
    nextElement.classList.add("is-active");
  });

  window.setTimeout(() => {
    currentElement.className = "hero-page";
    nextElement.className = "hero-page is-active";
    currentHeroPage = nextPage;
    isHeroAnimating = false;
    scheduleHeroAuto();
  }, heroTransitionMs);
}

function jumpToProduct(season, index) {
  const target = document.querySelector(`#${productKey(season, index, "card")}`);
  if (!target) return;

  scheduleHeroAuto();
  target.scrollIntoView({ behavior: "smooth", block: "center" });

  const highlightTarget = () => {
    target.classList.remove("is-focused");
    void target.offsetWidth;
    target.classList.add("is-focused");
    window.setTimeout(() => {
      target.classList.remove("is-focused");
    }, 1000);
  };

  let hasHighlighted = false;
  const runHighlight = () => {
    if (hasHighlighted) return;

    hasHighlighted = true;
    highlightTarget();
  };

  if ("onscrollend" in window) {
    const fallbackTimer = window.setTimeout(runHighlight, 1200);
    window.addEventListener("scrollend", () => {
      window.clearTimeout(fallbackTimer);
      runHighlight();
    }, { once: true });
    return;
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const isTargetVisible = entries.some((entry) => entry.isIntersecting);

      if (!isTargetVisible || hasHighlighted) return;

      observer.disconnect();
      window.clearTimeout(fallbackTimer);
      runHighlight();
    }, { threshold: 0.55 });
    const fallbackTimer = window.setTimeout(() => {
      if (hasHighlighted) return;

      observer.disconnect();
      runHighlight();
    }, 1100);

    observer.observe(target);
    return;
  }

  window.setTimeout(runHighlight, 700);
}

function resetPurchaseOptions() {
  selectedSize = "";
  selectedQuantity = 0;
  modalQtyValue.textContent = selectedQuantity;
  sizeButtons.forEach((button) => button.classList.remove("is-active"));
  updateModalAddState();
}

function updateModalAddState() {
  const ready = Boolean(selectedSize) && selectedQuantity > 0;
  modalAddButton.disabled = !ready;
  modalAddButton.textContent = ready ? "加入购物袋" : "请选择尺码和数量";
}

function openProductModal(season, product, index) {
  const [name, englishName, note, price, image, dressupImage, tags] = product;
  selectedProduct = { season, product, index };
  modalSeason.textContent = `${season.toUpperCase()} LOOK / MODEL STYLING`;
  modalTitle.textContent = `${name} · ${englishName}`;
  modalPrice.textContent = price;
  modalModelImage.src = dressupImage;
  modalModelImage.alt = `${name} 模特穿搭`;
  modalTags.replaceChildren(...tags.map((tag) => {
    const item = document.createElement("span");
    item.textContent = tag;
    return item;
  }));
  resetPurchaseOptions();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function addSelectedToBag() {
  if (!selectedProduct) return;
  if (!selectedSize || selectedQuantity <= 0) {
    showToast("请选择尺码和数量");
    return;
  }

  const { season, product, index } = selectedProduct;
  const key = productKey(season, index, selectedSize);
  const existing = cartItems.get(key);

  if (existing) {
    existing.quantity += selectedQuantity;
  } else {
    cartItems.set(key, { season, product, index, size: selectedSize, quantity: selectedQuantity });
  }

  renderCart();
  showToast("已加入购物袋 / Added to bag");
}

function updateBagCount() {
  const count = [...cartItems.values()].reduce((sum, item) => sum + item.quantity, 0);
  bagCount.textContent = count;
}

function renderCart() {
  const entries = [...cartItems.entries()];
  cartList.replaceChildren(...entries.map(([key, item]) => createCartRow(key, item)));

  const subtotal = entries.reduce((sum, [, item]) => {
    return sum + parsePrice(item.product[3]) * item.quantity;
  }, 0);

  cartEmpty.hidden = entries.length > 0;
  cartSubtotal.textContent = formatPrice(subtotal);
  clearCartButton.disabled = entries.length === 0;
  updateBagCount();
}

function createCartRow(key, item) {
  const [name, englishName, note, price, image] = item.product;
  const row = document.createElement("article");
  row.className = "cart-item";
  row.innerHTML = `
    <img src="${image}" alt="${name}">
    <div class="cart-item-copy">
      <p>${englishName}</p>
      <h3>${name}</h3>
      <span>${price} · 尺码 ${item.size}</span>
    </div>
    <div class="quantity-control" aria-label="${name} quantity">
      <button type="button" data-cart-minus="${key}" aria-label="Decrease ${name}">−</button>
      <strong>${item.quantity}</strong>
      <button type="button" data-cart-plus="${key}" aria-label="Increase ${name}">+</button>
    </div>
  `;
  return row;
}

function openCart() {
  renderCart();
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function clearCart() {
  if (!cartItems.size) return;
  cartItems.clear();
  renderCart();
  showToast("购物车已清空");
}

renderProducts();
renderCart();
renderHeroPage();
scheduleHeroAuto();

modalAddButton.addEventListener("click", addSelectedToBag);
bagButton.addEventListener("click", openCart);
clearCartButton.addEventListener("click", clearCart);
heroPrev.addEventListener("click", () => changeHeroPage(-1, true));
heroNext.addEventListener("click", () => changeHeroPage(1, true));

[heroTrack, heroPrev, heroNext].forEach((element) => {
  element.addEventListener("pointerdown", scheduleHeroAuto);
  element.addEventListener("keydown", scheduleHeroAuto);
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopHeroAuto();
  } else {
    scheduleHeroAuto();
  }
});

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedSize = button.dataset.size;
    sizeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    updateModalAddState();
  });
});

modalQtyMinus.addEventListener("click", () => {
  selectedQuantity = Math.max(0, selectedQuantity - 1);
  modalQtyValue.textContent = selectedQuantity;
  updateModalAddState();
});

modalQtyPlus.addEventListener("click", () => {
  selectedQuantity = Math.min(9, selectedQuantity + 1);
  modalQtyValue.textContent = selectedQuantity;
  updateModalAddState();
});

cartList.addEventListener("click", (event) => {
  const plusKey = event.target.dataset.cartPlus;
  const minusKey = event.target.dataset.cartMinus;
  const key = plusKey || minusKey;

  if (!key || !cartItems.has(key)) return;

  const item = cartItems.get(key);
  item.quantity += plusKey ? 1 : -1;

  if (item.quantity <= 0) {
    cartItems.delete(key);
  }

  renderCart();
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.querySelectorAll("[data-close-cart]").forEach((button) => {
  button.addEventListener("click", closeCart);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (modal.classList.contains("is-open")) closeModal();
    if (cartDrawer.classList.contains("is-open")) closeCart();
  }
});
