

document.querySelector("#elem1").addEventListener("mouseover",()=>{
document.querySelector(".imgelem").setAttribute("src","/images/elem1.webp");
console.log(document.querySelector(".imgelem").getAttribute("src"));
});
document.querySelector("#elem2").addEventListener("mouseover",()=>{
 document.querySelector(".imgelem").setAttribute("src","/images/elem2.webp");
 console.log(document.querySelector(".imgelem").getAttribute("src"));
 });
 document.querySelector("#elem3").addEventListener("mouseover",()=>{
 document.querySelector(".imgelem").setAttribute("src","/images/elem3.webp");
    console.log(document.querySelector(".imgelem").getAttribute("src"));
    });
    document.querySelector("#elem4").addEventListener("mouseover",()=>{
        document.querySelector(".imgelem").setAttribute("src","/images/elem4.webp");
        console.log(document.querySelector(".imgelem").getAttribute("src"));
        });
        document.querySelector("#elem5").addEventListener("mouseover",()=>{
            document.querySelector(".imgelem").setAttribute("src","/images/elem5.webp");
            console.log(document.querySelector(".imgelem").getAttribute("src"));
            });
            document.querySelector("#elem6").addEventListener("mouseover",()=>{
                document.querySelector(".imgelem").setAttribute("src","/images/elem6.webp");
                console.log(document.querySelector(".imgelem").getAttribute("src"));
                });
                document.querySelector("#elem7").addEventListener("mouseover",()=>{
                    document.querySelector(".imgelem").setAttribute("src","/images/elem7.webp");
                    console.log(document.querySelector(".imgelem").getAttribute("src"));
                    });
                                                       
// swipper

const swiper = new Swiper('.swiper', {
    slidesPerView: 3.5,
    spaceBetween: 0,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,  
      },
  });

//   scrolltrigger
let t1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page6",
        start:"10% 10%",
        end:"120% 50%",
        markers:true,
        scrub:1,
    }
})
t1.to(".head-hover",{
    width:"100%"
})