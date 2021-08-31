let username=document.getElementById("iduserName"),
    pass=document.getElementById("idPassword"),
    btnRegster=document.getElementById("btnSubmit");
let dataUser=localStorage.getItem("username"),
    dataPassword=localStorage.getItem("pass");

    btnRegster.addEventListener('click',(e)=>{
        e.preventDefault();
        if(username.valu===""||pass.value === ""){
            alert("please Enter your Data");
        }else if(username.value===dataUser && pass.value===dataPassword){
            setTimeout(()=>{
                location='index.html';
            },1500)
        }else{
            alert("your Data is Wronge");
        }
    })