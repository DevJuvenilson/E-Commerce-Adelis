// Funções para abrir e fechar o modal
function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Script para navegação entre as etapas do formulário
let currentStep = 0;
const steps = document.querySelectorAll('.step');

function showStep(step) {
    steps.forEach((stepElement, index) => {
        stepElement.classList.toggle('active', index === step);
    });
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}
showStep(currentStep);

// Script para buscar endereço com o CEP
function buscarEndereco() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const mensagem = document.getElementById('mensagem');
    if (cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    mensagem.textContent = 'CEP não encontrado!';
                } else {
                    document.getElementById('localizacao').innerText = `
                        ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}
                    `;
                    document.querySelector('input[placeholder="Endereço"]').value = data.logradouro;
                    document.querySelector('input[placeholder="Bairro"]').value = data.bairro;
                    document.querySelector('input[placeholder="Cidade"]').value = data.localidade;
                    document.querySelector('input[placeholder="Estado"]').value = data.uf;
                }
            })
            .catch(error => {
                mensagem.textContent = 'Erro ao encontrar CEP';
                mensagem.style.color = 'red';
                console.error(error);
            });
    } else {
        mensagem.textContent = 'Por favor, insira um CEP válido.';
        mensagem.style.color = 'red';
    }
}

function calcCupom() {
    const cupomInput = document.getElementById('cupomInput').value.trim().toUpperCase();
    const totalproduto = document.getElementById('total')

    let desconto = 0
    if (cupom === 'CUPOM10') {
        desconto = 10; 
    } else if (cupom === 'CUPOM20') {
        desconto = 20; 
    } else {
        alert('Cupom inválido!');
        return;
    }

    const total = subtotal - desconto;

    totalproduto.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}