/** ================================================ typing animation ===================================== */
var typed = new Typed (".typing", {
    Strings:["","Web Designer","Web Developer","Graphic Designer","YouTube"],
    typeSpeed:100,
    backSpeed:60,                        
    loop:true
})





/** ================================================ Aside ===================================== */
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length;
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
 {
   this.classList.add("active")
 })
}








// hide style-switcher on scroll
window.addEventListener("scroll", () => {
    if( document.querySelector("style-switche").classList.contains("open"))
    {
        document.querySelector("style-switche").classList.remove("open");
    }
})

/* =============================== theme colors ========================================= */
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(colors)

{

    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true" );       
        }
    })
}






