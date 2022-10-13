// Contenedor de productos
const products = document.querySelector('.products-container');
const productsCart = document.querySelector('.cart-container');
const total = document.querySelector('.total');
const categories = document.querySelector('.categories');
// un html collection de todas las categorias
const categoriesList = document.querySelectorAll('.category');
const btnLoad = document.querySelector('.btn-load');
const buyBtn = document.querySelector('.btn-buy');
const cartBtn = document.querySelector('.cart-label');
const barsBtn = document.querySelector('.menu-label');
const cartMenu = document.querySelector('.cart');
const barsMenu = document.querySelector('.navbar-list');
const overlay = document.querySelector('.overlay');

// Setear el array para el carro
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Funcion para guardar en el localStorage
const saveLocalStorage = cartList => {
  localStorage.setItem('cart', JSON.stringify(cartList));
};

// Funcion para retornar el html a renderizar
const renderProduct = product => {
  const { id, name, bid, user, userImg, cardImg } = product;
  return `
    <div class="product">
    <img src=${cardImg} alt=${name} />
    <div class="product-info">
        <!-- top -->
        <div class="product-top">
            <h3>${name}</h3>
            <p>Current Bid</p>
        </div>

        <!-- mid -->
        <div class="product-mid">
            <div class="product-user">
                <img src=${userImg} alt="user" />
                <p>@${user}</p>
            </div>
            <span>${bid} eTH</span>
        </div>

        <!-- bot -->
        <div class="product-bot">
            <div class="product-offer">
                <div class="offer-time">
                    <img src="./assets/img/fire.png" alt="" />
                    <p>05:12:07</p>
                </div>
                <button class="btn-add"
                data-id='${id}'
                data-name='${name}'
                data-bid='${bid}'
                data-img='${cardImg}'>Add</button>
            </div>
        </div>
    </div>
</div>`;
};

// Funcion para renderizar los productos divididos.
// Recibe uin index, si no recibe nada por defecto va a ser 0
// Si el index es 0  renderiza el primer array del data
const renderDividedProducts = (index = 0) => {
  products.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct)
    .join('');
};

const renderFilteredProducts = category => {
  const productList = productsData.filter(
    product => product.category === category
  );

  products.innerHTML = productList.map(renderProduct).join('');
};

// Funcion para renderizar los productos
// Recibe un index, si no le pasamos nada por default va a ser 0 y una categoria, si no le pasamos nada por default va a ser undefined
// Si no hay categoria renderizame los productos del array dividido.
// Si hay categoria ejecuta renderFilteredProducts
const renderProducts = (index = 0, category = undefined) => {
  if (!category) {
    renderDividedProducts(index);
    return;
  }
  renderFilteredProducts(category);
};

// Logica de filtros
const changeShowMoreBtnState = category => {
  if (!category) {
    btnLoad.classList.remove('hidden');
    return;
  }
  btnLoad.classList.add('hidden');
};

const changeBtnActiveState = selectedCategory => {
  const categories = [...categoriesList];
  categories.forEach(categoryBtn => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove('active');
      return;
    }
    categoryBtn.classList.add('active');
  });
};

const changeFilterState = e => {
  const selectedCategory = e.target.dataset.category;
  changeBtnActiveState(selectedCategory);
  changeShowMoreBtnState(selectedCategory);
};

// Funcion para aplicar el filtro por categorias
const applyFilter = e => {
  if (!e.target.classList.contains('category')) return;
  changeFilterState(e);
  if (!e.target.dataset.category) {
    products.innerHTML = '';
    renderProducts();
  } else {
    renderProducts(0, e.target.dataset.category);
  }
};

// Funcion que checkee si estamos en el ultimo array del array de productos divididos
const isLastIndexOf = () =>
  productsController.nextProductsIndex === productsController.productsLimit;

// Funcion para cargar mas productos
const showMoreProducts = () => {
  renderProducts(productsController.nextProductsIndex);
  productsController.nextProductsIndex++;
  if (isLastIndexOf()) {
    btnLoad.classList.add('hidden');
  }
};

// Menu Interface
// Logica para abrir y cerrar el carrito/menu y mostrar el overlay
const toggleMenu = () => {
  barsMenu.classList.toggle('open-menu');
  if (cartMenu.classList.contains('open-cart')) {
    cartMenu.classList.remove('open-cart');
    return;
  }
  overlay.classList.toggle('show-overlay');
};

const toggleCart = () => {
  cartMenu.classList.toggle('open-cart');
  if (barsMenu.classList.contains('open-menu')) {
    barsMenu.classList.remove('open-menu');
    return;
  }
  overlay.classList.toggle('show-overlay');
};

// Funcion para cerrar menu y carrito si scrolleamos
const closeOnScroll = () => {
  if (
    !barsMenu.classList.contains('open-menu') &&
    !cartMenu.classList.contains('open-cart')
  )
    return;

  barsMenu.classList.remove('open-menu');
  cartMenu.classList.remove('open-cart');
  overlay.classList.remove('show-overlay');
};

// Funcion inicializadora
const init = () => {
  renderProducts();
  categories.addEventListener('click', applyFilter);
  btnLoad.addEventListener('click', showMoreProducts);
  cartBtn.addEventListener('click', toggleCart);
  barsBtn.addEventListener('click', toggleMenu);
  window.addEventListener('scroll', closeOnScroll);
};

init();
