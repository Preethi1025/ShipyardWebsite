document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("shipOrderForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Ship order submitted successfully!");
    });

    document.getElementById("repairForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Repair complaint submitted successfully!");
    });
});

function checkStatus() {
    let statusMessages = [
        "Repair in progress...",
        "Parts ordered, waiting for arrival.",
        "Final testing underway...",
        "Repair completed successfully!"
    ];
    let randomStatus = statusMessages[Math.floor(Math.random() * statusMessages.length)];
    document.getElementById("repairStatus").innerText = randomStatus;
}
