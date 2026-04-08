const grid = document.getElementById("product-grid");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-tier eyebrow">${p.tier}</div>

    <div class="product-media">
      <img src="${p.image}" alt="${p.name}" class="product-img" />
      <div class="product-overlay"></div>
    </div>

    <div class="product-body">
      <div class="product-copy">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      </div>

      <div class="product-stats">
        <div class="stat-row">
          <span>Power Generated</span>
          <strong>TBA</strong>
        </div>
        <div class="stat-row">
          <span>Cost</span>
          <strong>TBA</strong>
        </div>
        <div class="stat-row">
          <span>Cost per Watt</span>
          <strong>TBA</strong>
        </div>
      </div>
    </div>
  `;

  grid.appendChild(card);
});

