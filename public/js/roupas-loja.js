// Dados fictícios dos produtos
const roupas = [
    {
        id: 1,
        imagem: `<img src="assets/images/roupas/vestido.jpg" alt="Imagem do Produto">`,
        name: "VESTIDO",
        description: "Vestido curto de decote redondo com decote em V e manga por debaixo do cotovelo com elástico. Detalhe de bordados perfurados com tecido efeito de caucho. Fecho frontal com botões e cinto no tom.",
        price: 289
    },
    {
        id: 2,
        imagem: `<img src="assets/images/roupas/bolsa.jpg" alt="Imagem do Produto">`,
        name: "BOLSA TOTE BAG",
        description: "Bolsa formato tote bag. Alça de ombro. Detalhe de pendente. Bolso interior maxi. Fecho de ímã. Altura x Largura x Profundidade: 29,5 x 36,5 x 12 cm.",
        price: 279
    },
    {
        id: 3,
        imagem: `<img src="assets/images/roupas/camisa.jpg" alt="Imagem do Produto">`,
        name: "CAMISA DE MANGA CURTA",
        description: "Camisa confeccionada com linho. Gola com lapela, decote em V e manga curta com acabamento em dobra com presilha e botão. Bolsos de patch com aba na frente. Fecho na frente com botões.",
        price: 199
    }
];

// Função para obter o ID do produto a partir da URL
async function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

// Função para carregar as informações do produto
async function loadProduct() {
    const productId = await getProductIdFromUrl();
    const product = roupas.find(p => p.id === productId);
    const divDetalhes = document.getElementById("div-conteudo")

    if (product) {
        document.getElementById("div-imagem").innerHTML = product.imagem;
        divDetalhes.setAttribute('data-price', product.price.toFixed(2))
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-price").textContent = product.price.toFixed(2).replace(".", ",");
        document.getElementById('title').textContent = product.name;
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