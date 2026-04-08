const grid = document.getElementById("product-grid");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card glass";

  card.innerHTML = `
    <div class="eyebrow">${p.tier}</div>
    <div class="product-image"></div>
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <div class="stat-row"><span>Power Generated</span><span>TBA</span></div>
    <div class="stat-row"><span>Cost</span><span>TBA</span></div>
    <div class="stat-row"><span>Cost per Watt</span><span>TBA</span></div>
  `;

  grid.appendChild(card);
});
