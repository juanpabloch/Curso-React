var productos = [
    {
        nombre: "harina",
        precio: 35,
        picture: 'https://m.media-amazon.com/images/I/61mC1ueR6eL._AC_UL320_.jpg'
    },
    {
        nombre: "pan",
        precio: 25,
        picture: 'https://m.media-amazon.com/images/I/4122psjbK7L._AC_UL320_.jpg'
    },
    {
        nombre: "papa",
        precio: 52,
        picture: 'https://m.media-amazon.com/images/I/31nbqyyeRpL._AC_UL320_.jpg'
    },
    {
        nombre: "palta",
        precio: 55,
        picture: 'https://m.media-amazon.com/images/I/51QEFmnhZRL._AC_UL320_.jpg'
    },
    {
        nombre: "fideos",
        precio: 85,
        picture: 'https://m.media-amazon.com/images/I/81WRiPK4ipL._AC_UL320_.jpg'
    },
    {
        nombre: "aceite",
        precio: 350,
        picture: 'https://m.media-amazon.com/images/I/71VbrnFlF6L._AC_UL320_.jpg'
    },
    {
        nombre: "sopa" ,
        precio: 86,
        picture: 'https://m.media-amazon.com/images/I/71OjX+OXZDL._AC_UL320_.jpg'
    },
    {
        nombre: "mermelada" ,
        precio: 108,
        picture: 'https://m.media-amazon.com/images/I/91tXt701gYL._AC_UL320_.jpg'
    },
    {
        nombre: "porotos" ,
        precio: 69,
        picture: 'https://m.media-amazon.com/images/I/71a1-SNkDpL._AC_UL320_.jpg'
    },
    {
        nombre: "lentejas" ,
        precio: 85,
        picture: 'https://m.media-amazon.com/images/I/81fIpHhq1hL._AC_UL320_.jpg'
    },
    {
        nombre: "mandarina" ,
        precio: 43,
        picture: 'https://m.media-amazon.com/images/I/41VTXdc2OhL._AC_UL320_.jpg'
    },
    {
        nombre: "banana" ,
        precio: 79,
        picture: 'https://m.media-amazon.com/images/I/21dA3cYpqOL._AC_UL320_.jpg'
    },
    {
        nombre: "leche de almendras" ,
        precio: 145,
        picture: 'https://m.media-amazon.com/images/I/817oU2mQ2lL._AC_UL320_.jpg'
    },
    {
        nombre: "papel higiénico" ,
        precio: 147,
        picture: 'https://m.media-amazon.com/images/I/81NjC2FlvqL._AC_UL320_.jpg'
    },
    {
        nombre: "lavandina" ,
        precio: 55,
        picture: 'https://m.media-amazon.com/images/I/71wFGuU-S-L._AC_UL320_.jpg'
    },
    {
        nombre: "alcohol en gel" ,
        precio: 123,
        picture: 'https://m.media-amazon.com/images/I/61tvN7ijtWL._AC_UL320_.jpg'
    },
    {
        nombre: "shampoo" ,
        precio: 400,
        picture: 'https://m.media-amazon.com/images/I/71VOHUakR5L._AC_UL480_QL65_.jpg'
    },
    {
        nombre: "arroz" ,
        precio: 66,
        picture: 'https://m.media-amazon.com/images/I/91DMYwvTaeL._AC_UL320_.jpg'
    },
    {
        nombre: "salsa de tomate" ,
        precio: 35,
        picture: 'https://m.media-amazon.com/images/I/81X5WeaL1SL._AC_UL320_.jpg'
    },
];

/* elementos del DOM */

const $cartBtn = document.querySelector('.cart-btn');

const $listaPrincipal = document.querySelector('#lista');

const $listaCart = document.querySelector(".lista-cart");

const $paginas = document.querySelectorAll('.pagina');

const $cantidadCarrito = document.querySelector("#cantidad-carrito");

/* variables */
let shopCart = [];
let sumaTotal = 0;
let cantidad = shopCart.length;

