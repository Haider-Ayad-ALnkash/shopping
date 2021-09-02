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
function drawProducts(allproducts=[]) {
    let dataShoppingCart=JSON.parse(localStorage.getItem("favItems"))||allproducts;
    let productsUI=dataShoppingCart.map((item)=>{
        return`
        <div class="card mb-3 " style="max-width: 640px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img class="img-fluid rounded-start" src=${item.imageUrl} alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">${item.desc}</p>
                  <p class="card-text">${item.qyt}</p>
                  <p class="card-text">${item.size}</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  <button type="button" class="btn btn-primary" onclick="deleteProduct(${item.id})">Remove Fvao</button>
                  <span class="badge rounded-pill bg-danger">Danger</span>
                  </div>
              </div>
            </div>
          </div>
        `;
    });
    productsDom.innerHTML=productsUI.join(" ");
}
drawProducts();

function deleteProduct(id) {
    let items=JSON.parse(localStorage.getItem("favItems"));
    let newItems=items.filter(item=>item.id !== id);
    localStorage.setItem("favItems",JSON.stringify(newItems));
    drawProducts(newItems);
}