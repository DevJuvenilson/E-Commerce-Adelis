// Lista de produtos com informações de gênero e categoria
const products = [
    { id: 1, imagem: 'assets/images/produtos/Captura_de_tela_2024-08-28_201736-removebg-preview.png', name: "CALÇA CARGO", description: 'Calça Cargo', price: 'R$ 59,90', gender: 'masculino', category: 'calça' },
    { id: 2, imagem: 'assets/images/produtos/Captura_de_tela_2024-08-28_201703-removebg-preview.png', name: "CALÇA CARGO", description: 'Calça Cargo com Bolso', price: 'R$ 49,90', gender: 'feminino', category: 'calça' },
    { id: 3, imagem: 'assets/images/produtos/Captura_de_tela_2024-08-28_201800-removebg-preview.png', name: "CALÇA ", description: 'Calça com Textura', price: 'R$ 69,90', gender: 'feminino', category: 'calça' },
    { id: 4, imagem: 'assets/images/produtos/Captura_de_tela_2024-08-28_201826-removebg-preview.png', name: "CALÇA SLIM", description: 'Calça Slim Fit', price: 'R$ 79,90', gender: 'masculino', category: 'calça' },
    { id: 5, imagem: 'assets/images/produtos/calça-cargo-fit.png', name: "CALÇA CARGO", description: 'Calça Cargo Fit', price: 'R$ 89,90', gender: 'masculino', category: 'calça' },
    { id: 6, imagem: 'assets/images/produtos/camiseta-de-moletom.png', name: "CAMISETA", description: 'Camiseta de Moletom', price: 'R$ 99,90', gender: 'feminino', category: 'camiseta' },
    { id: 7, imagem: 'assets/images/produtos/conjunto-minnie-mouse.png', name: "CONJUNTO", description: 'Conjunto Minnie Mouse', price: 'R$ 109,90', gender: 'feminino', category: 'camiseta' },
    { id: 8, imagem: 'assets/images/produtos/jaqueta-bomber.png', name: "JAUQETA", description: 'Jaqueta Bomber', price: 'R$ 119,90', gender: 'masculino', category: 'jaqueta' },
    { id: 9, imagem: 'assets/images/produtos/jaqueta-leve-acolchoada.png', name: "JAQUETA", description: 'Jaqueta Leve Acolchoada', price: 'R$ 129,90', gender: 'feminino', category: 'jaqueta' },
    { id: 10, imagem: 'assets/images/produtos/macacao-fluido.png', name: "MACACÃO", description: 'Macacão Fluido', price: 'R$ 139,90', gender: 'feminino', category: 'vestido' },
    { id: 11, imagem: 'assets/images/produtos/moletom-com-capuz.png', name: "MOLETOM", description: 'Moletom com Capuz', price: 'R$ 149,90', gender: 'masculino', category: 'camiseta' },
    { id: 12, imagem: 'assets/images/produtos/moletom-com-ziper.png', name: "MOLETOM", description: 'Moletom com Ziper', price: 'R$ 159,90', gender: 'feminino', category: 'camiseta' },
    { id: 13, imagem: 'assets/images/produtos/vestido-com-nervuras.png', name: "VESTIDO", description: 'Vestido com Nervuras', price: 'R$ 49,90', gender: 'feminino', category: 'vestido' },
    { id: 14, imagem: 'assets/images/produtos/vestido-estilo-lengerie.png', name: "VESTIDO", description: 'Vestido Estilo Lengerie', price: 'R$ 59,90', gender: 'feminino', category: 'vestido' },
    { id: 15, imagem: 'assets/images/produtos/jeans-zw-the-marine.png', name: "JEANS", description: 'Jeans ZW the Marine', price: 'R$ 69,90', gender: 'masculino', category: 'calça' },
    { id: 16, imagem: 'assets/images/produtos/jaqueta-biker-cropped.png', name: "JAQUETA", description: 'Jaqueta Biker Cropped', price: 'R$ 79,90', gender: 'masculino', category: 'jaqueta' },
    { id: 17, imagem: `assets/images/roupas/vestido.jpg`, name: "VESTIDO", description: "Vestido curto de decote redondo com decote em V e manga por debaixo do cotovelo com elástico. Detalhe de bordados perfurados com tecido efeito de caucho. Fecho frontal com botões e cinto no tom.", price: 'R$ 289', gender: 'feminino', category: 'vestido' },
    { id: 18, imagem: 'assets/images/roupas/bolsa.jpg"', name: "BOLSA TOTE BAG", description: "Bolsa formato tote bag. Alça de ombro. Detalhe de pendente. Bolso interior maxi. Fecho de ímã. Altura x Largura x Profundidade: 29,5 x 36,5 x 12 cm.", price: 'R$ 279', gender: 'feminino', category: 'bolsa' },
    { id: 19, imagem: 'assets/images/roupas/camisa.jpg', name: "CAMISA DE MANGA CURTA", description: "Camisa confeccionada com linho. Gola com lapela, decote em V e manga curta com acabamento em dobra com presilha e botão. Bolsos de patch com aba na frente. Fecho na frente com botões.", price: 'R$ 199', gender: 'feminino', category: 'camiseta' },
    { id: 20, imagem: 'produto8.jpg', name: "CALÇA CARGO", description: 'Descrição do produto 20', price: 'R$ 119,90', gender: 'masculino', category: 'jaqueta' },
    { id: 21, imagem: 'produto9.jpg', name: "CALÇA CARGO", description: 'Descrição do produto 21', price: 'R$ 129,90', gender: 'feminino', category: 'calça' },
    { id: 22, imagem: 'produto10.jpg', name: "CALÇA CARGO", description: 'Descrição do produto 22', price: 'R$ 139,90', gender: 'masculino', category: 'camiseta' },
    { id: 23, imagem: 'produto11.jpg', name: "CALÇA CARGO", description: 'Descrição do produto 23', price: 'R$ 149,90', gender: 'feminino', category: 'jaqueta' },
    { id: 24, imagem: 'produto12.jpg', name: "CALÇA CARGO", description: 'Descrição do produto 24', price: 'R$ 159,90', gender: 'masculino', category: 'camiseta' },
];

