document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

function mostrarMenu() {
    document.querySelector('.menu-producto').style.display = 'flex';
    document.querySelector('.overlay').style.display = 'flex';
}

function ocultarMenu() {
    document.querySelector('.menu-producto').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}

let isLiked = false;
function Like(){
    const likeButton = document.querySelector('.like');
    const corazon = likeButton.querySelector('span');

    if (isLiked) {
        corazon.innerHTML = '🤍';
    } else {
        corazon.innerHTML = '❤️';
    }

    isLiked = !isLiked;
}

function cambiarEstiloBoton(boton) {
    if (boton.textContent === 'Agregar Al Carrito') {
        boton.textContent = 'Añadido al Carrito';
        boton.style.backgroundColor = '#ff8900'; 
        boton.style.color = 'white'; 
        actualizarCantidadCarrito(1);
    } else {
        boton.textContent = 'Agregar Al Carrito';
        boton.style.backgroundColor = 'transparent'; 
        boton.style.color = '#ff8900'; 

        actualizarCantidadCarrito(-1);
    }
}

function actualizarCantidadCarrito(cantidad) {

    const cantidadCarrito = document.getElementById('cantidadCarrito');
    

    let cantidadActual = parseInt(cantidadCarrito.textContent) || 0;
    cantidadActual += cantidad;
    
    cantidadCarrito.textContent = cantidadActual;
}