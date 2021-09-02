let username=document.getElementById("user"),
    userInfo=document.getElementById("userInfo"),
    navbar_nav=document.querySelector(".nav-regester"),
      dataUser=localStorage.getItem("username")
if(dataUser){
    navbar_nav.remove();
    username.style.display='block';
    userInfo.innerHTML=dataUser;
}
let dataProducts=DataProduct;
let productsDom=document.querySelector(".products");
let drawProductsUI;
(drawProductsUI = function drawProducts(products=[]) {
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
                  <button type="button" class="btn btn-primary" onclick="addDataToCart(${item.id})">Add To Cart</button>
                  <i class="badge rounded-pill bg-danger" onclick="addFavorite(${item.id})" style="color:${item.like==true?'green':''}" >[==]</i>
                  </div>
              </div>
            </div>
          </div>
        `;
    });
    productsDom.innerHTML=productsUI.join(" ");
})( JSON.parse(localStorage.getItem("products"))||dataProducts);
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
        containerCart.innerHTML+=`<h4 class="list-group-item list-group-item-action">${item.title}${item.qyt}</h4>`;
    })
    badge.innerHTML=addItem.length;
}

//Func add to cart 
allItem=[];
function addDataToCart(id) {
    if (dataUser) {
        let products=JSON.parse(localStorage(""))|| dataProducts 
        choosenProduct=dataProducts.find(item=>item.id===id);
       let item=allItem.find(i=>i.id===choosenProduct.id)
        if (item) {
         choosenProduct.qyt+=1;
       } else {
         allItem.push(choosenProduct);
       }
       containerCart.innerHTML="";

       allItem.forEach(item=>{
         containerCart.innerHTML+=`<h4 class="list-group-item list-group-item-action">${item.title} ${item.qyt}</h4>`;
       })
        let shoppingLengthCart=document.querySelectorAll(".containerCart h4");
        addItem=[...addItem,choosenProduct];
       let uniqeProducts= uniqArray(addItem,"id");
        localStorage.setItem("dataShoppingCart",JSON.stringify(uniqeProducts));
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
    search(e.target.value,dataProducts);
  if (e.target.value.trim()==="") {
    drawProductsUI(dataProducts)
  }
})
function search(title,myArray) {
    let arr=myArray.filter(item=>item.title.indexOf(title) !== -1)
    drawProductsUI(arr)
}

// Get Uniuqe Array 
function uniqArray(arr,filterType) {
  let uniqeArray=arr.map(item=>item[filterType])
  .map((item,index,finalArray)=>finalArray.indexOf(item)===index && index)
  .filter((item)=>arr[item])
  .map((item)=>arr[item]);
  return uniqeArray;
}

// func favorate  
let favoriteItems=localStorage.getItem("favItems")?JSON.parse(localStorage.getItem("favItems")):[];
function addFavorite(id) {
    if (dataUser) {
      let choosenProduct=dataProducts.find(item=>item.id===id);
      choosenProduct.like=true;
      favoriteItems=[...favoriteItems,choosenProduct];
      let finalArrayFav= uniqArray(favoriteItems,"id");
      facaoriteArray=localStorage.setItem("favItems",JSON.stringify(finalArrayFav));
      dataProducts.map(item=>{
        if (item.id === choosenProduct.id){
          item.like=true;
        }
      })
      localStorage.setItem("products",JSON.stringify(dataProducts))
      drawProductsUI(dataProducts);
      console.log(dataProducts);
  } else {
      location="login.html";
  }
}