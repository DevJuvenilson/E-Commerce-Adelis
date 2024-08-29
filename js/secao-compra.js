const roupas = [
    { id: 1, imagem: 'assets/images/produtos/Captura_de_tela_2024-08-28_201736-removebg-preview.png', name: "CALÇA CARGO", description: 'Calça Cargo', price:  59.90, gender: 'masculino', category: 'calça' },
    { id: 2, imagem: 'assets/images/produtos/Captura_de_tela_2024-08-28_201703-removebg-preview.png', name: "CALÇA CARGO", description: 'Calça Cargo com Bolso', price:  49.90, gender: 'feminino', category: 'calça' },
    { id: 3, imagem: 'assets/images/produtos/Captura_de_tela_2024-08-28_201800-removebg-preview.png', name: "CALÇA ", description: 'Calça com Textura', price:  69.90, gender: 'feminino', category: 'calça' },
    { id: 4, imagem: 'assets/images/produtos/Captura_de_tela_2024-08-28_201826-removebg-preview.png', name: "CALÇA SLIM", description: 'Calça Slim Fit', price:  79.90, gender: 'masculino', category: 'calça' },
    { id: 5, imagem: 'assets/images/produtos/calça-cargo-fit.png', name: "CALÇA CARGO", description: 'Calça Cargo Fit', price:  89.90, gender: 'masculino', category: 'calça' },
    { id: 6, imagem: 'assets/images/produtos/camiseta-de-moletom.png', name: "CAMISETA", description: 'Camiseta de Moletom', price:  99.90, gender: 'feminino', category: 'camiseta' },
    { id: 7, imagem: 'assets/images/produtos/conjunto-minnie-mouse.png', name: "CONJUNTO", description: 'Conjunto Minnie Mouse', price: 109.90, gender: 'feminino', category: 'camiseta' },
    { id: 8, imagem: 'assets/images/produtos/jaqueta-bomber.png', name: "JAUQETA", description: 'Jaqueta Bomber', price: 119.90, gender: 'masculino', category: 'jaqueta' },
    { id: 9, imagem: 'assets/images/produtos/jaqueta-leve-acolchoada.png', name: "JAQUETA", description: 'Jaqueta Leve Acolchoada', price: 129.90, gender: 'feminino', category: 'jaqueta' },
    { id: 10, imagem: 'assets/images/produtos/macacao-fluido.png', name: "MACACÃO", description: 'Macacão Fluido', price: 139.90, gender: 'feminino', category: 'vestido' },
    { id: 11, imagem: 'assets/images/produtos/moletom-com-capuz.png', name: "MOLETOM", description: 'Moletom com Capuz', price: 149.90, gender: 'masculino', category: 'camiseta' },
    { id: 12, imagem: 'assets/images/produtos/moletom-com-ziper.png', name: "MOLETOM", description: 'Moletom com Ziper', price: 159.90, gender: 'feminino', category: 'camiseta' },
    { id: 13, imagem: 'assets/images/produtos/vestido-com-nervuras.png', name: "VESTIDO", description: 'Vestido com Nervuras', price: 49.90, gender: 'feminino', category: 'vestido' },
    { id: 14, imagem: 'assets/images/produtos/vestido-estilo-lengerie.png', name: "VESTIDO", description: 'Vestido Estilo Lengerie', price: 59.90, gender: 'feminino', category: 'vestido' },
    { id: 15, imagem: 'assets/images/produtos/jeans-zw-the-marine.png', name: "JEANS", description: 'Jeans ZW the Marine', price: 69.90, gender: 'masculino', category: 'calça' },
    { id: 16, imagem: 'assets/images/produtos/jaqueta-biker-cropped.png', name: "JAQUETA", description: 'Jaqueta Biker Cropped', price: 79.90, gender: 'masculino', category: 'jaqueta' },
    { id: 17, imagem: `assets/images/roupas/vestido.jpg`, name: "VESTIDO", description: "Vestido curto de decote redondo com decote em V.", price: 289, gender: 'feminino', category: 'vestido' },
    { id: 18, imagem: 'assets/images/roupas/bolsa.jpg"', name: "BOLSA TOTE BAG", description: "Bolsa formato tote bag. Alça de ombro.", price: 279, gender: 'feminino', category: 'bolsa' },
    { id: 19, imagem: 'assets/images/roupas/camisa.jpg', name: "CAMISA DE MANGA CURTA", description: "Camisa confeccionada com linho.", price: 199, gender: 'feminino', category: 'camiseta' },
    { id: 20, imagem: 'produto8.jpg', name: "CALÇA CARGO", description: 'Descrição do produto 20', price:  119.90, gender: 'masculino', category: 'jaqueta' },
    { id: 21, imagem: 'produto9.jpg', name: "CALÇA CARGO", description: 'Descrição do produto 21', price:  129.90, gender: 'feminino', category: 'calça' },
    { id: 22, imagem: 'produto10.jpg', name: "CALÇA CARGO", description: 'Descrição do produto 22', price:  139.90, gender: 'masculino', category: 'camiseta' },
    { id: 23, imagem: 'produto11.jpg', name: "CALÇA CARGO", description: 'Descrição do produto 23', price:  149.90, gender: 'feminino', category: 'jaqueta' },
    { id: 24, imagem: 'produto12.jpg', name: "CALÇA CARGO", description: 'Descrição do produto 24', price:  159.90, gender: 'masculino', category: 'camiseta' },
];

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
    let desconto = 0;
    
    if (cupomInput === 'CUPOM10') {
        desconto = 10; 
    } else if (cupomInput === 'CUPOM20') {
        desconto = 20; 
    } else {
        desconto = 0;
        return;
    }

    return desconto
}

// Função para obter o ID do produto a partir da URL
async function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

// Função para carregar as informações do produto
async function loadProduct() {
    const productId = await getProductIdFromUrl();
    const product = roupas.find(p => p.id === productId);
    const divDetalhes = document.getElementById("div-conteudo");
    let subtotal = product.price;  
    let entrega = product.price * 0.05;

    if (subtotal > 250.89) {
        entrega = 0;
    }

    let total = subtotal + entrega;

    if (product) {
        document.getElementById("div-imagem").innerHTML = `<img src="${product.imagem}" class="card-img-top img-produto" alt="${product.description}">`;
        divDetalhes.setAttribute('data-price', product.price.toFixed(2));
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-price").textContent = `R$${product.price.toFixed(2).replace(".", ",")}`;
        document.getElementById("subtotal").textContent = `Subtotal: R$${subtotal.toFixed(2).replace(".", ",")}`;
        document.getElementById("entrega").textContent = `Entrega: R$${entrega.toFixed(2).replace(".", ",")}`;
        document.getElementById("total").textContent = `Total: R$${total.toFixed(2).replace(".", ",")}`;
    } else {
        document.getElementById('title').textContent = "Product not found";
        document.getElementById("div-imagem").innerHTML = `<img src="assets/images/tratar-erros/error.png" alt="Imagem do Produto">`;
        divDetalhes.setAttribute('data-price', 0.00);
        document.getElementById("product-name").textContent = "Product not found";
        document.getElementById("product-description").textContent = "Sinto muito, não encontramos o produto que você procurava :(";
        document.getElementById("product-price").textContent = "0,00";
    }
}

// Executa a função quando a página é carregada
window.onload = loadProduct;