const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("input").value;
    alert(`${email} a fost abonat`);
});