window.addEventListener("DOMContentLoaded", e=>{
   
    mostrarItemsPaginaPrincipal(productos);
    renderCantidadCarrito();

        /* elementos del DOM */
        const $comprarBtn = document.querySelector('#comprar-btn');

        const $atras = document.querySelector(".atras-btn");
    
        const $agregarCarrito = document.querySelectorAll(".addBtn");
         

    /* eventos */

    $cartBtn.addEventListener('click', e=>{
        mostrarPagina("shopCart");
        mostrarItemsCarrito(shopCart);
        suma(shopCart);
    });

    $comprarBtn.addEventListener('click', e=>{
        if(shopCart.length > 0){
            renderExito(sumaTotal);
            mostrarPagina("exito");
            setTimeout(() => {
                vaciarShopCart();
                $agregarCarrito.forEach(btn=>{
                    habilitarBtn(btn);
                })
                $listaCart.innerHTML = '';
                renderCantidadCarrito();
                mostrarPagina("principal");
                
            }, 3500);
        }else{
            console.error("Carrito vacio no se puede completar accion")
        }
        
    });

    $atras.addEventListener("click",e=>{
        mostrarPagina("principal");
        renderCantidadCarrito();
    });

    $agregarCarrito.forEach(btn=>{
        btn.addEventListener('click', e=>{
            addToCart(e.target.dataset.item);
            deshabilitarBtn(e.target);
            renderCantidadCarrito();
        })
    });
    
});


/* funciones */

function addToCart(producto){
    productos.forEach(item=>{
        if(item.nombre === producto){
            shopCart.push(item);
        }
    })
}


function removeFromCart(producto){
    let index = shopCart.findIndex(item=>{
        if(item.nombre === producto){
            return true
        }
    })

    shopCart.splice(index, 1);
}


function vaciarShopCart(){
    shopCart = [];
} 


function suma(arr){
    let total = 0;
    arr.forEach(item => {
        total += item.precio;
    });
    sumaTotal = total;
    document.querySelector("#total").textContent =`$${total}`;
}

function mostrarPagina(pagina){
    $paginas.forEach(pag=>{
        if(pag.dataset.pagina === pagina){
            pag.style.display = 'block';
        }else{
            pag.style.display = 'none';
        }
    })
}

function deshabilitarBtn(boton){
    boton.disabled = true;
    boton.classList.add("disabled")
}

function habilitarBtn(boton){
    boton.disabled = false;
    boton.classList.remove("disabled")
}

function mostrarItemsPaginaPrincipal(lista){
    let fragmento = document.createDocumentFragment()
    lista.forEach(item=>{
        const producto = document.createElement("div");
        producto.classList.add("producto");
        producto.innerHTML = `
            <div class="img-contain">
                <img class="imagen" src="${item.picture}" alt="foto-${item.nombre}.jpg" />
            </div>
            <div class="info">
                <h2>${item.nombre}</h2>
                <p>$${item.precio}</p>
            </div>
            <button class="addBtn" data-item="${item.nombre}"> <span>+</span> Añadir al carrito</button>
        `  
        fragmento.appendChild(producto);
    });

    $listaPrincipal.appendChild(fragmento);
}

function mostrarItemsCarrito(lista){
    $listaCart.innerHTML = '';
    let fragmento = document.createDocumentFragment()
    if(lista.length > 0){
        lista.forEach(item=>{
            const producto = document.createElement("div");
            producto.classList.add("producto-cart");
            producto.innerHTML = `
                <div class="img-cart">
                    <img class="imagen" src="${item.picture}" alt="foto-${item.nombre}.jpg" />
                </div>
                
                <div class="nombre">
                    <h2>${item.nombre}</h2>
                </div>
                
                <div class="precio">
                    <p>$${item.precio}</p>
                </div>
                
                
                <button id="eliminar" data-item="${item.nombre}">x</button>
            `  
            fragmento.appendChild(producto);
        });
    
        $listaCart.appendChild(fragmento);
        
        /* boton eliminar */
        const $eliminar = document.querySelectorAll('#eliminar');
        $eliminar.forEach(btn=>{
            btn.addEventListener('click', e=>{
                removeFromCart(e.target.dataset.item)
                mostrarItemsCarrito(shopCart);
                suma(shopCart);
                document.querySelectorAll('.addBtn').forEach(btn=>{
                    if(btn.dataset.item === e.target.dataset.item){
                        habilitarBtn(btn);
                    }
                })
            })
        });
    }else{
        let mensaje = document.createElement('p')
        mensaje.textContent = "No hay productos en el carrito"
        $listaCart.appendChild(mensaje);
    }
    
}

function renderExito(total){
    document.querySelector('#exito').innerHTML = `
        <h2>Su compra se ha realizado con exito</h2>
        <p>Total Pagado = $${total}</p>
    `
}

function renderCantidadCarrito(){
    $cantidadCarrito.textContent = shopCart.length;
}