let productsPerPage = 8;
let currentPage = 1;
let selectedGender = '';
let selectedCategory = '';

function renderProducts() {
    const container = document.getElementById('productContainer');
    container.innerHTML = ''; // Limpa o container

    // Filtra os produtos
    const filteredProducts = products.filter(product => {
        return (selectedGender === '' || product.gender === selectedGender) &&
            (selectedCategory === '' || product.category === selectedCategory);
    });

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = currentPage * productsPerPage;

    const productsToShow = filteredProducts.slice(0, endIndex);
    productsToShow.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-md-3', 'mb-3');

        productDiv.innerHTML = `
                    <div class="card h-100">
                        <a href="produto.html?id=${product.id}">
                            <img src="${product.imagem}" class="card-img-top" alt="${product.description}">
                            <div class="card-body">
                                <p class="card-text">${product.description}</p>
                                <p class="card-text"><strong>${product.price}</strong></p>
                            </div>
                        </a>
                    </div>
                `;

        container.appendChild(productDiv);
    });

    document.getElementById('loadMoreBtn').classList.toggle('d-none', endIndex >= filteredProducts.length);
    document.getElementById('loadLessBtn').classList.toggle('d-none', currentPage === 1);
}

document.getElementById('loadMoreBtn').addEventListener('click', () => {
    currentPage++;
    renderProducts();
});

document.getElementById('loadLessBtn').addEventListener('click', () => {
    currentPage--;
    renderProducts();
});

document.getElementById('genderFilter').addEventListener('change', (event) => {
    selectedGender = event.target.value;
    currentPage = 1;
    renderProducts();
});

document.getElementById('categoryFilter').addEventListener('change', (event) => {
    selectedCategory = event.target.value;
    currentPage = 1;
    renderProducts();
});

// Renderiza os produtos iniciais
renderProducts();