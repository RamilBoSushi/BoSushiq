
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll("#starRating span");
  const form = document.getElementById("feedbackForm");
  let selectedRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      selectedRating = index + 1;
      updateStars(selectedRating);
      if (selectedRating <= 3) {
        form.style.display = "block";
      } else {
        window.location.href = "https://maps.app.goo.gl/WWB4ZqHCcaKKPsJa8";
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const reason = document.getElementById("reason").value.trim();
    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim();

    if (!reason || !name || !contact) {
      alert("Wypełnij wszystkie pola!");
      return;
    }

    const mailtoLink = `mailto:Bosushifaktury@gmail.com?subject=Negatywna opinia (${selectedRating}★)&body=Imię: ${name}%0D%0AKontakt: ${contact}%0D%0AOgłos: ${reason}`;
    window.location.href = mailtoLink;

    alert("Dziękujemy za Twoją opinię!");
    form.reset();
    form.style.display = "none";
    updateStars(0);
  });

  function updateStars(rating) {
    stars.forEach((s, i) => {
      s.classList.toggle("selected", i < rating);
    });
  }
});
