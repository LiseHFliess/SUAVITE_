/**
 * Variável global para armazenar a contagem de itens no carrinho.
 * Em um cenário real, você usaria LocalStorage para persistir esses dados.
 */
let cartItemCount = 0;

/**
 * Função para adicionar um item ao carrinho.
 * Ela incrementa o contador e atualiza o display no cabeçalho.
 * @param {number} productId O ID do produto a ser adicionado.
 */
function addToCart(productId) {
    // 1. Incrementa o contador do carrinho
    cartItemCount++;

    // 2. Encontra o elemento de contagem no HTML
    const cartCountElement = document.getElementById('cartCount');

    // 3. Atualiza o texto do elemento com a nova contagem
    if (cartCountElement) {
        cartCountElement.textContent = cartItemCount;
    }

    // Opcional: Você pode adicionar lógica aqui para realmente armazenar
    // os detalhes do produto (nome, preço, etc.) em um array ou LocalStorage.
    // Esta linha apenas mostra uma mensagem no console do navegador.
    console.log(`Produto com ID ${productId} adicionado ao carrinho. Total de itens: ${cartItemCount}`);
    
    // LINHA alert() FOI REMOVIDA AQUI
}

// Nota: A função addToCart() também é chamada no botão do cabeçalho
// <button class="cart__button" onclick="addToCart()">
// No cabeçalho, a chamada é sem argumento (addToCart()), mas ela ainda 
// funciona para incrementar a contagem. É bom padronizar.