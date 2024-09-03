// FUNCIONAMENTO DOS BOTÕES PARA AUMENTAR OU DIMINUIR A QUANTIDADE
document.getElementById('increase').addEventListener('click', function () {
    let quantityInput = document.getElementById('quantity-input');
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.getElementById('decrease').addEventListener('click', function () {
    let quantityInput = document.getElementById('quantity-input');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

// AUMENTAR PREÇO DE ACORDO COM QUANTIDADE
// function calculateTotalPrice() {
//     let total = 0;
//     const roupa = querySelector('.detalhes-direita');
//     const quantidade = querySelector('.quantity-container')
//     var price = parseFloat(roupa.getAttribute('data-price'));
//     var quantity = parseInt(quantidade.querySelector('input[type="number"]').value);

//     if (!isNaN(price) && !isNaN(quantity) && quantity > 0) {
//         total = total + (price * quantity)
//     }

//     //Verifica se o total é válido antes de atualizar o elemento HTML
//     if (!isNaN(total) && total >= 0) {
//         document.getElementById('total-price').textContent = total.toFixed(2).replace('.', ',');
//     }
// }

// Função para calcular o preço total
function calculateTotalPrice() {
    const div = document.getElementById('div-conteudo')
    const input = document.getElementById("quantity-input")
    const quantity = parseInt(input.value);
    const pricePerItem = parseFloat(div.getAttribute('data-price'));
    const totalPrice = quantity * pricePerItem;

    // Verifica se o preço por item é um número válido
    if (!isNaN(pricePerItem)) {
        const totalPrice = quantity * pricePerItem;
        document.getElementById('total-price').textContent = totalPrice.toFixed(2).replace(".", ",");
    } else {
        document.getElementById('total-price').textContent = "0,00"; // Valor padrão em caso de erro
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('#quantity-input');
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');

    // Event listeners para os botões de incremento e decremento
    decreaseBtn.addEventListener('click', () => {
        inputs.value = parseInt(inputs.value) - 1;
        calculateTotalPrice(); // Recalcula o preço total após o valor ser alterado
    });

    increaseBtn.addEventListener('click', () => {
        inputs.value = parseInt(inputs.value) + 1;
        calculateTotalPrice(); // Recalcula o preço total após o valor ser alterado
    });

    // Cálculo inicial
    calculateTotalPrice();
});