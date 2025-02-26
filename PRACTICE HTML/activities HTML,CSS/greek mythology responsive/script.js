document.addEventListener("DOMContentLoaded", function () {
    // Toggle extra text functionality
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function () {
            const parentDiv = this.parentElement;
            let extraText = parentDiv.querySelector(".extra-text");

            // Toggle visibility
            if (extraText.style.display === "none" || extraText.style.display === "") {
                extraText.style.display = "block";
                this.textContent = "Show Less";
            } else {
                extraText.style.display = "none";
                this.textContent = "Show More";
            }
        });
    });

    // Create modal for image popout
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <span class="close-btn">&times;</span>
        <img class="modal-content">
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector(".modal-content");
    const closeBtn = modal.querySelector(".close-btn");

    // Open modal when clicking an image
    document.querySelectorAll(".god img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src; // Set modal image to clicked image
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
