document.addEventListener("DOMContentLoaded", function () {
    const shortcuts = [
        {
            name: "QR Code Multi-Tool",
            description: "A multi-tool QR Code shortcut for scanning and generating QR codes",
            actions: ["Open App", "Send Message", "Set Variable"],
            link: "shortcuts/qrcode.html"
        },
        {
            name: "Close Safari Tabs",
            description: "Closes all safari tabs",
            actions: ["Get Weather", "Play Music", "Run Script"],
            link: "shortcuts/close-safari-tabs.html"
        }
    ];

    const container = document.getElementById("shortcutsContainer");
    if (container) {
        shortcuts.forEach(shortcut => {
            const card = document.createElement("div");
            card.classList.add("shortcut-card");
            card.innerHTML = `
                <h2>${shortcut.name}</h2>
                <p>${shortcut.description}</p>
                <a href="${shortcut.link}">View Details →</a>
            `;
            container.appendChild(card);
        });
    }

    const detailContainer = document.getElementById("actionsList");
    if (detailContainer) {
        const params = new URLSearchParams(window.location.search);
        const shortcutName = params.get("name");

        const shortcut = shortcuts.find(s => s.name === shortcutName);
        if (shortcut) {
            document.getElementById("shortcutName").textContent = shortcut.name;
            document.getElementById("shortcutDescription").textContent = shortcut.description;

            shortcut.actions.forEach(action => {
                const item = document.createElement("li");
                item.classList.add("action-item");
                item.innerHTML = `<h3>Action</h3><p>${action}</p>`;
                detailContainer.appendChild(item);
            });
        }
    }
});
