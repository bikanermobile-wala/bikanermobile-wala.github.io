// ===== BIKANER MOBILEWALA — Shared Data & Logic =====

const SHOP = {
  name: "BIKANER MOBILEWALA",
  tagline: "Certified Authentic. Premium Apple Experience.",
  phones: ["+919925231505", "+917016293848"],
  address: "Surat, Gujarat, India",
  timings: "Open 24 × 7",
  logo: "https://i.ibb.co/1Y74N9p9/file-000000003fb0720893467d9180ab50aa.png",
  hero: "https://i.ibb.co/QFFtLqLz/1783354100759.png"
};

const PRODUCTS = [
  { img: "https://i.ibb.co/R1X34wC/IMG-0131.jpg", name: "iPhone 17 Pro Max", spec: "256GB · Silver", badge: "New", series: "iPhone 17" },
  { img: "https://i.ibb.co/twLPdg0F/IMG-0130.jpg", name: "iPhone 17 Pro", spec: "256GB · Orange", badge: "New", series: "iPhone 17" },
  { img: "https://i.ibb.co/chB3G8y2/IMG-0129.jpg", name: "iPhone 17 Pro", spec: "256GB · Silver", badge: "New", series: "iPhone 17" },
  { img: "https://i.ibb.co/8nY5StvZ/IMG-0128.jpg", name: "iPhone 17 Pro Max", spec: "256GB · Orange", badge: "New", series: "iPhone 17" },
  { img: "https://i.ibb.co/0yKRgKLh/IMG-0127.jpg", name: "iPhone 17 Pro", spec: "256GB", badge: "Active Unit", series: "iPhone 17" },
  { img: "https://i.ibb.co/VYL1BXQJ/IMG-0126.jpg", name: "iPhone 17 Pro", spec: "512GB · Silver", badge: "Active Unit", series: "iPhone 17" },
  { img: "https://i.ibb.co/j9XFC6wH/IMG-0125.jpg", name: "iPhone 17", spec: "256GB · Indian Unit", badge: "New", series: "iPhone 17" },
  { img: "https://i.ibb.co/xKswctpk/IMG-0124.jpg", name: "iPhone 17 Pro Max", spec: "256GB · Orange", badge: "New", series: "iPhone 17" },
  { img: "https://i.ibb.co/pr22M6gQ/IMG-0123.jpg", name: "iPhone 16", spec: "128GB · Indian Unit", badge: "New", series: "iPhone 16" },
  { img: "https://i.ibb.co/j9YkJ3dY/IMG-0122.jpg", name: "iPhone 17 Pro Max", spec: "256GB · Blue", badge: "Active Unit", series: "iPhone 17" },
  { img: "https://i.ibb.co/mCCm19cc/IMG-0121.jpg", name: "iPhone 17 Pro Max", spec: "256GB · Silver", badge: "New", series: "iPhone 17" },
  { img: "https://i.ibb.co/jvwzcZXQ/IMG-0120.jpg", name: "iPhone 17 Pro", spec: "256GB · Orange & Silver", badge: "Active Unit", series: "iPhone 17" },
  { img: "https://i.ibb.co/99Y8x6GF/IMG-0119.jpg", name: "Samsung Galaxy S24 Ultra", spec: "", badge: "New", series: "Samsung" },
  { img: "https://i.ibb.co/Y489BMtk/IMG-0118.jpg", name: "iPhone 16", spec: "256GB · Black & Pink", badge: "New", series: "iPhone 16" },
  { img: "https://i.ibb.co/jPBx9xzJ/IMG-0117.jpg", name: "Samsung Galaxy Z Fold 7", spec: "", badge: "Active Unit", series: "Samsung" },
  { img: "https://i.ibb.co/7xMJXmnc/IMG-0116.jpg", name: "iPhone 16 Pro Max", spec: "256GB", badge: "New", series: "iPhone 16" },
  { img: "https://i.ibb.co/rRTrD5z0/IMG-0115.jpg", name: "iPhone 16 Pro", spec: "256GB · Desert Titanium", badge: "New", series: "iPhone 16" },
  { img: "https://i.ibb.co/0V9vd0j3/IMG-0114.jpg", name: "iPhone 16 Pro Max", spec: "256GB", badge: "New", series: "iPhone 16" },
  { img: "https://i.ibb.co/Q3qp4GbS/IMG-0113.jpg", name: "iPhone 15 Pro Max", spec: "256GB · Black", badge: "New", series: "iPhone 15" },
  { img: "https://i.ibb.co/1tk7tT2d/IMG-0112.jpg", name: "iPhone 16 Pro", spec: "128GB · Silver", badge: "New", series: "iPhone 16" },
  { img: "https://i.ibb.co/kgQNW4Nj/IMG-0111.jpg", name: "Huawei Mate XT Trifold", spec: "", badge: "New", series: "Huawei" },
  { img: "https://i.ibb.co/CKQCgtTT/IMG-0110.jpg", name: "iPhone 15 Pro", spec: "256GB · Natural Titanium", badge: "", series: "iPhone 15" },
  { img: "https://i.ibb.co/Xr6FsyLS/578f0f0c-82c0-41e1-b83f-6e136d7055ad.jpg", name: "Samsung Galaxy S25 Ultra", spec: "256GB", badge: "New", series: "Samsung" }
];

