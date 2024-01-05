let btn1=document.querySelector("#btn1")
console.log(btn1);
let buttonoff="light";
btn1.addEventListener("click",()=>{
    if(buttonoff==="light"){
        buttonoff="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        buttonoff="light";
        document.querySelector("body").style.backgroundColor="white";
    
    }
    console.log(buttonoff);
})
