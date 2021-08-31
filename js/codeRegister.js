let username=document.getElementById("iduserName"),
    email=document.getElementById("idemail"),
    pass=document.getElementById("idPassword"),
    btnRegster=document.getElementById("btnRegester");

    btnRegster.addEventListener('click',(e)=>{
        e.preventDefault();
        if(username.value==="" || email.value===""||pass.value === ""){
            alert("please Enter your Data");
        }else{
            localStorage.setItem("username",username.value.trim());
            localStorage.setItem("email",email.value);
            localStorage.setItem("pass",pass.value);
            setTimeout(()=>{
                location="index.html"
            },1500)
        }
    })