function waLink(product) {
  const num = SHOP.phones[0].replace("+", "");
  const text = encodeURIComponent(
    `Hi ${SHOP.name}, I'm interested in ${product.name}${product.spec ? " (" + product.spec : ""}${product.spec ? ")" : ""}. Please share the price.`
  );
  return `https://wa.me/${num}?text=${text}`;
}

function productCard(p) {
  const isOut = p.badge === "Out of Stock";
  return `
    <article class="p-card${isOut ? " out-of-stock" : ""}">
      <div class="p-media">
        ${p.badge ? `<span class="p-badge${isOut ? " badge-out" : ""}">${p.badge}</span>` : ""}
        <img src="${p.img}" alt="${p.name} ${p.spec}" loading="lazy">
      </div>
      <div class="p-info">
        <h3>${p.name}</h3>
        ${p.spec ? `<p class="p-spec">${p.spec}</p>` : ""}
        ${isOut
          ? `<span class="p-cta p-cta-disabled">Currently Unavailable</span>`
          : `<a class="p-cta" href="${waLink(p)}" target="_blank" rel="noopener">Send Query <span aria-hidden="true">↗</span></a>`}
      </div>
    </article>`;
}

function renderGrid(targetId, list) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = list.map(productCard).join("");
}

function renderRail(targetId, list) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = list.map(productCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
      toggle.classList.toggle("active");
    });
  }

  // Populate WhatsApp links for static contact buttons
  document.querySelectorAll("[data-wa]").forEach((a) => {
    const num = a.getAttribute("data-wa").replace("+", "");
    a.href = `https://wa.me/${num}`;
  });

  // Home page featured rail (first 8 products)
  if (document.getElementById("featured-rail")) {
    renderRail("featured-rail", PRODUCTS.slice(0, 10));
  }

  // Products page: full grid + filters
  if (document.getElementById("product-grid")) {
    renderGrid("product-grid", PRODUCTS);

    const filterBar = document.getElementById("filter-bar");
    if (filterBar) {
      const seriesList = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.series)))];
      filterBar.innerHTML = seriesList
        .map((s, i) => `<button class="filter-btn${i === 0 ? " active" : ""}" data-series="${s}">${s}</button>`)
        .join("");

      filterBar.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const s = btn.dataset.series;
        const filtered = s === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.series === s);
        renderGrid("product-grid", filtered);
      });
    }
  }

  // Reveal-on-scroll
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }
});
