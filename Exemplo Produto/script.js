// Dados fictícios dos produtos
const products = [
    {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        price: "$10"
    },
    {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
        price: "$20"
    },
    {
        id: 3,
        name: "Product 3",
        description: "Description for Product 3",
        price: "$30"
    }
];

// Função para obter o ID do produto a partir da URL
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

// Função para carregar as informações do produto
function loadProduct() {
    const productId = getProductIdFromUrl();
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-price").textContent = product.price;
    } else {
        document.getElementById("product-name").textContent = "Product not found";
    }
}

// Executa a função quando a página é carregada
window.onload = loadProduct;
