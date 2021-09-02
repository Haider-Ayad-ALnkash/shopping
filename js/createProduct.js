let image=document.getElementById("image"),
     Name=document.getElementById("name"),
     DESCRIPTION =document.getElementById("DESCRIPTION"),
     size=document.getElementById("size"),
     btnCreate=document.getElementById("btnCreate");
//Events
btnCreate.addEventListener("click",(e)=>{
    e.preventDefault();
    let products=JSON.parse(localStorage.getItem("products"));
   let obj={
        id:products?products.length + 1:1,
        title:Name.value,
        desc:DESCRIPTION.value,
        size:size.value,
        qyt:1,
        imageUrl:productImage
   };

   let newlProducts=products? [...products,obj]:[obj];
   localStorage.setItem("products",JSON.stringify(newlProducts))
})

image.addEventListener("change",uploadImage)

function uploadImage() {
    let file=this.files[0];
    console.log(file);
    let types=["image/jpeg","image/png"];
    if (types.indexOf(file.type) == -1){
        alert("not support this format");
        return
    }
    if (file.size > 2*1024 * 1024 ) {
        alert("this is big image")
        return;
    }
    getBased64(file);
}
function getBased64(file){
    let reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onload=()=>{     
        productImage=reader.result;
    }
}