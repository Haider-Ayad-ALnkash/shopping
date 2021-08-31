let username=document.getElementById("user"),
    userInfo=document.getElementById("userInfo"),
    navbar_nav=document.querySelector(".nav-regester"),
      dataUser=localStorage.getItem("username")
if(dataUser){
    navbar_nav.remove();
    username.style.display='block';
    userInfo.innerHTML=dataUser;
}

let productsDom=document.querySelector(".products");
function drawProducts() {
    let productsUI=products.map((item)=>{
        return`
        <div class="card mb-3 " style="max-width: 640px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img class="img-fluid rounded-start" src=${item.imageUrl} alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" onclick="transtionToURL(${item.id})" >${item.title}</h5>
                  <p class="card-text">${item.desc}</p>
                  <p class="card-text">${item.qyt}</p>
                  <p class="card-text">${item.size}</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  <button type="button" class="btn btn-primary" onclick="addDataProduct(${item.id})">Add To Cart</button>
                  <span class="badge rounded-pill bg-danger">Danger</span>
                  </div>
              </div>
            </div>
          </div>
        `;
    });
    productsDom.innerHTML=productsUI;
}
drawProducts();
// Start Check exit user

//Open shoppingCart
let shoppingCart=document.querySelector('.shoppingCart'),
    containerCart=document.querySelector(".containerCart"),
    btnbuges=document.querySelector(".buges")
function openshoppingCart() {
        if ( shoppingCart.style.display ==="none") {
            shoppingCart.style.display='block';
        }else{
            shoppingCart.style.display='none';
        }
}
btnbuges.addEventListener("click",openshoppingCart);
// add Data Product in cart shopping
let badge=document.querySelector('.badge');
let addItem=localStorage.getItem("dataShoppingCart")? JSON.parse(localStorage.getItem("dataShoppingCart")):[];
if (addItem) {
    addItem.map(item=>{
        containerCart.innerHTML+=`<h4 class="list-group-item list-group-item-action">${item.title}</h4>`;
    })
    badge.innerHTML=addItem.length;
}
function addDataProduct(id) {
    if (dataUser) {
        choosenProduct=products.find(item=>item.id===id);
        containerCart.innerHTML+=`<h4 class="list-group-item list-group-item-action">${choosenProduct.title}</h4>`;
        let shoppingLengthCart=document.querySelectorAll(".containerCart h4");
        addItem=[...addItem,choosenProduct];
        localStorage.setItem("dataShoppingCart",JSON.stringify(addItem));
        badge.innerHTML=shoppingLengthCart.length;
    } else {
        location="login.html";
    }
}

// Func transtionToURL
function transtionToURL(id) {
    localStorage.setItem("idURL",id);
    location="detailsProduct.html";
}

//Searh on product
inputSearch=document.getElementById("search");
inputSearch.addEventListener("keyup",(e)=>{
  if (e.keyCode=== 13 ) {
    
  }  
  if (e.target.value.trim()==="") {
    drawProducts();
  }
})