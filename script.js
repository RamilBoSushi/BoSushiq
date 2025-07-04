
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const ratingInput = document.querySelector('input[name="rating"]');
    const complaintInput = document.querySelector('textarea[name="reason"]');
    const nameInput = document.querySelector('input[name="name"]');
    const contactInput = document.querySelector('input[name="contact"]');

    const modal = document.getElementById("thankYouModal");
    const closeBtn = document.querySelector(".close");
    const modalText = modal?.querySelector("p");

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const rating = parseInt(ratingInput.value);

        if (rating <= 3) {
            if (!complaintInput.value.trim() || !nameInput.value.trim() || !contactInput.value.trim()) {
                alert("Uzupełnij wszystkie pola przed wysłaniem opinii.");
                return;
            }

            if (modal && modalText) {
                modalText.innerText = "Dziękujemy za Twoją opinię!";
                modal.style.display = "block";
            }
        } else {
            window.location.href = "https://maps.app.goo.gl/WWB4ZqHCcaKKPsJa8";
        }
    });

    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
        };
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
