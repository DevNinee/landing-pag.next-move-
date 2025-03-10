document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg');

    if (name && email) {
        msg.textContent = `Obrigado, ${name}! Em breve entraremos em contato.`;
        msg.style.color = "green";
    } else {
        msg.textContent = "Por favor, preencha todos os campos.";
        msg.style.color = "red";
    }
});
