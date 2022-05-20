var bullet=document.querySelectorAll(".video .bullet span"),
    video=document.querySelector(".video video");
bullet.forEach(bul=>{
    bul.addEventListener("click",function(e){
        video.src=e.target.dataset.color
    })
})