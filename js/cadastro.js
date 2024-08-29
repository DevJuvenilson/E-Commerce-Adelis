const senhaInput = document.getElementById('senha');
const confirmarsenhaInput = document.getElementById('confirmar-senha');
const mensagem = document.getElementById('mensagem');

function validatePassword() {
    if (senhaInput.value === confirmarsenhaInput.value && senhaInput.value !== '') {
        mensagem.textContent = 'Correto';
        mensagem.style.color = '#162C49';
    } else if (senhaInput.value !== '' && confirmarsenhaInput.value !== '') {
        mensagem.textContent = 'Incorreto';
        mensagem.style.color = 'red';
    } else {
        mensagem.textContent = '';
    }
}

senhaInput.addEventListener('input', validatePassword);
confirmarsenhaInput.addEventListener('input', validatePassword);