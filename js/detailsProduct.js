let dataProducts=JSON.parse(localStorage.getItem("products"));


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
  let product=dataProducts.find(item=>item.id == localStorage.getItem("idURL")); 
  productsDom.innerHTML=  `
      <div class="card mb-3">
        <img src=${product.imageUrl} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.desc}</p>
          <p class="card-text">${product.qyt}</p>
          <p class="card-text"><small class="text-muted">${product.size}</small></p>
        </div>
    </div>
      `;
}
drawProducts();