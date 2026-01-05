const grid = document.getElementById("destinationsGrid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");
const themeToggle = document.getElementById("themeToggle");

function showDestinations(list) {
    grid.innerHTML = "";
    list.forEach(dest => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<img src="${dest.image}"><h4>${dest.name}</h4>`;
        card.onclick = () => openModal(dest);
        grid.appendChild(card);
    });
}

function openModal(dest) {
    modalTitle.textContent = dest.name;
    modalDesc.textContent = dest.description;
    modal.style.display = "flex";
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target === modal) modal.style.display = "none"; };

document.getElementById("searchInput").addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    showDestinations(destinations.filter(d => d.name.toLowerCase().includes(value)));
});

themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains.("dark") ? "☀️" : "🌙";
};

showDestinations(destinations);


